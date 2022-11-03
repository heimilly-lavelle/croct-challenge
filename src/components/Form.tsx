import styles from './Form.module.css';

function Form() {
    return(
        <form>
            <div className={styles.form}>
                <p>Nome:</p>
                <input type='text' placeholder="Insira seu nome" />
            </div>
            <div className={styles.form}>
                <p>E-mail:</p>
                <input type='email' placeholder="Insira seu e-mail" />
            </div>
            <div className={styles.form}>
                <p>Whatsapp:</p>
                <input type='tel' placeholder="Insira seu whatsapp" />
            </div>
            <div className={styles.form_submit}>
                <input type='submit' value='Enviar' />
            </div>
        </form>
    )
}

export default Form