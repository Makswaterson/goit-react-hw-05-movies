import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Loader } from '../Loader/Loader';

export const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <main>
        <section>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </section>
      </main>
    </div>
  );
};
