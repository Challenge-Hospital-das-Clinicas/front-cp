import { Outlet, useLocation, Navigate } from 'react-router-dom';
import Cabecalho from './componentes/cabecalho/cabecalho';

function App() {
  const localizacao = useLocation();
  const usuario = localStorage.getItem('usuario');

  if (localizacao.pathname === '/') {
    return <Navigate to={usuario ? "/painel" : "/login"} />;
  }
  return (
    <>
      <Cabecalho />
      
      <main className="container mx-auto p-4 max-w-lg mt-8 bg-white shadow-lg rounded-lg">
        <Outlet />
      </main>
    </>
  );
}

export default App; 