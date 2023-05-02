import Navbar from '../components/navbar'
import Image from 'next/image';
import css from '../styles/menu.module.css'
import burger from '../public/images/burger.jpg'
import egg from '../public/images/egg.jpg'
import fish from '../public/images/fish.jpg'
import mediterranean from '../public/images/mediterranean.jpg'
import thanksgiving from '../public/images/thanksgiving.jpg'
import toast from '../public/images/toast.jpg'


function Burger() {
    return <Image
        src={burger}
        height={300}
        width={300}
        alt="burger"
        className={css.spices}
    />
}

function Egg() {
    return <Image
        src={egg}
        height={300}
        width={300}
        alt="egg"
        className={css.spices}
    />
}

function Fish() {
    return <Image
        src={fish}
        height={300}
        width={300}
        alt="fish"
        className={css.spices}
    />
}

function Mediterranean() {
    return <Image
        src={mediterranean}
        height={300}
        width={300}
        alt="mediterranean"
        className={css.spices}
    />
}

function Thanksgiving() {
    return <Image
        src={thanksgiving}
        height={300}
        width={300}
        alt="thanksgiving"
        className={css.spices}
    />
}

function Toast() {
    return <Image
        src={toast}
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