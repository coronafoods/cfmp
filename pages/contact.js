import Navbar from '../components/navbar'
import Image from 'next/image'
import css from '../styles/contact.module.css'

function Spices() {
    return <Image
        src="/images/spices.jpg"
        height={500}
        width={420}
        alt="spices"
        className={css.spices}
    />
}


export default function Contact() {
    return (
        <>
            <Navbar />
            <div className={css.main_container}>
                <div className={css.contact_info_container}>
                    <h1 className={css.title}>Contact <br/> Information</h1>
                    <p>Phone / Mobile Number</p>
                    <p>123-456-7890</p>
                    <hr/>
                    <p>Address</p>
                    <p>742 Evergreen Ter, Austin, Texas, 78700</p>
                    <hr/>
                    <p>E-mail Address</p>
                    <p>contact@coronafoods.com</p>
                </div>
                <div className={css.img_container}>
                    <Spices />
                </div>
            </div>
        </>
    )
}