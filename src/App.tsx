import { useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MomentoForm from "./components/momentoForm/MomentoForm";

function App() {
  const [data, setData] = useState({ weeksSpent: 0, weeksRemaining: 0 });

  const handleSetData = (weekSpent: number, weeksRemaining: number) => {
    setData((data) => ({
      ...data,
      weekSpent: weekSpent,
      weeksRemaining: weeksRemaining,
    }));
  };

  return (
    <>
      <div className="flex flex-col max-h-svh h-screen">
        <Header />
        <MomentoForm handleResult={() => handleSetData} />
        <Footer />
      </div>
    </>
  );
}

export default App;
