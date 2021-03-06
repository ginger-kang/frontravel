import * as React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./routes/Home/Home";
import Travel from "./routes/Travel/Travel";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/travel" component={Travel} />
      </Switch>
    </BrowserRouter>
  );
}
