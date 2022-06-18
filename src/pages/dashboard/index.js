import styles from './styles.module.scss';

import Header from '../../components/Header';

import avatar from '../../assets/avatar.png';

import { AiFillPicture } from 'react-icons/ai';
import { FiVideo } from 'react-icons/fi';

export default function Dashboard() {
    return (
        <>
        <Header />
            <div className={styles.publicationBox}>
                <img src={avatar} />
                <input
                    type="text"
                    placeholder="No que está pensando?"
                />
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