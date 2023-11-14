import { Route, Routes } from 'react-router-dom';
import './assets/scss/main.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}></Route>
    </Routes>
  );
}

export default App;
