import { useWindowScroll } from '@mantine/hooks';
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useState } from 'react'
import { HiBuildingOffice2, HiHome, HiShoppingBag, HiUserGroup } from "react-icons/hi2"
import { STYLE_GUIDE } from './elements/Button/constant';

const NavLink = ({
    children,
    isActive,
    href,
    className,
}: {
    children: React.ReactNode;
    isActive: boolean;
    href: string;
    className?: string;
}) => {
    return (
        <Link href={href} className={`flex items-center gap-2 font-medium ${isActive ? "text-screaminGreen-4 opacity-70" : "text-gray-100 opacity-70"} ${className}`}>
            {children}
        </Link>
    )
}


const Navbar = () => {

    const [{ y }] = useWindowScroll();

    const router = useRouter();

    return (
        <nav className={`border-2  border-gray-100 fixed top-0 sm:top-2 left-1/2 -translate-x-1/2 w-full sm:w-4/5 sm:rounded-md  sm:border-2 flex items-center px-5 py-2 gap-4 justify-between transition-all duration-500 z-50 backdrop-blur ${y > 100 ? "sm:top-6 sm:scale-95 border-opacity-20" : "border-opacity-10"}`}>
            <Link href="/">
                <Image src="/logo.png" alt="OH 2023" width={64} height={64} />
            </Link>
            <div className='hidden sm:flex items-center gap-4 flex-1 justify-evenly'>
                <NavLink href='/' isActive={router.pathname === "/"}>
                    <HiHome />
                    <span className='text-white'>Home</span>
                </NavLink>
                <NavLink href='/about' isActive={router.pathname === "/about"}>
                    <HiBuildingOffice2 />
                    <span className='text-white'>About Fasilkom</span>
                </NavLink>
                <NavLink href='/wall-of-fame' isActive={router.pathname === "/wall-of-fame"}>
                    <HiUserGroup />
                    <span className='text-white'>Wall of Fame</span>
                </NavLink>
                <NavLink href='/merchandise' isActive={router.pathname === "/merchandise"}>
                    <HiShoppingBag />
                    <span className='text-white'>Merchandise</span>
                </NavLink>
                <NavLink href='/register' isActive={router.pathname === "/register"} className={`px-4 py-2 border-2 text-white border-white rounded transition-all ${STYLE_GUIDE['secondary']} !opacity-100`}>
                    {/* <HiHome /> */}
                    Register
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar