import styles from './styles.module.scss';

export default function Input({...rest}){
    return(
        <input className={styles.input} {...rest}/>
    )
}