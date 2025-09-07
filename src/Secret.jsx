import './Secret.css'
import bsDad from './assets/bsdad.jpg'
import chairDad from './assets/dadchairwithmom.jpg'
import dadGlass from './assets/dadglasses.jpg'
import dollyDad from './assets/dollyDad.jpg'
import elvis from './assets/elvis.jpg'
import family from './assets/family.jpg'
import fileDad from './assets/fileddad.jpg'
import momDadChristmas from './assets/momdadchristmas.jpg'
import stache from './assets/stache.jpg'

function Secret() {

    return(
        <>
            <div className='myDad'>
                <h1>My Dad</h1>
            </div>
            <img src={bsDad}></img>
            <img src={chairDad}></img>
            <img src={dollyDad}></img>
            <img src={elvis}></img>
            <img src={family}></img>
            <img src={fileDad}></img>
            <img src={momDadChristmas}></img>
            <img src={stache}></img>

            <div>
                <p>Joe Schwartz is an author, a rocker, and even a realtor. The more important thing is he is my dad. He is a man who has given me everything he can.</p>
                <p>I've had him drive me to the courthouse to get a tax form minutes before the DMV closed. I've wrecked his car while learning how to drive. He even paid to get my</p>
                <p>transcripts back after I dropped out. He picked me up from the hospital, he was the frist one I saw and I can still remember that hug. He wrote a song when I was born</p>
                <p>that he sent me on my birthday, I cried like a baby. My dad is an amazing, thougtful, caring, verbose, and kind man. He has his moments but he is my dad.</p>
                <p>I care about him so much. I want to give him double what he has given me. I want to thank him for bringing me up in such an amazing way. I'll always love my dad.</p>
                <p></p>
                <p>Chris Schwartz</p>
            </div>

            <img src={dadGlass}></img>
        </>
    )
}

export default Secret;