import { StoryFn } from "@storybook/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styled.scss";
const AppScreen = (Story: StoryFn) => {
  return (<Router>
    <Routes>
      <Route>
        <Route path="/*" element={<Story />} />
      </Route>
    </Routes>
  </Router>);
};

export default AppScreen;