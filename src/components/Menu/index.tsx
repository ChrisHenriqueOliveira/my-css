import React from 'react';
import { Link } from 'react-router-dom';

import { FaCss3Alt } from 'react-icons/fa';

import { Container } from './styles';

const Menu: React.FC = () => {
  return (
    <Container>
      <div>
        <FaCss3Alt />
        <Link to="/">MyCss</Link>
      </div>
    </Container>
  );
};

export default Menu;
