import { useState } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import TrackTransfer from "@/pages/TrackTransfer";
import NotFound from "@/pages/not-found";

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Switch>
        <Route path="/" component={TrackTransfer} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

export default App;
