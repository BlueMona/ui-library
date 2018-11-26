import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {
  action,
  computed,
  observable,
  reaction,
  IReactionDisposer
} from 'mobx';
import { observer } from 'mobx-react';

import { ActionProps } from './helpers/interfaces';
import css from 'classnames';
import { Button } from './Button';

// FIXME: remove! untestable
const appRoot = document.getElementById('root') as HTMLElement;

export interface DialogProps {
  /** Buttons at the bottom of the dialog, if any */
  actions?: ActionProps[];

  /** Boolean in the parent that will trigger dialog on `true`, hide on `false`. */
  active: boolean;

  /** Additional classname(s) applied to the inner <dialog> element. */
  className?: string;

  /** No fade in/out transition e.g. when opening a dialog from another dialog */
  noAnimation?: boolean;

  /** Behaviour for Esc key or overlay click */
  onCancel?: () => void;

  /** "Small" sets width to 360px. Default is 50vw. */
  size?: 'small';

  /** Adds a stripe to the top of the dialog. */
  theme?: 'warning' | 'error' | 'primary';

  /** Title displayed at the top of the dialog. */
  title?: React.ReactChild;

  /** URL to header image */
  headerImage?: string;
}

// TODO: there's quite a bit of incidental state and behaviour that's difficult
// to reason about here based around intermediate animation states. it could use
// a closer audit and a pass to simplify it, possibly integrating a react
// library to allow for more declarative animations. (or maybe a future
// css-in-js solution could directly drive animation with less state...?)

/**
 * Usage notes from discussion with Lucas on 30/08/2018: can be invoked either
 * by passing in the prop `active`, OR by getting a ref and calling
 * `showWithoutAnimation`, `setActive()`.
 *
 * (There's at least one story to refactor/audit this:
 * https://app.clubhouse.io/peerio/story/8020/desktop-dialog-manager)
 *
 * WARNING: this component uses the <dialog> dom element, only available in
 * chrome 37+/firefox 53+. it may not be available in other environments.
 */
@observer
export class Dialog extends Component<DialogProps> {
  // Separate "rendered" and "visible" bools to be able to use fade in/out animations
  @observable
  private dialogRendered = false;

  @observable
  private dialogVisible = false;

  private activeReaction: IReactionDisposer | null = null;
  private mountTimeout: NodeJS.Timer | null = null;
  private unmountTimeout: NodeJS.Timer | null = null;

  @observable.ref
  private dialogRef?: HTMLDivElement;

  componentDidMount() {
    /*
        These awkward timeouts are used to stagger the dialog's render event
        from its "make visible" event. The .visible class is tied to the
        dialogVisible bool, which is what triggers the opacity transition.
        Separating these two events ensures that the transition plays.
    */
    this.activeReaction = reaction(
      () => this.props.active,
      active => {
        if (active) {
          this.setActive();
        } else {
          this.setInactive();
        }
      },
      { fireImmediately: true }
    );
  }

  componentWillUnmount() {
    if (this.dialogRendered) {
      window.removeEventListener('keyup', this.handleEscKey);
      window.removeEventListener('keydown', this.handleTabKey);
    }
    if (this.activeReaction) this.activeReaction();
  }

  @action.bound
  setActive() {
    if (this.unmountTimeout) {
      clearTimeout(this.unmountTimeout);
      this.unmountTimeout = null;
    }
    this.dialogRendered = true;
    window.addEventListener('keyup', this.handleEscKey, false);

    this.restrictFocus();

    this.mountTimeout = setTimeout(() => {
      this.dialogVisible = true;
      this.mountTimeout = null;
    }, 1);
  }

  @action.bound
  setInactive() {
    if (this.mountTimeout) {
      clearTimeout(this.mountTimeout);
      this.mountTimeout = null;
    }
    this.dialogVisible = false;
    window.removeEventListener('keyup', this.handleEscKey);
    window.removeEventListener('keydown', this.handleTabKey);

    this.unmountTimeout = setTimeout(() => {
      this.dialogRendered = false;
      this.unmountTimeout = null;
    }, 200);
  }

  @action.bound
  private setDialogRef(ref: HTMLDivElement | null) {
    if (ref) {
      this.dialogRef = ref;
      ref.focus();
    }
  }

  /**
   * Renders and shows dialog immediately
   * Note: be careful when using it together with "visible" property
   */
  @action.bound
  showWithoutAnimation() {
    this.dialogRendered = true;
    this.dialogVisible = true;
  }

  /**
   * Unrenders dialog immediately
   * Note: be careful when using it together with "visible" property
   */
  @action.bound
  hideWithoutAnimation() {
    this.dialogRendered = false;
    this.dialogVisible = false;
  }

  @computed
  get focusableElements() {
    return this.dialogRef!.querySelectorAll(
      'input:not(:disabled), textarea:not(:disabled), button:not(:disabled)'
    );
  }

  @action.bound
  restrictFocus() {
    window.addEventListener('keydown', this.handleTabKey, false);
  }

  @action.bound
  handleEscKey(ev: KeyboardEvent) {
    if (!this.dialogVisible || !this.dialogRendered || !this.props.onCancel)
      return;
    if (ev.keyCode === 27) {
      this.props.onCancel();
    }
  }

  /*
      We need to restrict focus to the dialog when it's visible.

      Clicking outside dialog closes it, so that's OK, but it's still possible
      to use Tab to escape. For a11y we need to keep Tab key functionality, but
      restrict it to the contents of the dialog. This function makes Tab jump
      back to first focusable element if the last one is currently focused, or
      to the last element if Shift+Tab while the first is focused.
  */
  @action.bound
  handleTabKey(ev: KeyboardEvent) {
    if (!this.dialogVisible || !this.dialogRendered) return;

    if (ev.keyCode === 9) {
      if (this.focusableElements.length === 0) {
        ev.preventDefault();
      } else {
        const first = this.focusableElements[0] as HTMLElement;
        const last = this.focusableElements[
          this.focusableElements.length - 1
        ] as HTMLElement;

        if (ev.shiftKey && document.activeElement === first) {
          ev.preventDefault();
          last.focus();
        }

        if (!ev.shiftKey && document.activeElement === last) {
          ev.preventDefault();
          first.focus();
        }
      }
    }
  }

  render() {
    if (!this.dialogRendered) return null;

    const {
      actions,
      className,
      size,
      theme,
      headerImage,
      noAnimation,
      children,
      title,
      onCancel
    } = this.props;

    const buttons = [];
    if (actions) {
      for (let i = 0; i < actions.length; i++) {
        buttons.push(
          <Button
            key={`p-dialog-button-${i}`}
            label={actions[i].label}
            onClick={actions[i].onClick}
            theme={i < actions.length - 1 ? 'secondary' : undefined}
            disabled={actions[i].disabled}
          />
        );
      }
    }

    const dialogContent = (
      <div
        className={css('p-dialog-wrapper', {
          visible: noAnimation || this.dialogVisible,
          'with-header-image': !!headerImage
        })}
        tabIndex={0}
        ref={this.setDialogRef}
      >
        <div className="p-dialog-overlay" onClick={onCancel} />

        <dialog open className={css('p-dialog', className, size, theme)}>
          {headerImage ? (
            <div className="header-image">
              <img src={headerImage} draggable={false} />
            </div>
          ) : null}
          <div className="body">
            {title ? <div className="title">{title}</div> : null}
            {children}
          </div>

          {actions ? <div className="actions">{buttons}</div> : null}
        </dialog>
      </div>
    );

    return ReactDOM.createPortal(dialogContent, appRoot);
  }
}
