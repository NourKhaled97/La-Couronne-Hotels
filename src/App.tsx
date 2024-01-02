import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'react-tooltip/dist/react-tooltip.css';

import './styles/Home.styles.css';
import './styles/About.styles.css';
import './styles/Rooms.styles.css';
import './styles/Services.styles.css';
import './styles/ContactUs.styles.css';
import './styles/Booking.styles.css';
import './styles/Loading.styles.css';

import Loading from './components/Loading';
import ScrollToTop from './components/ScrollToTop';

const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer'));
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Rooms = lazy(() => import('./pages/Rooms'));
const Services = lazy(() => import('./pages/Services'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const Booking = lazy(() => import('./pages/Booking'));

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path='/about'
          element={
            <Suspense fallback={<Loading />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path='/rooms'
          element={
            <Suspense fallback={<Loading />}>
              <Rooms />
            </Suspense>
          }
        />
        <Route
          path='/services'
          element={
            <Suspense fallback={<Loading />}>
              <Services />
            </Suspense>
          }
        />
        <Route
          path='/contactus'
          element={
            <Suspense fallback={<Loading />}>
              <ContactUs />
            </Suspense>
          }
        />
        <Route
          path='/booking'
          element={
            <Suspense fallback={<Loading />}>
              <Booking />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
