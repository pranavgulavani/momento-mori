import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MomentoForm from "./components/momentoForm/MomentoForm";

function App() {
  return (
    <>
      <div className="flex flex-col max-h-svh h-screen">
        <Header />
        <MomentoForm />
        <Footer />
      </div>
    </>
  );
}

export default App;
