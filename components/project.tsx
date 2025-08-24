"use client";
import {
    Card,
    CardBody,
    CardFooter,
    Image,
    Chip
} from "@heroui/react";

import { projects } from "@/config/data";

export default function Projects() {
    return (
        <section id="projects" className="max-w mx-auto px-4 py-8 scroll-mt-10">
            <h2 className="text-3xl font-semibold mb-6">Projects</h2>
            <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <Card key={index} isPressable shadow="sm" className="w-full">
                        <CardBody className="overflow-visible p-0">
                            <Image
                                alt={project.title}
                                className="w-full object-cover h-full"
                                radius="lg"
                                shadow="sm"
                                src={project.image}
                                width="100%"
                            />
                            <div className="px-3 py-2">
                                <p className="text-xl font-semibold mb-1">{project.title}</p>
                                <p className="text-sm text-foreground-500 mb-2 text-justify">{project.description}</p>
                                
                            </div>
                        </CardBody>
                        <CardFooter className="flex justify-between items-center pt-1">
                            <div className="flex flex-wrap gap-2">
                                {project.stack.map((tech, idx) => (
                                    <Chip 
                                        key={idx}
                                        size="sm"
                                    >
                                        {tech}
                                    </Chip>
                                ))}
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    );
}