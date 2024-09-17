import Image from 'next/image';
import styles from '../../page.module.css';

export default function Brand({ URL, name }: LinkProps) {
    return (
        <div className={styles.brand}>
            <a href={URL}>
                <Image
                    src={'/logo.svg'}
                    alt='Blog Logo'
                    width={50}
                    height={50}
                />
            </a>
            <p>{name}</p>
        </div>
    );
}
