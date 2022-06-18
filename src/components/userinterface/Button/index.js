import styles from './styles.module.scss';

export default function Button({...rest}){
    return(
        <button className={styles.button} {...rest} />
    )
}