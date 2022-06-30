import { useState } from 'react';
import styles from './styles.module.scss';

import logo from '../../assets/logo.png';
import avatar from '../../assets/avatar.png';

import { Link } from 'react-router-dom';

import { FiSearch, FiX } from 'react-icons/fi';
import { AiOutlineHome } from 'react-icons/ai';
import { FaUsers } from 'react-icons/fa';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { BiMenuAltRight } from 'react-icons/bi';

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className={styles.header}>

            <img className={styles.logo} src={logo} alt="logo" />

            <FiSearch className={styles.searchIcon} size={20} />
            <input type="text" placeholder="Pesquisar..." />

            <nav className={showMenu ? styles.menuOn : styles.navegation}>
                <ul>
                    <li>
                        <Link to="/dashboard">
                            <AiOutlineHome className={styles.homeIcon} size={20} />
                            Início
                        </Link>
                    </li>

                    <li>
                        <Link to="/">
                            <FaUsers className={styles.usersIcon} size={20} />
                            Seguidores
                        </Link>
                    </li>

                    <li>
                        <Link to="/">
                            <BsFillChatDotsFill className={styles.chatIcon} size={20} />
                            Mensagens
                        </Link>
                    </li>
                </ul>
            </nav>

            <span className={styles.menuHamb} onClick={() => setShowMenu(!showMenu)}>
                {showMenu ? <FiX size={40} color="var(--red-900)" />
                    :
                    <BiMenuAltRight size={40} color="var(--red-900)" />
                }
            </span>

            <div className={styles.pictureBox}>
                <Link to="/profile">
                    <img src={avatar} alt="usuario-perfil" />
                </Link>
            </div>

        </header>
    )
}
