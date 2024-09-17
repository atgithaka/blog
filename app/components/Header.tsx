import Brand from './ui/Brand';
import Button from './ui/Button';

export default function Header({ children }: ChildrenProps) {
    return (
        <header>
            <Brand
                URL='/'
                name='Blog'
            />
            <nav>{children}</nav>
            <div>
                <Button
                    URL=''
                    name='Login'
                    type='filled'
                />
            </div>
        </header>
    );
}
