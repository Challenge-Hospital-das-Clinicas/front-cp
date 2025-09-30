import { useForm, type SubmitHandler } from 'react-hook-form'; 
import { Link, useNavigate } from 'react-router-dom';


type Inputs = {
  nome: string;
  nomeUsuario: string;
  email: string;
};

export default function Cadastro() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Inputs>();

  
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
     
      const userResponse = await fetch(`http://localhost:3001/usuarios?nomeUsuario=${data.nomeUsuario}`);
      const userExists = await userResponse.json();
      if (userExists.length > 0) {
        setError('nomeUsuario', { type: 'manual', message: 'Este nome de usuário já existe.' });
        return;
      }

     
      const emailResponse = await fetch(`http://localhost:3001/usuarios?email=${data.email}`);
      const emailExists = await emailResponse.json();
      if (emailExists.length > 0) {
        setError('email', { type: 'manual', message: 'Este e-mail já está cadastrado.' });
        return;
      }

    
      const response = await fetch('http://localhost:3001/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Falha ao cadastrar usuário.');
      }

      alert('Usuário cadastrado com sucesso!');
      navigate('/login'); 

    } catch (error) {
      console.error("Ocorreu um erro no cadastro:", error);
      alert('Não foi possível conectar ao servidor.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Criar Nova Conta</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm space-y-4">
        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
            Nome Completo
          </label>
          <input
            id="nome"
            {...register('nome', { required: 'O nome é obrigatório' })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.nome && <p className="text-red-500 text-xs mt-1">{errors.nome.message}</p>}
        </div>

        <div>
          <label htmlFor="nomeUsuario" className="block text-sm font-medium text-gray-700 mb-1">
            Nome de Usuário
          </label>
          <input
            id="nomeUsuario"
            {...register('nomeUsuario', {
              required: 'O nome de usuário é obrigatório',
              minLength: { value: 4, message: 'Mínimo de 4 caracteres' },
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.nomeUsuario && <p className="text-red-500 text-xs mt-1">{errors.nomeUsuario.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'O e-mail é obrigatório',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Formato de e-mail inválido',
              },
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200"
        >
          Cadastrar
        </button>
      </form>

      <Link to="/login" className="mt-6 text-sm text-blue-600 hover:underline">
        Já tem uma conta? Faça o login
      </Link>
    </div>
  );
}