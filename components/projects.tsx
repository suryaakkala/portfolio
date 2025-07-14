import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "Telugu Chatbot",
      description:
        "A Platform to Learn Telugu. Made for Telugu people to learn Telugu language with ease. It has a chatbot that can answer questions in Telugu.",
      image: "/chatbotv2.png?height=200&width=400",
      technologies: ["React", "Next.js", "Responsive Design"],
      liveUrl: "https://suryaakkalachatbotv2.vercel.app/",
      githubUrl: "https://github.com/suryaakkala/chatbotv2",
      period: "Apr 2025 - May 2025",
    },
    {
      title: "Online Art Gallery",
      description:
        "Interactive online art gallery built with React and Next.js, driving a 50% increase in user engagement with optimized image loading.",
      image: "/artgallery.png?height=200&width=400",
      technologies: ["React", "Next.js", "Image Optimization", "Responsive Design"],
      liveUrl: "https://suryaakkala-art-gallery.vercel.app/",
      githubUrl: "https://github.com/suryaakkala/Art-Gallery",
      period: "Feb 2025 - Apr 2025",
    },
    {
      title: "AI Code Converter",
      description:
        "A modern web app that uses LLaMA 3.1 to convert code between C, Java, and Python. Built with Next.js 15, Tailwind CSS, and React Hook Form for seamless UI and robust form handling.",
      image: "/codeconverter.png?height=200&width=400",
      technologies: ["Next.js 15", "Tailwind CSS", "LLaMA 3.1", "Radix UI", "React Hook Form"],
      liveUrl: "https://suryaakkalacodeconverter.vercel.app/",
      githubUrl: "https://github.com/suryaakkala/Code-Converter",
      period: "Jul 2025",
    },
    {
      title: "DevOps Icons Library",
      description:
        "A fully containerized icon explorer offering 1000+ tech and brand icons in PNG/SVG formats. Built with vanilla JS, Dockerized with Nginx, and deployed via Jenkins CI/CD pipeline using Docker Hub integration.",
      image: "/iconlib.png?height=200&width=400",
      technologies: ["HTML", "CSS", "JavaScript (ES Modules)", "Docker", "Nginx", "Jenkins", "Python"],
      liveUrl: "https://icon-library.onrender.com/",
      githubUrl: "https://github.com/suryaakkala/icon-lib",
      period: "Mar 2025 - Apr 2025",
    },
    {
      title: "Assignment Submission System",
      description:
        "Java SpringBoot service that streamlined assignment submissions, enhancing grading efficiency by 50% with robust authentication.",
      image: "/Assignmentapp.jpg?height=200&width=400",
      technologies: ["Java", "Spring Boot", "Authentication", "Database Optimization"],
      // liveUrl: "https://github.com/suryaakkala",
      githubUrl: "https://github.com/suryaakkala/OnlineAssignmentSDP",
      period: "Sep 2024 - Nov 2024",
    },
    {
      title: "Parking Lot Management System",
      description:
        "Python Django system that boosted space utilization efficiency by 25% with real-time monitoring capabilities.",
      image: "/parkingapp.png?height=200&width=400",
      technologies: ["Python", "Django", "Real-time Monitoring", "Database Optimization"],
      // liveUrl: "https://github.com/suryaakkala",
      githubUrl: "https://github.com/suryaakkala/Parking-Lot-Managent-System",
      period: "May 2024 - Jul 2024",
    },

  ]

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 w-full">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
                <p className="text-sm text-muted-foreground font-medium">{project.period}</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                  {project.liveUrl && (
                    <Button size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
