import React, { useState, useEffect } from 'react';
import './App.css';
import './Load.css';
import Homepage from './laman/Homepage';
import EffectName from './subcomponents/EffectName'; // Import komponen EffectName

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Timer untuk loader selama 4 detik
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer); // Bersihkan timer jika komponen di-unmount
  }, []);

  return (
    <div>
      {loading ? (
        <EffectName /> // Gunakan efek animasi teks sebagai loader
      ) : (
        <Homepage />
      )}
    </div>
  );
}

export default App;
