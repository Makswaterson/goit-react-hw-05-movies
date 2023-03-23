import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { Container, Header, Nav, NavLinks } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <Nav>
          <NavLinks to="/">Home</NavLinks>
          <NavLinks to="/movies">Movies</NavLinks>
        </Nav>
      </Header>
      <main>
        <section>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </section>
      </main>
    </Container>
  );
};
