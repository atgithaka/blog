import Header from './components/Header';
import Link from './components/ui/Link';
import navigationLinks from './components/data/navigation-links.json';

export default function Landing() {
    return (
        <>
            <Header>
                {navigationLinks.map((link, index) => (
                    <Link
                        key={index}
                        URL={link.URL}
                        name={link.name}
                    />
                ))}
            </Header>
        </>
    );
}
