import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';
// import logo from '../../img/logo.png';
import logo from '../../img/icons8-média-96.png';
import Container from './Container';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/projects">Projetos</Link>
          </li>
          <li className={styles.item}>
            <Link to="/company">Empresa</Link>
          </li>
          <li className={styles.item}>
            <Link to="/contact">Contato</Link>
          </li>
          {/* <li className={styles.item}>
            <Link to="/newproject">Novo Projeto</Link>
          </li> */}
        </ul>
      </Container>
    </div>
  );
}

export default Navbar;
