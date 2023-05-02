// import { useState } from 'react';

// function Navbar({ val }) {
//     return (
//         <div>this is a {val}</div>
//     )
// }

// export default function Cfmp() {
//     const [value, setValue] = useState(null);

//     function handleValue() {
//         setValue('hb');
//     }
//     function handleValueRWS() {
//         setValue('rws');
//     }

//     return (
//         <>
//             <Navbar val={value}/>
//             <Navbar val={value}/>
//             <button onClick={handleValue}>hb</button>
//             <button onClick={handleValueRWS}>rws</button>
//         </>
//     )
// }

import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/navbar'
import logo from '../public/images/logo.png'
import spices from '../public/images/spices.jpg'

function Logo() {
    return <Image
        src={logo}
        height={400}
        width={600}
        alt="Corona Foods Meal Prep Logo"
        className="logo"
    />
}

function Spices() {
    return <Image
        src={spices}
        height={500}
        width={500}
        alt="Spices on table"
        className="spices"
    />
}


export default function Home() {
    return (
        <>
            <Head>
                <title>Corona Foods</title>
            </Head>
            <Navbar />
            <div className="container">
                <Spices />
                <Logo />
                <div className="motto">
                    <p>Dedicated to providing quality meals to <br/> support families of any lifestyle</p>
                    <p>2023</p>
                </div>
            </div>
        </>
    )
}