import {Link, Route, Routes} from "react-router-dom";
import './styles/index.scss';
import {Suspense} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";

export const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <div>
        <Link to="/">Main</Link>
        <Link to="/about">About</Link>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
        </Routes>
      </Suspense>
      <p>App Component</p>
    </div>
  )
}