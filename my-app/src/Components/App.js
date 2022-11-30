import React from "react";
import "../CSS/App.css";
import Header from "./Header";
import LangList from "./LangList";
import SupportList from "./SupportList";
import Location from "./Location";
import Phone from "./Phone";
import Information from "./Information";
import Bot from "./Bot";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <main className="">
        <LangList />
        <SupportList />
        <div className="grid grid-cols-2">
          <Location />
          <Phone />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Information />
          <Bot />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
