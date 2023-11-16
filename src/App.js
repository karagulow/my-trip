import { Route, Routes } from 'react-router-dom';
import './assets/scss/main.scss';

import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { NotificationMobile } from './pages/NotificationMobile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="notifications" element={<NotificationMobile />} />
      </Route>
    </Routes>
  );
}

export default App;
