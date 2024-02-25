import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props;

  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleClick = () => setIsCollapsed((prevState) => !prevState);

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.sidebar, [className], { [cls.collapsed]: isCollapsed })}
    >
      <button
        type="button"
        onClick={handleClick}
        data-testid="sidebar-btn"
      >
        Click
      </button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
