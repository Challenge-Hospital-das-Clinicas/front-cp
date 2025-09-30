import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { contextoautenticacao } from '../../contexto/contextoautenticacao';

export default function RotaProtegida() {
  const contexto = useContext(contextoautenticacao);

  if (!contexto) {
    return null; 
  }

  const { usuario } = contexto;

  if (!usuario) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}