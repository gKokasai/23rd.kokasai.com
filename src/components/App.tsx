import React from "react";
import Top from "./top/Top";
import Footer from "./common/Footer";
import Header from "./common/Header";

const App: React.FC = () => (
  <div className="container h-full w-full font-serif">
    <div className="flex flex-col h-full w-full">
      <div className="visible pc:hidden">
        <Header />
      </div>
      <div className="flex-grow min-h-screen h-full w-full">
        <Top />
      </div>
      <Footer />
    </div>
  </div>
);

export default App;
