import { Route, Routes } from 'react-router-dom';
import './assets/scss/main.scss';

import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { NotificationMobile } from './pages/NotificationMobile';
import { TourPage } from './pages/TourPage';
import { TouristPage } from './pages/TouristPage';
import { TouristBalance } from './pages/TouristBalance';
import { GuidePage } from './pages/GuidePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="notifications" element={<NotificationMobile />} />
        <Route path="tour" element={<TourPage />} />
        <Route path="lk/tourist/id" element={<TouristPage />} />
        <Route path="lk/tourist/balance" element={<TouristBalance />} />
        <Route path="lk/guide/id" element={<GuidePage />} />
      </Route>
    </Routes>
  );
}

export default App;
