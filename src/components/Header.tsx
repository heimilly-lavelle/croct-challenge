import { Link } from "react-router-dom"
import Container from "./Container"
import styles from "./Header.module.css"
import logo from "../img/open-book.png"

function Header() {
    return(
        <nav className={styles.header}>
            <Container>
                <Link to="/">
                    <img className={styles.image} src={logo} alt="LearningCenter" />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to='/'><b>Home</b></Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/Cursos'><b>Cursos</b></Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/Contato'><b>Contato</b></Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Header