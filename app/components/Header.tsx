'use client';
import { useState } from 'react';
import Brand from './ui/Brand';
import Button from './ui/Button';
import styles from '../page.module.css';
import Image from 'next/image';

export default function Header({ children }: ChildrenProps) {
    const [state, setState] = useState(Boolean);
    function toogleDropdown() {
        setState(!state);
    }
    return (
        <header className={styles.header}>
            <Brand
                URL='/'
                name='Blog'
            />
            <nav className={styles.navigation}>{children}</nav>
            <nav
                className={styles.navigation_dropdown}
                onClick={toogleDropdown}>
                <div className={styles.navigation_dropdown_icon}>
                    {state ? (
                        <Image
                            src={'/icons/close.svg'}
                            alt='Menu Icon'
                            width={50}
                            height={50}
                        />
                    ) : (
                        <Image
                            src={'/icons/menu.svg'}
                            alt='Menu Icon'
                            width={50}
                            height={50}
                        />
                    )}
                </div>
                {state ? (
                    <div className={styles.navigation_dropdown_children}>
                        {children}
                        <Button
                            URL=''
                            name='Login'
                            type='filled'
                        />
                    </div>
                ) : (
                    <></>
                )}
            </nav>
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
