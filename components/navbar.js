import css from './navbar.module.css'
import Link from 'next/Link'


export default function Navbar() {
    return (
        <nav className={css.navbar}>
            <Link href="/" className={css.link}>
                <span >Home</span>
            </Link>
            <Link href="/about-the-chef" className={css.link}>
                <span >About the Chef</span>
            </Link>
            <Link href="/how-it-works" className={css.link}>
                <span >How it Works</span>
            </Link>
            <Link href="/menu" className={css.link}>
                <span >Menu</span>
            </Link>
            <Link href="/meet-the-team" className={css.link}>
                <span >Meet the Team</span>
            </Link>
            <Link href="/reviews" className={css.link}>
                <span >Reviews</span>
            </Link>
            <Link href="/contact" className={css.link}>
                <span >Contact</span>
            </Link>
        </nav>
    )
}