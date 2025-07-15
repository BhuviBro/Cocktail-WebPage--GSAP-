import React from 'react'
import { navLinks } from '../../constants/index'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const NavBar = () => {
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top',
            }
        })
        navTween.fromTo('nav', 
            { backgroundColor: 'transparent',
             },
             {
                backgroundColor: '#00000050',
                duration:1,
                ease: 'power1.inOut',
             }
        )

    }, []);

    return (
        <nav>
            <div>
                <a className='flex items-center gap-2 ' href="#home">
                    <img src="/images/logo.png" alt="logo" className='w-10 h-10' />
                    <p>Velvet Pour</p>
                </a>
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href={`#${link.id}`} className='text-gray-700 hover:text-gray-900'>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
