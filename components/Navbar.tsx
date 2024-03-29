import styles from '../styles/Navbar.module.scss'
import Link from "next/link";
import {useRouter} from "next/router";
import Image from "next/image";
import {FC} from "react";
import {navigateType} from "../types";

const navigation: navigateType[] = [
    { id: 1, title: 'Home', path: '/' },
    { id: 2, title: 'Posts', path: '/posts' },
    { id: 3, title: 'Contacts', path: '/contacts' },
]

const Navbar: FC = () => {
    const {pathname} = useRouter()

    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Image src='/ava.jpg' width={60} height={60} alt='ава' />
            </div>

            <div className={styles.links}>
                {
                    navigation.map(({ id, title, path }) =>
                        <Link
                            key={id}
                            href={path}
                            className={pathname === path ? styles.active : null}
                        >
                            {title}
                        </Link>
                    )
                }
            </div>
        </nav>
    )
}

export default Navbar