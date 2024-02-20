import { Suspense, lazy } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const Home = lazy(() =>import("./Components/Dashboard/Home"));
const Login = lazy(() =>import("./Components/Auth/Login"));
const Header = lazy(() => import("./Components/header/Navbaar"));
const Register = lazy(() => import("./Components/Auth/Register"));
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Popup from './services/toastify/Popup';
const Forgetpassoword = lazy(() =>import("./Components/Auth/Forgetpassword"));
const Updatepassword = lazy(() => import("./Components/Auth/Updatepassword"));
import { useSelector } from 'react-redux';
const About = lazy(() => import("./Components/Dashboard/About"));

import Contact from './Components/Dashboard/contact';
import Commonloader from './services/spinner/Loader';

function App() {
  const selector = useSelector((state) => state.authSlice)
  const loading = selector.loading

  return (
    <>
      <Header />
      <Suspense fallback={<Commonloader />}>
        {loading && <Commonloader />}



        <Popup />
        <BrowserRouter>
          <Routes>
            <Route>
              <Route path="/" element={<Login />} />
              <Route path="/forgetpassword" element={<Forgetpassoword />} />
              <Route path="/change/:token" element={<Updatepassword />} />
              <Route path="register" element={<Register />} />

              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />

            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>

    </>
  )
}

export default App
