"use client";
import {
    Accordion,
    AccordionItem,
    Avatar
} from "@heroui/react";
import { experiences } from "@/config/data";


export default function Experiences() {
    return (
        <section id="experiences" className="max-w mx-auto px-4 py-8 scroll-mt-10">
            <h2 className="text-3xl font-semibold mb-6">Experiences</h2>
            <Accordion variant="splitted" defaultExpandedKeys={["0"]}>
                {experiences.map((experience, index) => (
                    <AccordionItem
                        key={index}
                        textValue="Experience Details"
                        startContent={
                            <div className="hidden md:block">
                                <Avatar
                                    radius="sm"
                                    src={experience.image}
                                />
                            </div>
                        }
                        title={
                            <div className="flex justify-between items-center">
                                <span className="text-xl font-semibold">{experience.title}</span>
                                <span className="text-sm text-foreground-500 hidden md:inline">{experience.period}</span>
                            </div>
                        }
                        subtitle={
                            <>
                                <span className="text-sm text-foreground-500 block">{experience.company}</span>
                                <span className="text-xs text-foreground-500 block md:hidden">{experience.period}</span>
                            </>
                        }
                        // className="bg-neon"
                    >
                        <ul className="list-disc pl-5 space-y-2 pb-2">
                            {experience.responsibilities.map((responsibility, idx) => (
                                <li key={idx} className="text-justify">{responsibility}</li>
                            ))}
                        </ul>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    );
}