import dados from '../img/dados.jpg';
import marketing from '../img/marketing.jpg';
import styles from './Cursos.module.css';

function Cursos() {
    return(
        <div className={styles.cursos}>
            <h1><u>Conheça nossos Cursos!</u></h1>
            
            <h2>Marketing Digital</h2>
            <p>
                Aprenda as estratégias que te farão vender mais e fazer os seus clientes terem uma nova visão acerca dos seus produtos!
            </p>
            <img src={marketing} alt='marketing' />
   
            <h2>Manipulação de Dados</h2>
            <p>
                Aprenda a visualizar e manipular dados de forma a realizar relatórios e dashboards mais efetivos!
            </p>
            <img src={dados} alt='dados' />
        </div>
    )
}

export default Cursos