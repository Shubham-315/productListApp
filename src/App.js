import * as React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./component/layout";
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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
