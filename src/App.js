import React from "react";
import Hero1 from "./High_order_component/Hero1";
import Hero2 from "./High_order_component/Hero2";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* High order component in react */}
        <Hero1 />
        <Hero2 />
      </header>
    </div>
  );
}

export default App;
