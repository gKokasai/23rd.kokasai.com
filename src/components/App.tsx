import React from "react";
import Top from "./top/Top";
import Footer from "./common/Footer";

const App: React.FC = () => (
  <div className="container h-full w-full">
    <div className="flex flex-col h-full w-full">
      <div className="flex-grow min-h-screen h-full w-full">
        <Top />
      </div>
      <Footer />
    </div>
  </div>
);

export default App;
