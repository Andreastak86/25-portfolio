"use client";

import { useEffect, useState } from "react";

export default function ScrollModal() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hasSeenModal = localStorage.getItem("andreas-modal-seen");
        if (hasSeenModal) return;

        const target = document.getElementById("about");
        if (!target) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    localStorage.setItem("andreas-modal-seen", "true");
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        observer.observe(target);

        return () => observer.disconnect();
    }, []);

    if (!isVisible) return null;

    return (
        <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
            <div className='bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-xl w-full max-w-md relative'>
                <button
                    className='absolute top-2 right-2 text-2xl text-gray-400 hover:text-gray-600 dark:hover:text-white'
                    onClick={() => setIsVisible(false)}
                    aria-label='Lukk'
                >
                    &times;
                </button>
                <h2 className='text-xl font-bold mb-4 text-center'>
                    Psst! Vil du vite mer om meg?
                </h2>
                <p className='mb-6 text-center'>
                    Jeg har også en LinkedIn-profil som gjerne vil ha besøk!
                </p>
                <div className='flex justify-center'>
                    <a
                        href='https://www.linkedin.com/in/andreas-takvam-623068a4/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='bg-[var(--color-primary)] text-white px-4 py-2 rounded hover:opacity-90 transition'
                    >
                        Ta meg til LinkedIn
                    </a>
                </div>
            </div>
        </div>
    );
}
