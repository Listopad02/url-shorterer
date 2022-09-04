import Layout from "./layout/Layout";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Service from "./pages/Service/Service";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/service' element={<Service />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
