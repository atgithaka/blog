import styles from '../../page.module.css';
import localFont from 'next/font/local';

const workSans = localFont({
    src: [
        {
            path: '../../fonts/work-sans-normal.ttf',
            style: 'normal',
        },
        {
            path: '../../fonts/work-sans-italic.ttf',
            style: 'italic',
        },
    ],
});

export default function Button({ URL, name, type }: ButtonProps) {
    const buttonType =
        type === 'filled'
            ? `${styles.filled_button}`
            : `${styles.outlined_button}`;
    return (
        <a href={URL}>
            <button className={`${buttonType} ${workSans.className}`}>
                {name}
            </button>
        </a>
    );
}
