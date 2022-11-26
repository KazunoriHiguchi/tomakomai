import "../CSS/App.css";
import LangList from "./LangList";
import SupportList from "./SupportList";
import Location from "./Location";
import Phone from "./Phone";
import Information from "./Information";
import Bot from "./Bot";

function App() {
  return (
    <div className="grid gap-4">
      <header className="bg-red-300 h-16">TOMAKOMAI CITY</header>
      <LangList />
      <SupportList />
      <div className="grid grid-cols-2 gap-4">
        <Location />
        <Phone />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Information />
        <Bot />
      </div>
    </div>
  );
}

export default App;
