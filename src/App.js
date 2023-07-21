import React from "react";
import Person1 from "./component/Render_props/Person1";
import Person2 from "./component/Render_props/Person2";
import Renderprops from "./component/Render_props/Renderprops";
import Hero from "./component/High_order_component/Usememo/Hero";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <div>
          High order component in react 
          <Hero1 />
          <Hero2 />
        </div> */}


        
        <Renderprops props={(count, Increase) => <Person1 count={count} Increase={Increase} />} />
        <Renderprops props={(count, Increase) => <Person2 count={count} Increase={Increase} />} />

        <hr />

        <Hero />
      </header>
    </div>
  );
}

export default App;
