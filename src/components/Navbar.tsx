import { useWindowScroll } from '@mantine/hooks';
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { notifications } from '@mantine/notifications';
import { useState } from 'react'
import { HiBuildingOffice2, HiHome, HiShoppingBag, HiUserGroup, HiDocumentText } from "react-icons/hi2"
import { STYLE_GUIDE } from './elements/Button/constant';
import { HiMenuAlt3 } from 'react-icons/hi';
import { HiX } from 'react-icons/hi';

const NavLink = ({
    children,
    isActive,
    href,
    className,
    disabled,
    onClick,
}: {
    children: React.ReactNode;
    isActive: boolean;
    href: string;
    className?: string;
    disabled: boolean;
    onClick?: () => any
}) => {
    return (
        <Link 
            onClick={() => {
                disabled &&
                notifications.show({
                    title: 'Coming soon~',
                    message: '',
                    color: "red"
                })
            }}
            href={href}
            aria-disabled={disabled}
            className={`flex items-center gap-2 font-medium ${isActive ? "text-screaminGreen-4" : "text-gray-100"} ${disabled ? "opacity-20" : "opacity-70"} ${className}`}
        >
            {children}
        </Link>
    )
}

const Navbar = () => {
    const open_reg = new Date("2023-10-17T12:00:00+0700") < new Date()

    const [{ y }] = useWindowScroll();

    const router = useRouter();

    const [isOpen, setIsOpen] = useState(false);

    const next_countdown = new Date("2023-10-17T12:00:00+0700")
    const is_counting = new Date() < next_countdown

    return (
        <nav className={`border-2 bg-black border-gray-100 fixed top-0 sm:top-2 left-1/2 -translate-x-1/2 w-full md:w-11/12 sm:rounded-md  sm:border-2 flex items-center px-5 py-2 gap-4 justify-between transition-all duration-500 z-50 backdrop-blur ${y > 100 ? "sm:top-6 sm:scale-95 border-opacity-20" : "border-opacity-10"}`}>
            <Link href="/">
                <Image src="/logo.png" alt="OH 2023" width={64} height={64} />
            </Link>
            <div onClick={() => setIsOpen(false)} className={`z-20 fixed top-0 ${isOpen ? "left-0" : "-left-full"} sm:static transition-all duration-500 bg-black-1 sm:bg-transparent w-full font-normal sm:w-max h-screen sm:h-full flex flex-col sm:flex-row text-xl sm:text-base bg-opacity-10 backdrop-blur items-center gap-4 flex-1 justify-evenly`}>
                <Link href="/" className='flex items-center justify-center sm:hidden'>
                    <Image src="/logo.png" alt="OH 2023" width={64} height={64} />
                    <span className='text-white font-satoshi text-3xl font-semibold text-white-1'>OH 2023</span>
                </Link>
                <NavLink href='/' isActive={router.pathname === "/"} disabled={false}>
                    <HiHome />
                    <span className='text-white'>Home</span>
                </NavLink>
                <NavLink href='/about' isActive={router.pathname === "/about"} disabled={false}>
                    <HiBuildingOffice2 />
                    <span className='text-white'>About Fasilkom</span>
                </NavLink>
                {is_counting &&
                    <NavLink href='/registration' isActive={router.pathname === "/registration"} disabled={false}>
                        <HiDocumentText />
                        <span className='text-white'>Registration</span>
                    </NavLink>
                }
                <NavLink href='' isActive={router.pathname === "/wall-of-fame"} disabled>
                    <HiUserGroup />
                    <span className='text-white'>Wall of Fame</span>
                </NavLink>
                <NavLink href='' isActive={router.pathname === "/merchandise"} disabled>
                    <HiShoppingBag />
                    <span className='text-white'>Merchandise</span>
                </NavLink>
                {open_reg && 
                    <NavLink href='/register' isActive={router.pathname === "/register"} className={`px-4 py-2 border-2 text-white border-white rounded transition-all ${STYLE_GUIDE['secondary']} !opacity-100`} disabled={false}>
                        {/* <HiHome /> */}
                        Register
                    </NavLink>
                }
                <button onClick={() => setIsOpen(false)} className='sm:hidden'>
                  <HiX className='text-white-1 text-3xl' />
                </button>
            </div>
            <button onClick={() => setIsOpen(true)} className='sm:hidden'>
                <HiMenuAlt3 className='text-white-1 text-3xl' />
            </button>
        </nav>
    )
}

export default Navbar