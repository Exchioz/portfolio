export const menuItems = [
    { name: "About Me", href: "#aboutme" },
    { name: "Experiences", href: "#experiences" },
    { name: "Educations", href: "#educations" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
];
export const name = "Ivan Rajwa Naufal"
export const title = [
    "AI Developer",
    "MLOps",
    "Back-End Developer",
    "Tech Enthusiast"
]
export const socialMedia = [
    {name: "GitHub", icon: "github", link: "https://github.com/Exchioz"},
    {name: "LinkedIn", icon: "linkedin", link: "https://www.linkedin.com/in/ivanrajwa/"},
    {name: "Email", icon: "mail", link: "https://mail.google.com/mail/u/1/?view=cm&to=contact@ivanrajwa.my.id"},
]
export const descriptions = ["AI Engineer with 1+ years of professional experience specializing in Natural Language Processing and Computer Vision. Possesses deep expertise in the complete LLM lifecycle, including developing advanced applications such as a Retrieval Augmented Generation (RAG) system for contextual question answering and a Model Context Protocol (MCP) designed to be leveraged by LLM agents for autonomous internal resource management. All systems are brought to production through scalable deployment with Kubernetes, ensuring reliable and efficient operations."]
export const experiences = [
    {
        image: "/datacomm.png",
        title: "AI Developer",
        company: "Datacomm Diangraha",
        period: "Nov 2024 - Present",
        responsibilities: [
            "Adapted foundational LLM for conversational AI by fine tuning them on Indonesian regional language datasets, enhancing the LLM ability to understand local dialects and cultural nuances.",
            "Implemented distributed training configurations across multi-GPU clusters using Ray to accelerate the fine tuning of large scale models and optimize compute resource utilization.",
            "Developed a Retrieval Augmented Generation (RAG) system, with responsibility for the data ingestion pipeline: chunking text, generating embeddings, and publishing to a PostgreSQL Vector Database.",
            "Developed a MCP server that interfaces with OpenStack API to automate the management of cloud resources, including the creation of Instance and the listing of networks, flavors, and images.",
            "Authored and maintained Kubernetes deployment manifest to define the configuration, resource allocation, and service endpoint for LLMs.",
            "Conducted applied research and developed prototypes across multiple AI domains, including image detection, classification, recommendation systems, and advanced LLM applications"
        ]
    },
    {
        image: "/soca.png",
        title: "AI Engineer",
        company: "SOCA AI",
        period: "Feb - Jun 2023",
        responsibilities: [
            "Developed and fine-tuned deep learning models based on BERT for offensive language detection, covering end-to-end pipeline from data collection and pre-processing to training, and optimization.",
            "Built a Flask back-end and integrated it with MongoDB to enable seamless interaction with AI models"   
        ]
    }
]
export const educations = [
    {
        image: "/upi.png",
        title: "Bachelor of Computer Engineering",
        institution: "Education University of Indonesia",
        period: "Sep 2020 - Aug 2024",
        details: [
            "Graduated with a GPA 3.76/4.00 over 146 credits",
            "Bachelor's Thesis: Developed a Parking System, utilizing YOLO and CNN for license plate recognition, integrated with a Raspberry Pi for gate control, an Android app for online reservations, and Flask with MySQL for data management."
        ]
    }
]
export const skills = [
    { name: "Python", icon: "/python.png", desc: "Backend Language" },
    { name: "FastAPI", icon: "/fastapi.png", desc: "Backend Framework" },
    { name: "Flask", icon: "/flask.png", desc: "Backend Framework" },
    { name: "PyTorch", icon: "/pytorch.png", desc: "Deep Learning Library" },
    { name: "vLLM", icon: "/vllm.png", desc: "LLM Inference Engine" },
    { name: "OpenAI", icon: "/openai.png", desc: "AI Platform" },
    { name: "LangChain", icon: "/langchain.png", desc: "LLM App Framework" },
    { name: "LangGraph", icon: "/langgraph.png", desc: "Workflow Toolkit" },
    { name: "FastMCP", icon: "/fastmcp.png", desc: "Multi-Agent Platform" },
    { name: "Postgres", icon: "/postgres.png", desc: "Relational Database" },
    { name: "Redis", icon: "/redis.png", desc: "In-Memory Database" },
    { name: "Docker", icon: "/docker.png", desc: "Containerization" },
    { name: "Git", icon: "/git.png", desc: "Version Control" }
]
export const projects = [
    {
        image: "/smartparkingsys.jpg",
        title: "Smart Parking System",
        description: "A Smart parking gate with license plate recognition, and mobile reservations.",
        stack: ["Kotlin", "Python", "Flask", "OpenCV", "YOLO", "TensorFlow", "MySQL"],
    },
    {
        image: "/smartgateiot.jpg",
        title: "Smart Gate IoT",
        description: "A Smart residential IoT system with ESP32 access control and web interface.",
        stack: ["PHP", "Python", "Flask", "OpenCV","MySQL"],
    },
    {
        image: "/evoting.jpg",
        title: "E-voting Web App",
        description: "A web application for conducting online voting.",
        stack: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    },
    {
        image: "/laundry.jpg",
        title: "Laundry Mobile App",
        description: "A mobile application for managing laundry services.",
        stack: ["Kotlin", "SQLite"],
    },
]

export const Data = {
    name: "Ivan Rajwa Naufal",
    tittle: [
        "AI Developer",
        "MLOps",
        "Back-End Developer",
        "Tech Enthusiast"
    ],
    socialMedia: [
        {name: "GitHub", alt: "", link: ""},
        {name: "LinkedIn", alt: "", link: ""},
        {name: "Email", alt: "", link: ""},
    ],
    desc: "AI Engineer with 1+ years of professional experience specializing in Natural Language Processing and Computer Vision. Possesses deep expertise in the complete LLM lifecycle, including developing advanced applications such as a Retrieval Augmented Generation (RAG) system for contextual question answering and a Model Context Protocol (MCP) designed to be leveraged by LLM agents for autonomous internal resource management. All systems are brought to production through scalable deployment with Kubernetes, ensuring reliable and efficient operations.",
    experiences: [
        {
            image: "/telkom.png",
            title: "AI Engineer",
            company: "PT Telekomunikasi Indonesia Tbk",
            period: "Jul 2023 - Present",
            responsibilities: [
                "Developed a Retrieval Augmented Generation (RAG) system, with responsibility for the data ingestion pipeline: chunking text, generating embeddings, and publishing to a PostgreSQL Vector Database.",
                "Developed a MCP server that interfaces with OpenStack API to automate the management of cloud resources, including the creation of Instance and the listing of networks, flavors, and images.",
                "Authored and maintained Kubernetes deployment manifest to define the configuration, resource allocation, and service endpoint for LLMs.",
                "Conducted applied research and developed prototypes across multiple AI domains, including image detection, classification, recommendation systems, and advanced LLM applications"
            ]
        },
        {
            image: "/soca.png",
            title: "AI Engineer",
            company: "SOCA AI",
            period: "Feb - Jun 2023",
            responsibilities: [
                "Developed and fine-tuned deep learning models based on BERT for offensive language detection, covering end-to-end pipeline from data collection and pre-processing to training, and optimization.",
                "Built a Flask back-end and integrated it with MongoDB to enable seamless interaction with AI models"   
            ]
        }
    ],
    educations: [
        {
            image: "/upi.png",
            title: "Bachelor of Computer Engineering",
            institution: "Education University of Indonesia",
            period: "Sep 2020 - Aug 2024",
            details: [
                "Graduated with a GPA 3.76/4.00 over 146 credits",
                "Bachelor's Thesis: Developed a Parking System, utilizing YOLO and CNN for license plate recognition, integrated with a Raspberry Pi for gate control, an Android app for online reservations, and Flask with MySQL for data management."
            ]
        }
    ],
    skills: [
        {name: "Python", icon: "/skills/python.png"},
        {name: "JavaScript", icon: "/skills/javascript.png"},
        {name: "TypeScript", icon: "/skills/typescript.png"},
        {name: "Docker", icon: "/skills/docker.png"},
        {name: "Kubernetes", icon: "/skills/kubernetes.png"},
        {name: "TensorFlow", icon: "/skills/tensorflow.png"},
        {name: "PyTorch", icon: "/skills/pytorch.png"},
        {name: "FastAPI", icon: "/skills/fastapi.png"},
        {name: "Flask", icon: "/skills/flask.png"},
        {name: "MongoDB", icon: "/skills/mongodb.png"},
        {name: "PostgreSQL", icon: "/skills/postgresql.png"},
        {name: "Git", icon: "/skills/git.png"},
    ]
}