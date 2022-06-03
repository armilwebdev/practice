import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Practice from "./pages/Practice";
import DriversList from "./pages/Practice2";
import RacesList from "./pages/RacesList";

import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="practice" element={<Practice />} />
          <Route path="driverslist" element={<DriversList />} />
          <Route path="raceslist" element={<RacesList />} />

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}



// function FavoriteColor() {
//   const [color, setColor] = useState("");

//   return(
//     <>
//       <h1>My favorite color is <span style={{ color: `${color}`}}>{color}</span></h1>
//       <div style={{ display: "block"}}>
//       <button
//         style={{
//           backgroundColor: "blue", 
//           padding: "10px", 
//           color: "white",
//           fontSize: "18px",
//           borderRadius: "5px",
//           border: "none",
//           marginBottom: "10px"
//           }}
//         type="button"
//         onClick={() => setColor("blue")}
//         > Blue </button>

//               <button
//         style={{
//           backgroundColor: "red", 
//           padding: "10px", 
//           color: "white",
//           fontSize: "18px",
//           borderRadius: "5px",
//           border: "none",
//           marginBottom: "10px"
//           }}
//         type="button"
//         onClick={() => setColor("red")}
//         > Red </button>
//             <h1 className="text-3xl font-bold underline bg-red-100">
//       Hello world!
//     </h1>
//       </div>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<FavoriteColor />);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
