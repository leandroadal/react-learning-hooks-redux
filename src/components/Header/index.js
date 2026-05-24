import React from 'react';
import { FaHome, FaSignInAlt, FaUser } from 'react-icons/fa';

import { Nav } from './styled';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const botaoClicado = useSelector((state) => state.example.botaoClicado);

  return (
    <>
      <Nav>
        <Link to="/">
          <FaHome size={24} />
        </Link>
        <Link to="/login">
          <FaUser size={24} />
        </Link>
        <Link to="/sign">
          <FaSignInAlt size={24} />
        </Link>
        {botaoClicado ? 'Clicado' : 'Não clicado'}
      </Nav>
    </>
  );
}
