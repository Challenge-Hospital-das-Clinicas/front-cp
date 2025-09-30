/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect, type ReactNode } from 'react';




interface Usuario {
  id: string;
  nome: string;
  nomeUsuario: string;
  email: string;
}

interface TipoContextoAutenticacao {
  usuario: Usuario | null;
  logout: () => void;
}


export const contextoautenticacao = createContext<TipoContextoAutenticacao | undefined>(undefined);


export function ProvedorAutenticacao({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  useEffect(() => {
    const usuarioGuardado = localStorage.getItem('usuario');
    if (usuarioGuardado) {
      setUsuario(JSON.parse(usuarioGuardado));
    }
  }, []);

  const logout = () => {
    setUsuario(null);
    localStorage.removeItem('usuario');
  };

  return (
    <contextoautenticacao.Provider value={{ usuario, logout }}>
      {children}
    </contextoautenticacao.Provider>
  );
}