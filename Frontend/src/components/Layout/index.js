import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Layout = ({ children }) => (
  <div>
    <Navbar expand="md">
      <Nav pills className="ml-auto">
        <NavLink to="/" exact activeClassName="active" className="nav-link">
          <NavItem active>Pedidos</NavItem>
        </NavLink>
        <NavLink to="/create" activeClassName="active" className="nav-link">
          <NavItem active>Levantar pedido</NavItem>
        </NavLink>
        <NavLink to="/logout" activeClassName="active" className="nav-link">
          <NavItem active>Salir</NavItem>
        </NavLink>
      </Nav>
    </Navbar>
    <div className="container">{children}</div>
  </div>
);

Layout.defaultProps = {
  children: null
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
