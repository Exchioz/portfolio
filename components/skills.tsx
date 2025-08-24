"use client";

import {
    Tooltip,
    Image,
    Card,
    CardBody,
    Avatar
} from "@heroui/react"
import { skills } from "@/config/data"

export default function Skills() {
    return(
        <section id="skills" className="max-w mx-auto px-4 py-8 scroll-mt-10">
            <h2 className="text-3xl font-semibold mb-6">Tech Stack</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                    <Card
                        key={index}
                        className="bg-content1 rounded-lg shadow-md hover:shadow-lg transition-shadow hover:bg-neon hover:text-background"
                    >
                        <CardBody className="flex flex-row items-center gap-4 p-3">
                            <Avatar
                                src={skill.icon}
                                radius="sm"
                                className="w-12 h-12 bg-white p-2"
                                imgProps={{ className: "rounded-md" }}
                            />
                            <div className="flex flex-col justify-center">
                                <p className="text-xl font-semibold">{skill.name}</p>
                                <p className="text-small">{skill.desc}</p>
                            </div>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </section>
    )
}