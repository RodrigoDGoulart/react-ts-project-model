import { BrowserRouter, Route, Routes } from "react-router-dom";
import Principal from "./pages/Principal";

export default function AppRouter () {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Principal />} />
        {/* <Route path='/exemplo-de-rota' element={<Principal />} /> */}
      </Routes>
    </BrowserRouter>
  );
}