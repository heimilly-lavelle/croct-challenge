import styles from "./Contato.module.css";
import Form from "./Form";

function Contato() {
    return(
        <div className={styles.contato_container}>
            <h1>Quer fazer parte da nossa newsletter?</h1>
            <h2><u>Cadastre-se!</u></h2>
            <Form />
            <h3>Você também pode entrar em contato conosco!</h3>
            <p><span><b>E-mail:</b></span> learningcenter@gmail.com</p>
            <p><span><b>Whatsapp:</b></span> 12997600757</p>
        </div>
    )
}

export default Contato