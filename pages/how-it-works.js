import Navbar from '../components/navbar'
import Image from 'next/image';
import css from '../styles/how-it-works.module.css'

function Spices() {
    return <Image
        src="/images/spices.jpg"
        height={500}
        width={420}
        alt="spices"
        className={css.spices}
    />
}

export default function HowItWorks() {
    return (
        <>
            <Navbar />
            <div className={css.main_container}>
                <div className={css.our_why_container}>
                    <div className={css.our_why_txt}>
                        <h1 className={css.our_why_title}>Our Why</h1>
                        <p className={css.our_why_copy}>One trick is to tell 'em stories that don't go anywhere, 
                        like the time I caught the ferry over to Shelbyville. I needed a new heel for my shoe, 
                        so, I decided to go to Morganville, which is what they called Shelbyville in those days. 
                        So I tied an onion to my belt, which was the style at the time. Now, to take the ferry cost a nickel, 
                        and in those days, nickels had pictures of bumblebees on 'em. "Give me five bees for a quarter," you'd say.
                        Now, where were we? Oh yeah, the important thing was I had an onion on my belt, which was the style at the time. 
                        They didn't have white onions because of the war. The only thing you could get was those big yellow ones..</p>
                    </div>
                    <div>
                        <Spices />
                    </div>
                </div>
                <div className={css.your_why_container}>
                    <Spices />
                    <div className={css.your_why_txt}>
                        <div className={css.your_why_title_container}>
                            <h1 className={css.your_why_title}>Your Why</h1>
                        </div>
                        <p className={css.your_why_copy}>One trick is to tell 'em stories that don't go anywhere, 
                        like the time I caught the ferry over to Shelbyville. I needed a new heel for my shoe, 
                        so, I decided to go to Morganville, which is what they called Shelbyville in those days. 
                        So I tied an onion to my belt, which was the style at the time. Now, to take the ferry cost a nickel, 
                        and in those days, nickels had pictures of bumblebees on 'em. "Give me five bees for a quarter," you'd say.
                        Now, where were we? Oh yeah, the important thing was I had an onion on my belt, which was the style at the time. 
                        They didn't have white onions because of the war. The only thing you could get was those big yellow ones..</p>
                    </div>
                </div>
            </div>
        </>
    )
}