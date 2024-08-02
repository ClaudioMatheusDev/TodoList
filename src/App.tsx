import React from 'react';

// COMPONENTES
import Header from './components/Header';
import Footer from './components/Footer';

// CSS
import styles from './App.module.css';

function App() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h1>Conteúdo</h1>
      </main>
      <Footer />
    </div>
  );
}

export default App;
