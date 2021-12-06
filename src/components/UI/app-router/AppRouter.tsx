import { FC, useContext } from "react";
import { Routes, Route } from 'react-router-dom';
import NotFound from "../../not-found/NotFound";
import PostIdPage from "../../pages/post-id-page/PostIdPage";
import Posts from "../../pages/Posts";
import ThemeContext from '../../../shared/themes/theme.context';
import HomeComponent from "../../pages/home/Home";
import About from "../../pages/about/About";
import Lazy from "../../pages/lazy/Lazy";

import './AppRouter.scss';

const AppRouter: FC = (): JSX.Element => {
  const { theme } = useContext(ThemeContext);

  return (
    <div id="layout" style={theme}>
      <Routes>
        <Route path = "/"  element={ <HomeComponent /> } /> 
        <Route path = "/about"  element={ <About /> } />
        <Route path = "/posts"  element={ <Posts /> } />
        <Route path = "/lazy"  element={ <Lazy /> } />
        <Route path = "/posts/:id"  element={ <PostIdPage /> } />
        <Route path="*" element={ <NotFound />} />
      </Routes>
    </div>
  );
}

export default AppRouter;