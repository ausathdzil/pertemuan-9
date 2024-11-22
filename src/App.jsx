import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (
    <main>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <p>Hello World</p>
      <Outlet />
    </main>
  );
}

export default App;
