import {Link, Route, Routes} from "react-router-dom";
import {Customer} from "./components/Customer";
import './style.scss';
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPageAsync";
import {Suspense} from "react";

export const App = () => {
  return (
    <div className="app">
      <Link to="/">Main</Link>
      <br/>
      <Link to="/about">About</Link>
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