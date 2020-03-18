import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

function Home() {
  return <h2>home</h2>;
}
function Detail() {
  return <h2>Detail</h2>;
}
function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/detail" component={Detail} />
    </div>
  );
}

export default App;
