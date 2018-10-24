import React, { Component } from 'react';
import { observer } from 'mobx-react';

import css from 'classnames';

export interface ProgressBarBasicProps {
  className?: string;
  theme?: 'multicolor' | 'light';
  size?: 'small';
}

export type ProgressBarCircularProps = ProgressBarBasicProps & {
  circular: true;
};

export type ProgressBarIndeterminateProps = ProgressBarBasicProps & {
  circular?: false;
};

export type ProgressBarDeterminateProps = ProgressBarBasicProps & {
  circular?: false;
  value: number;
  max: number;
};

export type ProgressBarProps =
  | ProgressBarCircularProps
  | ProgressBarIndeterminateProps
  | ProgressBarDeterminateProps;

@observer
export class ProgressBar extends Component<ProgressBarProps> {
  render() {
    const { circular, className, theme, size } = this.props;

    let innerBarStyle: React.CSSProperties | undefined;

    const hasValue =
      (this.props as ProgressBarDeterminateProps).value != undefined;
    if (hasValue) {
      const { value, max } = this.props as ProgressBarDeterminateProps;
      const width = (value / max) * 100;
      innerBarStyle = { width: `${width}%` };
    }

    return (
      /*
       * Progress bar itself needs to be position:relative, so we need to put
       * everything in a container div to be able to control positioning
       */
      <div
        className={css('p-progress-bar', className, theme, size, {
          circular
        })}
      >
        {circular ? (
          <CircularProgress size={size} theme={theme} />
        ) : (
          <div className="progress-bar">
            <div
              className={css(
                'linear',
                hasValue ? 'determinate' : 'indeterminate',
                size,
                theme
              )}
              style={innerBarStyle}
            />
          </div>
        )}
      </div>
    );
  }
}

const CircularProgress: React.SFC<{
  size?: 'small';
  theme?: 'multicolor' | 'light';
}> = ({ size, theme }) => {
  const isSmall = size === 'small';

  return (
    <div className={css('progress-spinner', size, theme)}>
      <svg className="circular">
        <circle
          className="path"
          cx={isSmall ? 10 : 25}
          cy={isSmall ? 10 : 25}
          r={isSmall ? 6 : 20}
        />
      </svg>
    </div>
  );
};
