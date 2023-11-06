import { Route, Routes } from 'react-router-dom';
import Homepage from '../pages/homepage';
import SignUp from '../pages/signUp';
import ConfirmationPage from '../pages/confirmationPage';
import React from 'react';

function OfficeRoutes() {
  return (
    <Routes>
      <Route path={'/'} element={<Homepage></Homepage>}></Route>
      <Route path={'/signup'} element={<SignUp></SignUp>}></Route>
      <Route
        path={'/confirmation'}
        element={<ConfirmationPage></ConfirmationPage>}
      ></Route>
    </Routes>
  );
}

export default OfficeRoutes;
