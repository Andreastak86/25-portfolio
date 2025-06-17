import React from "react";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Header from "@/components/Header";

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-start gap-12 p-24 bg-[var(--color-primary)]'>
            <Header />
            <section id='about' className='w-full scroll-mt-32'>
                <About />
            </section>

            <section id='experience' className='w-full scroll-mt-32'>
                <Experience />
            </section>

            <section id='portfolio' className='w-full scroll-mt-32'>
                <Portfolio />
            </section>

            <section id='contact' className='w-full scroll-mt-32'>
                <Contact />
            </section>
        </main>
    );
}
