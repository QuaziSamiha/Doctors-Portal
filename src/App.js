import './App.css';
import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Appointment from './Pages/Appointment/Appointment/Appointment';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path='/appointment' element={<Appointment />} />
          {/* <Route path="/aboutUs" element={<AboutUs />} /> */}
          {/* <Route path="/signIn" element={<SignIn />} /> */}
          {/* <Route path='/propertyDetail' element={<PrivateRoute><PropertyDetail /></PrivateRoute>} /> */}
          {/* <Route path='/admin' element={<Admin />} /> */}
          {/* <Route path="/admin" element={<PrivateRoute><Admin /></PrivateRoute>} /> */}
          {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
