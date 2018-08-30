import React from 'react';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import css from 'classnames';

import { Button } from './Button';
import { MaterialIcon } from './MaterialIcon';

interface BaseInputProps {
  className?: string;
  label?: string;
  error?: string;
  hint?: string;

  // Standard HTML input props
  autoFocus?: boolean;
  maxLength?: number;
  placeholder?: string;

  value?: string;

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
  innerRef?: React.Ref<HTMLTextAreaElement>;
}

interface InputInputProps {
  multiline?: false;
  type?: 'text' | 'password';
  readOnly?: boolean;
  disabled?: boolean;
  innerRef?: React.Ref<HTMLInputElement>;
}

export type InputProps = BaseInputProps &
  (TextAreaInputProps | InputInputProps);

@observer
export class Input extends React.Component<InputProps> {
  @observable
  isFocused = false;
  @observable
  inputRef: HTMLInputElement | HTMLTextAreaElement | null = null;

  handleChange = (
    ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (!this.props.onChange) return;
    this.props.onChange(ev.currentTarget.value);
  };

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
    if (ref) {
      this.inputRef = ref;
      if (this.props.autoFocus) {
        this.focus();
      }
    }
  }

  @action.bound
  focus() {
    if (this.inputRef) {
      this.inputRef.focus();
      this.handleFocus();
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
        className={css('p-input', this.props.className, {
          'has-label': !!this.props.label,
          'has-error': !!this.props.error,
          focused: this.isFocused
        })}
      >
        {this.props.label ? (
          <div className={css('label')}>{this.props.label}</div>
        ) : null}

        {this.props.multiline ? (
          <textarea
            placeholder={this.props.placeholder}
            value={this.props.value}
            maxLength={this.props.maxLength}
            onChange={this.props.onChange ? this.handleChange : undefined}
            onKeyPress={this.props.onKeyPress}
            onKeyDown={this.props.onKeyDown}
            onKeyUp={this.props.onKeyUp}
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
            ref={this.props.innerRef || this.setRef}
          />
        ) : (
          <input
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
            ref={this.props.innerRef || this.setRef}
          />
        )}

        {!this.props.multiline && !!this.props.value && !!this.props.onClear ? (
          <Button
            className="clear-button"
            icon="close"
            onClick={this.clearInput}
          />
        ) : null}

        <div
          className={css('hint-or-error', {
            error: !!this.props.error,
            hint: !!this.props.hint,
            visible: !!this.props.error || (!!this.props.hint && this.isFocused)
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
      </div>
    );
  }
}
