import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export const enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className, theme, children, ...otherProps
  } = props;

  return (
    <button
      type="button"
      className={classNames(cls.button, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
