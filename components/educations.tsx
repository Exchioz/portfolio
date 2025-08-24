"use client";
import {
    Accordion,
    AccordionItem,
    Avatar
} from "@heroui/react";
import { educations } from "@/config/data";

export default function Educations() {
    return(
        <section id="educations" className="max-w mx-auto px-4 py-8 scroll-mt-10">
            <h2 className="text-3xl font-semibold mb-6">Educations</h2>
            <Accordion
                variant="splitted" 
                defaultExpandedKeys={["0"]}
            >
                {educations.map((education, index) => (
                    <AccordionItem
                        key={index}
                        textValue="Education Details"
                        startContent={
                            <div className="hidden md:block">
                                <Avatar
                                    radius="sm"
                                    src={education.image}
                                />
                            </div>
                        }
                        title={
                            <div className="flex justify-between items-center">
                                <span className="text-xl font-semibold">{education.title}</span>
                                <span className="text-sm text-foreground-500 hidden md:inline">{education.period}</span>
                            </div>
                        }
                        subtitle={
                            <>
                                <span className="text-sm text-foreground-500 block">{education.institution}</span>
                                <span className="text-xs text-foreground-500 block md:hidden">{education.period}</span>
                            </>
                        }
                    >
                        <ul className="list-disc pl-5 space-y-2 pb-2">
                            {education.details.map((detail, idx) => (
                                <li key={idx} className="text-justify">{detail}</li>
                            ))}
                        </ul>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    )
}