import React, { FunctionComponent, Suspense, lazy } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppHeader } from "./components/AppHeader";
import { Provider } from "react-redux";
import { store } from "redux/store";

import AppFooter from "components/AppFooter";

const Home = lazy(() => import('pages/Home'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));

const App: FunctionComponent = () => {
  return (
    <div className="bg-gray-800 ">
      <Provider store={store}>
        <Router>
          <div className="flex flex-col h-screen">
            <AppHeader />
            <main className="flex-grow p-4 overflow-y-scroll">
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  <Route path="/" Component={Home} />
                  <Route path="/movie/:id" Component={MovieDetails} />
                </Routes>
              </Suspense>
            </main>
            <AppFooter />
          </div>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
