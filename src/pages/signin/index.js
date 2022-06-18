import styles from './styles.module.scss';

import { Link } from 'react-router-dom';

import { FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import Input from '../../components/userinterface/Input';
import Button from '../../components/userinterface/Button';

export default function SignIn() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.logoContainer}>
                <div className={styles.contentContainer}>
                    <h1>Dev Social Network</h1>
                    <p>Não possui uma conta?</p>
                    <Link to="/signup">
                        Cadastre-se agora!
                    </Link>
                </div>
            </div>

            <div className={styles.loginContainer}>

                <h2>Faça seu login!</h2>

                <form className={styles.form}>
                    {/* <MdEmail className={styles.emailIcon} size={22} /> */}
                    <Input
                        placeholder="Digite seu e-mail"
                    />

                    {/* <FaLock className={styles.lockIcon} size={18} /> */}
                    <Input
                        placeholder="Digite sua senha"
                    />

                    <Button
                        type="submit"
                    >
                        Acessar
                    </Button>
                </form>

                <Link to="/">
                    Esqueceu sua senha?
                </Link>
                
            </div>
        </div>
    )
}