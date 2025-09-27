
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ContactBar from './components/ContactBar';
import PortfolioGrid from './components/PortfolioGrid';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#FDFBF5] min-h-screen text-gray-800">
      <div className="container mx-auto max-w-6xl p-4 sm:p-6 md:p-8">
        <Header />
        <main className="mt-8">
          <Hero />
          <div className="my-8">
            <ContactBar />
          </div>
          <PortfolioGrid />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
