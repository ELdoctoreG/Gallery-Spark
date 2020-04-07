import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import "./App.scss";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import SearchBox from "../components/search/SearchBox";
import NotFound from "../components/not-found/NotFound";

const AppStyled = styled.section`
  display: flex;
  flex-flow: column;
  height: 100%;
  width: 100%;
`;

const PhotoContainer = styled.div`
  height: calc(100vh - 140px);
  overflow: hidden;
`;

const App = (props) => (
  <BrowserRouter>
    <AppStyled>
      <Header />
      <PhotoContainer>
        <Switch>
          <Route path="/" render={() => <SearchBox />} />
          <Route component={NotFound} />
        </Switch>
      </PhotoContainer>
      <Footer />
    </AppStyled>
  </BrowserRouter>
);

export default App;
