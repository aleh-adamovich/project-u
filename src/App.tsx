import {Link, Route, Routes} from "react-router-dom";
import {Customer} from "./components/Customer";
import './styles/index.scss';
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPageAsync";
import {Suspense} from "react";
import {useTheme} from "./theme/useTheme";

export const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <div>
        <Link to="/">Main</Link>
        <Link to="/about">About</Link>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<MainPageAsync/>}/>
          <Route path='/about' element={<AboutPageAsync/>}/>
        </Routes>
      </Suspense>
      <p>App Component</p>
      <Customer/>
    </div>
  )
}