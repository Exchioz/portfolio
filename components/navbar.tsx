'use client'
import { useState, useEffect } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
} from "@heroui/react";
import { menuItems } from "@/config/data"

export const IRLogo = () => { return ( <svg width="20" height="20" viewBox="0 0 32 32" fill="#39ff14" xmlns="http://www.w3.org/2000/svg"> <rect y="2" width="7.24987" height="6.86415" fill="white"/> <rect y="15.965" width="7.24987" height="13.2549" fill="white"/> <path d="M21.6877 2C27.3826 2.00015 31.9991 6.61669 31.9993 12.3115C31.9992 18.0065 27.3827 22.6239 21.6877 22.624H14.6506V15.8711H20.4358C22.3507 15.8709 23.9034 14.3182 23.9036 12.4033C23.9036 10.4883 22.3508 8.93576 20.4358 8.93555H14.6506V2H21.6877Z" fill="white"/> <path d="M31.9744 29.1941H21.5994L14.6501 22.6238L18.2878 16.2361L31.9744 29.1941Z" fill="white"/> </svg> ) }

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string>("");

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    return (
        <Navbar
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            maxWidth="2xl"
            className="fixed top-0 left-0 w-full z-50 transition-colors duration-500 bg-transparent"
        >
            <NavbarContent className="flex gap-4" justify="start">
                <NavbarBrand className="flex items-center gap-2 cursor-pointer" onClick={() => {
                    const heroSection = document.getElementById("hero");
                    if (heroSection) {
                        heroSection.scrollIntoView({ behavior: "smooth" });
                    }
                }}>
                    <IRLogo/>
                    <p className="ms-2 font-bold align-middle text-white">ivanrajwa</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden md:flex gap-4" justify="center">
                {menuItems.map((item, idx) => (
                    <NavbarItem key={idx}>
                        <Link
                            color="foreground"
                            href={item.href}
                            className={`scroll-smooth relative transition duration-300
                            after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full
                            after:bg-neon after:scale-x-0 after:origin-left hover:after:scale-x-100 
                            after:transition-transform after:duration-300
                            ${activeSection === item.href.replace("#", "") ? "text-neon font-bold" : "text-white"}`}
                            onClick={e => {
                                e.preventDefault();
                                const sectionId = item.href.replace('#', '');
                                const section = document.getElementById(sectionId);
                                if (section) {
                                    section.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                        >
                            {item.name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem>
                    {/* <Button as={Link} href="#" variant="flat" className="bg-neon text-background font-bold">
                        Hire Me!
                    </Button> */}
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
