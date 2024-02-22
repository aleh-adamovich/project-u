import cls from './Navbar.module.scss';
import {FC} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({className}) => {
  return (
    <div className={classNames(cls.navbar, [className])}>
      <ThemeSwitcher/>
      <div className={cls.links}>
        <AppLink
          className={cls.mainLink}
          to="/"
          theme={AppLinkTheme.SECONDARY}
        >
          Main
        </AppLink>
        <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>About</AppLink>
      </div>
    </div>
  )
}