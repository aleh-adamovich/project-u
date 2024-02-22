import {FC, useState} from "react";
import cls from './Sidebar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const {className} = props;

  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleClick = () => setIsCollapsed((prevState) => !prevState);

  return (
    <div className={classNames(cls.sidebar, [className], {[cls.collapsed]: isCollapsed})}>
      <button onClick={handleClick}>Click</button>
      <div className={cls.switchers}>
        <ThemeSwitcher/>
      </div>
    </div>
  )
}