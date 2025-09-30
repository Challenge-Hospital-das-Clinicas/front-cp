import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { contextoautenticacao } from '../../contexto/contextoautenticacao';

export default function Cabecalho() {
  
  const contexto = useContext(contextoautenticacao);
  const navigate = useNavigate();

  if (!contexto) {
    return null; 
  }

  const { usuario, logout } = contexto;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="flex justify-between items-center bg-blue-600 text-white p-4 shadow-md">
      <div>
        <Link to={usuario ? "/painel" : "/login"} className="text-xl font-bold">
          Controle de Acesso
        </Link>
      </div>
      <nav className="flex items-center space-x-4">
        {usuario ? (
          <div className="flex items-center space-x-2">
            <span className="text-sm">Olá, {usuario.nome}</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            >
              Sair
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </Link>
        )}
      </nav>
    </header>
  );
}