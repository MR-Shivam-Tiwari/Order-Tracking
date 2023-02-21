import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './component/Dashboard';
import Login from './component/loginpage';
import Register from './component/register';
// import ClothMeasurements from './components/ClothMeasurements';
import { PrivateRoute } from './privateroute';
import MeasurementForm from './component/Measurements';
import OrderTracking from './component/OrderTracking'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route exact path="/home" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />
          <Route path="/" element={<Login />} />
          <Route path="/measurements" element={<MeasurementForm />} />
          <Route path="/order-tracking" element={<OrderTracking />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
