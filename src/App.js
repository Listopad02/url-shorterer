import Layout from "./layout/Layout";
import Login from "./components/Login/Login";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' />
          <Route path='/main' />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
