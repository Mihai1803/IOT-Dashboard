import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import TemperatureReportPage from './pages/TemperatureReportPage';
import HumidityReportPage from './pages/HumidityReportPage';
import LightIntensityReportPage from './pages/LightIntensityReportPage';
import GasVoltageReportPage from './pages/GasVoltageReportPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/temperature' element={<TemperatureReportPage />} />
        <Route path='/humidity' element={<HumidityReportPage />} />
        <Route path='/gas' element={<GasVoltageReportPage />} />
        <Route path='/light' element={<LightIntensityReportPage />} />
      </Routes>
    </Router>
  );
}

export default App;
