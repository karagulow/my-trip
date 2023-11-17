import { Route, Routes } from 'react-router-dom';
import './assets/scss/main.scss';

import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { NotificationMobile } from './pages/NotificationMobile';
import { TourPage } from './pages/TourPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="notifications" element={<NotificationMobile />} />
        <Route path="tour" element={<TourPage />} />
      </Route>
    </Routes>
  );
}

export default App;
