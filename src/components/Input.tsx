import React, { Component } from 'react';
import { action, computed, observable } from 'mobx';
import { observer } from 'mobx-react';
import css from 'classnames';

import { Button } from './Button';
import { MaterialIcon } from './MaterialIcon';

interface BaseInputProps {
  className?: string;
  label?: string;
  error?: string;
  hint?: string;
  theme?: 'transparent';
  noHelperText?: boolean; // Use to hide error/hint div in cases of very tight positioning.

  // Standard HTML input props
  autoFocus?: boolean;
  maxLength?: number;
  placeholder?: string;

  value?: string;
  
  // Label for E2E desktop tests  
  testId?: string;

  // React props
  onChange?: (val: string) => void;
  onClear?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onKeyDown?: React.KeyboardEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
  onKeyPress?: React.KeyboardEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
}

interface TextAreaInputProps {
  multiline: true;
}

interface InputInputProps {
  multiline?: false;
  type?: 'text' | 'password';
  readOnly?: boolean;
  disabled?: boolean;
}

export type InputProps = BaseInputProps &
  (TextAreaInputProps | InputInputProps);

@observer
export class Input extends Component<InputProps> {
  @observable
  isFocused = false;
  @observable
  inputRef: HTMLInputElement | HTMLTextAreaElement | null = null;

  componentDidMount() {
    if (this.props.autoFocus)
      setTimeout(() => {
        if (!this.inputRef) return;
        // focus does not properly work without setTimeout
        this.inputRef.focus();
      }, 0);
  }

  handleChange = (
    ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (!this.props.onChange) return;
    this.props.onChange(ev.currentTarget.value);
  };

  @computed
  get showClearButton() {
    return !this.props.multiline && !!this.props.value && !!this.props.onClear;
  }

  clearInput = () => {
    if (this.props.onClear) this.props.onClear();
  };

  @action.bound
  handleFocus() {
    if (this.props.onFocus) this.props.onFocus();
    this.isFocused = true;
  }

  @action.bound
  handleBlur() {
    if (this.props.onBlur) this.props.onBlur();
    this.isFocused = false;
  }

  @action.bound
  setRef(ref: HTMLInputElement | HTMLTextAreaElement | null) {
    this.inputRef = ref;
  }

  @action.bound
  focus() {
    if (this.inputRef) {
      this.inputRef.focus();
    }
  }

  @action.bound
  blur() {
    if (this.inputRef) {
      this.inputRef.blur();
      this.handleBlur();
    }
  }

  render() {
    return (
      <div
        className={css('p-input', this.props.className, this.props.theme, {
          'has-label': !!this.props.label,
          'has-error': !!this.props.error,
          'has-clear-button': this.showClearButton,
          focused: this.isFocused
        })}
      >
        {this.props.label ? (
          <div className={css('label')}>{this.props.label}</div>
        ) : null}

        {this.props.multiline ? (
          <textarea
            data-test-id={this.props.testId}
            placeholder={this.props.placeholder}
            value={this.props.value}
            maxLength={this.props.maxLength}
            onChange={this.props.onChange ? this.handleChange : undefined}
            onKeyPress={this.props.onKeyPress}
            onKeyDown={this.props.onKeyDown}
            onKeyUp={this.props.onKeyUp}
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
            ref={this.setRef}
          />
        ) : (
          <input
            data-test-id={this.props.testId}
            placeholder={this.props.placeholder}
            value={this.props.value}
            maxLength={this.props.maxLength}
            onChange={this.props.onChange ? this.handleChange : undefined}
            onKeyPress={this.props.onKeyPress}
            onKeyDown={this.props.onKeyDown}
            onKeyUp={this.props.onKeyUp}
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
            type={this.props.type || 'text'}
            readOnly={this.props.readOnly}
            disabled={this.props.disabled}
            ref={this.setRef}
          />
        )}

        {this.showClearButton ? (
          <Button
            tabIndex={-1}
            className="clear-button"
            icon="close"
            onClick={this.clearInput}
          />
        ) : null}

        {this.props.noHelperText ? null : (
          <div
            className={css('hint-or-error', {
              error: !!this.props.error,
              hint: !!this.props.hint,
              visible:
                !!this.props.error || (!!this.props.hint && this.isFocused)
            })}
          >
            {this.props.error ? (
              <React.Fragment>
                <MaterialIcon icon="error_outline" />
                {this.props.error}
              </React.Fragment>
            ) : this.props.hint ? (
              this.props.hint
            ) : null}
          </div>
        )}
      </div>
    );
  }
}
