import "./App.css";
import Header from "./common/header/Header";
import { BrowserRouter, Routes } from "react-router-dom";
// npm i -D react-router-dom //

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
