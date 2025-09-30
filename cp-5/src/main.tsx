import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProvedorAutenticacao } from './contexto/contextoautenticacao.tsx';

import Login from './rotas/login/login.tsx';
import Cadastro from './rotas/cadastro/cadastro.tsx';
import Painel from './rotas/painel/painel.tsx';
import RotaProtegida from './componentes/rotaProtegida/rotaProtegida.tsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/cadastro',
        element: <Cadastro />,
      },
      
      {
        element: <RotaProtegida />, 
        children: [
          {
            path: '/painel',
            element: <Painel />, 
          },
  
        ],
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <ProvedorAutenticacao>
      <RouterProvider router={router} />
    </ProvedorAutenticacao>
  </React.StrictMode>
);