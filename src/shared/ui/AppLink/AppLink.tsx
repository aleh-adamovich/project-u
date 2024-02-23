import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export const enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to, children, className, theme, ...otherProps
  } = props;

  return (
    <Link
      className={classNames(cls.appLink, [className, cls[theme]])}
      to={to}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
