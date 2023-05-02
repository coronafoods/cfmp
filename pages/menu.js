import Navbar from '../components/navbar'
import Image from 'next/image';
import css from '../styles/menu.module.css'

function Burger() {
    return <Image
        src="/images/burger.jpg"
        height={300}
        width={300}
        alt="burger"
        className={css.spices}
    />
}

function Egg() {
    return <Image
        src="/images/egg.jpg"
        height={300}
        width={300}
        alt="egg"
        className={css.spices}
    />
}

function Fish() {
    return <Image
        src="/images/fish.jpg"
        height={300}
        width={300}
        alt="fish"
        className={css.spices}
    />
}

function Mediterranean() {
    return <Image
        src="/images/mediterranean.jpg"
        height={300}
        width={300}
        alt="mediterranean"
        className={css.spices}
    />
}

function Thanksgiving() {
    return <Image
        src="/images/thanksgiving.jpg"
        height={300}
        width={300}
        alt="thanksgiving"
        className={css.spices}
    />
}

function Toast() {
    return <Image
        src="/images/toast.jpg"
        height={300}
        width={300}
        alt="toast"
        className={css.spices}
    />
}

export default function Menu() {
    return (
        <>
            <Navbar />
            <div className={css.main_container}>
                <div className={css.title_container}>
                    <h1 className={css.title}>The Meals</h1>
                </div>
                <div className={css.meal_container_top}>
                    <Burger />
                    <Egg />
                    <Thanksgiving />
                    <Fish />
                </div>
                <div className={css.meal_container_bottom}>
                    <Egg />
                    <Mediterranean />
                    <Toast />
                    <Thanksgiving />
                </div>
            </div>
        </>
    )
}