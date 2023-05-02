import Navbar from '../components/navbar'
import Image from 'next/image'
import css from '../styles/reviews.module.css'
import chef from '../public/images/chef.jpg'
import coo from '../public/images/coo.jpg'
import cto_01 from '../public/images/cto_01.jpg'

function CEO() {
    return <Image
        src={chef}
        height={300}
        width={300}
        alt="toast"
        className={css.spices}
    />
}

function COO() {
    return <Image
        src={coo}
        height={300}
        width={300}
        alt="toast"
        className={css.spices}
    />
}

function CTO() {
    return <Image
        src={cto_01}
        height={300}
        width={300}
        alt="toast"
        className={css.spices}
    />
}

export default function Reviews() {
    return (
        <>
            <Navbar />
            <div className={css.main_container}>
                <div className={css.title_container}>
                    <h1 className={css.title}>Customer Reviews</h1>
                </div>
                <div className={css.team_container}>
                    <div className={css.teammember_container}>
                        <CEO />
                        <h2>Homer Simpson</h2>
                        <p>I'm not easily impressed. Wooow! A blue car!</p>
                    </div>
                    <div className={css.teammember_container}>
                        <COO />
                        <h2>Lisa Simpson</h2>
                        <p>I am the lizard queen!</p>
                    </div>
                    <div className={css.teammember_container}>
                        <CTO />
                        <h2>Bart Simpson</h2>
                        <p>I'm Bart Simpson, who the hell are you?</p>
                    </div>
                </div>
            </div>
        </>
    )
}