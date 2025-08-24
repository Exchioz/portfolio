"use client";
import { Button } from "@heroui/react"
import {
    LinkedInIcon,
    GithubIcon,
    MailIcon,
} from "@/components/icons";
import ScrollRoleText from "./ScrollRoleText";
import { socialMedia, title } from "@/config/data";

const iconMap: Record<string, JSX.Element> = {
    github: <GithubIcon />,
    linkedin: <LinkedInIcon />,
    mail: <MailIcon />,
};

export default function HeroSection() {
    return (
        <section id="hero" className="relative flex flex-col items-center justify-center min-h-screen px-4 py-12 scroll-mt-10">
            <div className="z-10 w-full max-w-sm sm:max-w-md mx-auto flex flex-col items-center">
                <div className="w-full h-[50vh] sm:h-[40vh] overflow-hidden rounded-xl shadow-lg">
                    <img 
                        src="/me.png" 
                        className="h-full w-full object-cover object-[50%_12%] rounded-xl" 
                        alt="Profile Picture"
                    />
                </div>
                <div className="w-full flex flex-col items-center mt-4 gap-1">
                    <div className="flex items-center gap-3 w-full">
                        <span className="text-sm sm:text-base">Hello I'm</span>
                        <div className="h-[0.3px] bg-neon flex-1 rounded-full" />
                    </div>
                    <div className="w-full flex justify-center">
                        <svg
                            width="100%"
                            viewBox="0 0 500 70"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <text
                                x="50%"
                                y="50%"
                                dominantBaseline="middle"
                                textAnchor="middle"
                                fontSize="58"
                                fontWeight="bold"
                                fill="white"
                            >
                                Ivan Rajwa Naufal
                            </text>
                        </svg>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center w-full gap-4">
                        <div className="order-1 sm:order-2 flex-grow flex justify-center sm:justify-end w-full sm:w-auto">
                            <ScrollRoleText
                                items={title}
                                interval={2000}
                                itemHeight={30}
                                pauseOnHover={true}
                                className="text-white text-lg lg:text-xl font-light text-center"
                            />
                        </div>
                        <div className="order-2 sm:order-1 flex flex-wrap justify-center sm:justify-start gap-3 w-full sm:w-auto">
                            {socialMedia.map((item, idx) => (
                                <Button
                                    key={idx}
                                    isIconOnly
                                    aria-label={item.name}
                                    size="sm"
                                    radius="md"
                                    className="bg-neon hover:scale-105 transition-transform duration-200"
                                    as="a"
                                    href={item.link}
                                >
                                    {iconMap[item.icon]}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
