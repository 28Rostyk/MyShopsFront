import { Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import SharedLayout from './SharedLayout/SharedLayout';

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}></Route>
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
