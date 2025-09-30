import { useForm,  type SubmitHandler } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';


type Inputs = {
  nomeUsuario: string;
  email: string;
};

export default function Login() {

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Inputs>();


  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {

      const response = await fetch(
        `http://localhost:3001/usuarios?nomeUsuario=${data.nomeUsuario}&email=${data.email}`
      );
      const usuarios = await response.json();

      if (usuarios.length > 0) {
        const usuario = usuarios[0];

        localStorage.setItem('usuario', JSON.stringify(usuario));
        alert('Login bem-sucedido!');
        

        navigate('/painel');
      } else {

        setError('root', { type: 'manual', message: 'Nome de usuário ou e-mail inválidos.' });
      }
    } catch (error) {
      console.error("Ocorreu um erro no login:", error);
      alert('Não foi possível conectar ao servidor.');
    }
  };

  return (

    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Entrar no Sistema
      </h1>


      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm space-y-4">
        <div>
          <label htmlFor="nomeUsuario" className="block text-sm font-medium text-gray-700 mb-1">
            Nome de Usuário
          </label>
          <input
            id="nomeUsuario"

            {...register('nomeUsuario', {
              required: 'O nome de usuário é obrigatório',
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />

          {errors.nomeUsuario && (
            <p className="text-red-500 text-xs mt-1">{errors.nomeUsuario.message}</p>
          )}
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
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        {errors.root && (
          <p className="text-red-600 text-sm font-medium text-center bg-red-100 p-2 rounded-md">{errors.root.message}</p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Entrar
        </button>
      </form>

 
      <Link to="/cadastro" className="mt-6 text-sm text-blue-600 hover:underline">
        Não tem uma conta? Crie uma agora
      </Link>
    </div>
  );
}