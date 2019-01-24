import React from "react";
import { AppBar, Toolbar, Typografy } from "@material-ui/core";

const AppHeader = () => (
  <AppBar position="static">
    <toolbar>
      <Typografy variant="title" color="inherit">
        My React App
      </Typografy>
    </toolbar>
  </AppBar>
);

export default AppHeader;
