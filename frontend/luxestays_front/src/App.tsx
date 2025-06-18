import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen">
      <Header/>
      <main> {/* Aquí van las demás páginas */} </main>
      <Footer />
    </div>
  );
}

export default App;
