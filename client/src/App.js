import './App.css';
import React from 'react';
import { 
  createBrowserRouter, 
  RouterProvider, 
  createRoutesFromElements, 
  Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import ErrorPage from './components/ErrorPage';
import Layout from './components/Layout';
import theme from './Theme';
// import Home from './components/Home';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      {/* <Route index element={<Home />} /> */}
    </Route>
  )
);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;