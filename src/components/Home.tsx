import styles from "./Home.module.css";
import marketing from "../img/marketing.jpg";
import aluno from "../img/aluno.jpg";

function Home() {
    return(
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Learning Center!</span> </h1>
            <h3>O Centro de Estudos que você estava procurando para se especializar.</h3>
            <p>Nosso principal produto, o curso de <span><u>Marketing Digital</u></span> está em promoção!!</p>
            <p>Por apenas <b>R$299,90!</b></p>
            <img src={marketing} alt="marketing" />
            <a href="/Cursos">Adquira o curso agora mesmo!</a>
            <h4>ALUNOS SATISFEITOS E EMPREGADOS</h4>
            <img src={aluno} alt="aluno" />
            <p>Mais de 70% de nossos alunos conseguem um emprego na área após realizar os nossos cursos!</p>
            <h4>TEMOS DIVERSOS OUTROS CURSOS EM PROMOÇÃO!!</h4>                
            <p>
                <button>Confira!</button>
            </p>
        </section>
    )       
}

export default Home