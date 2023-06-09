import Navbar from '../components/navbar'
import Image from 'next/image';
import css from '../styles/about-the-chef.module.css'
import chef from '../public/images/chef.jpg'


function Chef() {
    return <Image
        src={chef}
        height={600}
        width={500}
        alt="Professional headshot of a chef"
        className={css.chef}
    />
}

export default function AboutTheChef() {
    return (
        <>
            <Navbar />
            <main className={css.container_main}>
                <Chef />
                <div className={css.container_txt}>
                    <h1 className={css.title}>about the chef</h1>
                    <p className={css.copy}>One trick is to tell 'em stories that don't go anywhere, 
                    like the time I caught the ferry over to Shelbyville. I needed a new heel for my shoe, 
                    so, I decided to go to Morganville, which is what they called Shelbyville in those days. 
                    So I tied an onion to my belt, which was the style at the time. Now, to take the ferry cost a nickel, 
                    and in those days, nickels had pictures of bumblebees on 'em. "Give me five bees for a quarter," you'd say.
                    Now, where were we? Oh yeah, the important thing was I had an onion on my belt, which was the style at the time. 
                    They didn't have white onions because of the war. The only thing you could get was those big yellow ones..</p>
                </div>
            </main>
        </>
    )
}