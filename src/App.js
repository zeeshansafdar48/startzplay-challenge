import { Suspense, lazy } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from "react-js-loader";
import './App.css'

const HeroBanner = lazy(() => import('./components/HeroBanner'));
const MainArea = lazy(() => import('./components/MainArea'));

function App() {
  return (
    <Suspense fallback={<div className="centered"><Loader type="spinner-default" bgColor={"#FFFFFF"} color={'#FFFFFF'} size={100} /></div>}>
      <HeroBanner />
      <MainArea />
    </Suspense>

  );
}

export default App;
