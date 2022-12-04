import React from "react";
import "../CSS/App.css";
import Header from "./Header";
import LangList from "./LangList";
import SupportList from "./SupportList";
import Phone from "./Phone";
import News from "./News";
import Bot from "./Bot";
import Footer from "./Footer";
import MapComponent from "./MapComponent";

function App() {
  return (
    <>
      <Header />
      <main className="">
        <LangList />
        <SupportList />
        <div className="grid grid-cols-1 sm:grid-cols-2 bg-gray-300">
          <MapComponent />
          <Phone />
        </div>
        <News />
        <Bot />
      </main>
      <Footer />
    </>
  );
}

export default App;
