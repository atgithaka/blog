import Header from './components/Header';
import Link from './components/ui/Link';
import navigationLinks from './components/data/navigation-links.json';
import styles from './page.module.css';
import Main from './components/Main';

export default function Landing() {
    return (
        <>
            <Header>
                {navigationLinks.map((link, index) => (
                    <Link
                        key={index}
                        URL={link.URL}
                        name={link.name}
                        active={link.active}
                    />
                ))}
            </Header>
            <Main />
        </>
    );
}
