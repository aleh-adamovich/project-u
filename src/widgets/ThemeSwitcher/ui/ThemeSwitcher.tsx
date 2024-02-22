import {FC} from "react";
import {Theme, useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss';
import LightThemeIcon from 'shared/assets/icons/theme-light.svg';
import DarkThemeIcon from 'shared/assets/icons/theme-dark.svg';
import {Button, ButtonTheme} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({className}) => {
  const {theme, toggleTheme} = useTheme();

  const themeIcon = theme === Theme.DARK ? <DarkThemeIcon/> : <LightThemeIcon/>;

  return (
    <Button
      className={classNames(cls.themeSwitcher, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={toggleTheme}
    >
      {themeIcon}
    </Button>
  )
}