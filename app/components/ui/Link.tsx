import styles from '../../page.module.css';

export default function Link({ URL, name, active }: LinkProps) {
    return (
        <a
            href={URL}
            className={`${styles.link} ${active ? styles.link_active : ''}`}>
            {name}
        </a>
    );
}
