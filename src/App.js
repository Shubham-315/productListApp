import * as React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Layout from "./component/layout";
// import Product from "./pages/Home";
const Product = React.lazy(() => import('./pages/Home'));
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<React.Suspense fallback={<><h1>Loading...</h1></>}>
              <Product />
            </React.Suspense>} />
            {/* <Route
            path="about"
            element={
              
            }
          />
          <Route
            path="dashboard/*"
            element={
              <React.Suspense fallback={<>...</>}>
                <Dashboard />
              </React.Suspense>
            }
          />
          <Route path="*" element={<NoMatch />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
