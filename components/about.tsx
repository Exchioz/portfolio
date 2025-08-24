import { descriptions } from "@/config/data"


export default function About(){
    return(
        <section id="aboutme" className="max-w mx-auto px-4 py-8 scroll-mt-10">
            <h2 className="text-3xl font-semibold mb-6">About Me</h2>
            <div className="flex flex-wrap justify-center gap-8">
            {descriptions.map((dsc, idx) => (
                <span key={idx} className="space-y-4 text-justify indent-14">{dsc}</span>
            ))}
            </div>
      </section>
    )
}