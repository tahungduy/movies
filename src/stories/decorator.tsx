import { Story } from "@storybook/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const AppScreen = (Story: Story) => {
  return (<Router>
    <Routes>
      <Route>
        <Route path="/*" element={<Story />} />
      </Route>
    </Routes>
  </Router>);
};

export default AppScreen;