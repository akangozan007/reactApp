import React, { useState, useEffect } from 'react';
import './App.css';
import Homepage from './laman/Homepage';

function App() {
  const [loading, setLoading] = useState(true); // State untuk loader

  useEffect(() => {
    // Set loader untuk 4 detik
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer); // Bersihkan timer saat komponen di-unmount
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loader">
          {/* Tampilan loader */}
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      ) : (
        <Homepage />
      )}
    </div>
  );
}

export default App;
