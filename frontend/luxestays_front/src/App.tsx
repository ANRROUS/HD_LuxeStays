import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero"; 
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
      </main>
      <Footer />
    </div>
  );
}

export default App;
