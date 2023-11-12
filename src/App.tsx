import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppHeader } from "./components/AppHeader";
import { Provider } from "react-redux";
import { store } from "redux/store";
import Home from "pages/Home";
import MovieDetails from "pages/MovieDetails";
import AppFooter from "components/AppFooter";

function App() {
  return (
    <div className="bg-gray-800 ">
      <Provider store={store}>
        <Router>
          <div className="flex flex-col h-screen">
            <AppHeader />
            <main className="flex-grow p-4 overflow-y-scroll">
              <Routes>
                <Route path="/" Component={Home} />
                <Route path="/movie/:id" Component={MovieDetails} />
              </Routes>
            </main>
            <AppFooter />
          </div>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
