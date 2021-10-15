import React from "react";
import FeedbackForm from "./components/FeedbackForm";
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <FeedbackForm />
      </div>
    </Provider>
  );
};

export default App;
