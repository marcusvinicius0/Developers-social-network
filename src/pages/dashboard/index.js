import styles from './styles.module.scss';

import Header from '../../components/Header';

import avatar from '../../assets/avatar.png';

import { AiFillPicture } from 'react-icons/ai';
import { FiVideo } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import { FaUsers } from 'react-icons/fa';

import { IoLogOut } from 'react-icons/io5';

export default function Dashboard() {
    return (
        <>
            <Header />

            {/* <div className={styles.sideBox}>
                <img src={avatar} />
                <p className={styles.userName}>Marcus Vinícius Begheli Santos</p>
                <p className={styles.role}>Desenvolvedor Front-end • React.js</p>
                <hr />

                <div className={styles.routesBox}>

                    <span>
                        <CgProfile color="var(--soft-blue)" size={25} />
                        <p>Meu perfil</p>
                    </span>

                    <span>
                        <FaUsers color="var(--soft-blue)" size={25} />
                        <p>Seguidores</p>
                    </span>

                    <span className={styles.logoutBox}>
                        <IoLogOut color="var(--soft-blue)" size={25} />
                        <p>Sair</p>
                    </span>
                </div>
            </div> */}


            <div className={styles.publicationContainer}>
                <div className={styles.contentBox}>
                    <img src={avatar} />
                    <input
                        type="text"
                        placeholder="No que está pensando?"
                    />
                </div>
                <span>
                    <AiFillPicture size={25} color="var(--soft-blue)" />
                    <FiVideo size={25} color="var(--soft-blue)" />
                </span>
            </div>

            <div className={styles.feed}>

            </div>
        </>

    )
}