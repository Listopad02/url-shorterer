import Layout from "./layout/Layout";
import Login from "./pages/Login/Login";
import { Route, Routes } from 'react-router-dom';
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/main' />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
