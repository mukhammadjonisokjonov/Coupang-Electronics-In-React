import "./App.css";
import Header from "./common/header/Header";
import Pages from "./pages/Pages";
import Data from "./components/flashDeals/Data"
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// npm i -D react-router-dom //

function App() {
  // step 1: fetch data from database
  const { productItems } = Data

  const [cartItem, setCartItem] = useState([])
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/" element={<Pages productItems={productItems} />}>
          {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
