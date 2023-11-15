import React, { Suspense, lazy, useEffect } from 'react';
import RestictedRoute from './Routes/RestictedRoute';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthIsLoading } from 'redux/auth/selectors';
import { refreshThunk } from 'redux/auth/operations';
import { Navigate, Route, Routes } from 'react-router-dom';
import Loader from './Loader/Loader';
import PrivateRoute from './Routes/PrivateRoutes';
import Navigation from './Navigation/Navigation';

const Home = lazy(() => import('pages/Home/Home'));
const RegisterPage = lazy(() => import('pages/Register/Register'));
const LoginPage = lazy(() => import('pages/Login/Login'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));

const appRoutes = [
  { path: '/', element: <Home /> },
  {
    path: '/register',
    element: (
      <RestictedRoute>
        <RegisterPage />
      </RestictedRoute>
    ),
  },
  {
    path: '/login',
    element: (
      <RestictedRoute>
        <LoginPage />
      </RestictedRoute>
    ),
  },
  {
    path: '/contacts',
    element: (
      <PrivateRoute>
        <ContactsPage />
      </PrivateRoute>
    ),
  },
];

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectAuthIsLoading);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return (
    <>
      <Navigation />
      {isRefreshing ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <Routes>
            {appRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      )}
    </>
  );
};
