import Brand from './ui/Brand';
import Button from './ui/Button';
import styles from '../page.module.css';

export default function Header({ children }: ChildrenProps) {
    return (
        <header className={styles.header}>
            <Brand
                URL='/'
                name='Blog'
            />
            <nav className={styles.navigation}>{children}</nav>
            <div className={styles.call_to_action}>
                <Button
                    URL=''
                    name='Login'
                    type='filled'
                />
            </div>
        </header>
    );
}
