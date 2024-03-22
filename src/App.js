
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import CreateOrder from './components/cerateOrder';


import FareEstimateForm from './components/fareEstimateRequest';
import TrackOrder from './components/Trackerorder';


function App() {
  return (
    <>
    <Header/>
   
    
    <Routes>
    <Route path="fareestimate" element={<FareEstimateForm />} />
    <Route path="order" element={<CreateOrder />  } />
    <Route path="trackorder" element={ <TrackOrder /> } />

    
       
                     
    </Routes>

     
    </>
  );
}

export default App;
