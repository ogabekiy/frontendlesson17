import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import OneCountry from "./components/OneCountry";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='country/:name' element={<OneCountry/>}></Route>
      </Routes>
    </>
  );
}
