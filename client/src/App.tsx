import React from 'react';

import './App.css';
import GlobalStyles from './GlobalStyles';
import ConfirmationPage from './pages/confirmationPage';


function App() {
  // Return the App component.
  return (
    <>
      <ConfirmationPage/>
      <div className="App">office</div>
      <GlobalStyles />
    </>
  );
}

export default App;
