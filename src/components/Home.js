import React from 'react'
import image from '../AboutImage.svg'
export default function Home(){
    return(
        <main>
            <img src={image} alt="" className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-40 px-8">
                <h1 className="text-6xl text-green-400 font-bold cursive leading-none lg:leading-snug home-name">Welcome To Code Fancy</h1>

            </section>
            <button>Sign up</button>
        </main>
    )
}