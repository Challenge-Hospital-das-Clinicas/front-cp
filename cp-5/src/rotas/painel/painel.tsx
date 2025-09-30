import { useContext } from 'react';
import { contextoautenticacao } from '../../contexto/contextoautenticacao';

export default function Painel() {
  const contexto = useContext(contextoautenticacao);

  if (!contexto) {
    return <h1>Carregando...</h1>;
  }

  const { usuario } = contexto;

  if (!usuario) {
    
    return <h1>Carregando usuário...</h1>;
  }

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-gray-800">
        Bem-vindo(a), {usuario.nome}!
      </h1>
      <p className="mt-4 text-gray-600">
        Este é o seu painel de controle. Você está logado com sucesso.
      </p>
      <div className="mt-6 p-4 bg-gray-100 rounded-lg text-left inline-block shadow-md">
        <h2 className="text-xl font-semibold mb-2 text-gray-700">Suas Informações:</h2>
        <ul>
          <li>
            <span className="font-bold">Nome de Usuário:</span> {usuario.nomeUsuario}
          </li>
          <li>
            <span className="font-bold">E-mail:</span> {usuario.email}
          </li>
        </ul>
      </div>
    </div>
  );
}