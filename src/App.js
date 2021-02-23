import React from "react";
import Navbar from "./navbar/Navbar.js";
import FormField from "./formfield/FormField.js";

import "bulma/css/bulma.css";
import "./navbar/Navbar.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
    </div>
  );
};

export default App;
