import Header from "./Components/Header/Header";
import Mp3 from "./Components/Youtube-to-mp3/Youtube-to-mp3";
import FAQ from "./Components/FAQs/FAQs";
import Description from "./Components/Youtube-to-mp3/Mp3-description/Mp3-description";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
// import 'flowbite-react'
// import 'flowbite'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header></Header>
              </>
            }
          >
            <Route
              path="/"
              element={
                <>
                  <Mp3 />
                  <Description />
                  <Footer />
                </>
              }
            ></Route>

            <Route
          path="/FAQ"
          element={
            <>
              <FAQ />
            </>
          }
        ></Route>

        <Route
          path="*"
          element={
            <>
              <h2>404 not found</h2>
            </>
          }
        ></Route>
           
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
