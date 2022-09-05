import Layout from "./layout/Layout";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Service from "./pages/Service/Service";
import Statistics from "./pages/Statistics/Statistics"
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/service' element={<Service />} />
          <Route path='/statistics' element={<Statistics />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
