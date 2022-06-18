import styles from '../signin/styles.module.scss';

import { Link } from 'react-router-dom';

import { FaUser, FaLock, FaSpinner } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'


import Input from '../../components/userinterface/Input';
import Button from '../../components/userinterface/Button';

export default function SignUp() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.logoContainer}>
                <div className={styles.contentContainer}>
                    <h1>Dev Social Network</h1>
                    <p>Já possui uma conta?</p>
                    <Link to="/">
                        Faça login agora mesmo!
                    </Link>
                </div>
            </div>

            <div className={styles.loginContainer}>
                {/* <FaUser className={styles.userIcon} />
                <MdEmail className={styles.emailIcon} size={22} />
                <FaLock className={styles.lockIcon} size={18} /> */}
                <h2>Cadastre-se!</h2>
                <form className={styles.form}>
                    <Input
                        placeholder="Digite seu nome"
                        type="text"
                    />

                    <Input
                        placeholder="Digite seu email"
                        type="text"
                    />

                    <Input
                        placeholder="Digite sua senha"
                        type="password"
                    />

                    <Button type="submit">
                        Cadastrar
                    </Button>
                </form>

            </div>
        </div>
    )
}