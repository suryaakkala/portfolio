import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Palette } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="relative w-32 h-32 mx-auto mb-8">
            <Image
              src="/me.jpg?height=128&width=128"
              alt="Akkala Surya Venkata Deepak"
              fill
              className="rounded-full object-cover border-4 border-primary"
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="text-primary">Surya Akkala</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Full-Stack Developer & Software Engineer
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Visionary leader with a track record in architecting software solutions, galvanizing team synergy, and
              optimizing operations. Led initiatives that amplified user engagement and system performance across
              diverse platforms.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/Akkala_Surya_Venkata_Deepak_Resume.pdf" download="Akkala_Surya_Venkata_Deepak_Resume.pdf">
                Download Resume
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/suryaakkala" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/suryaakkala/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            {/* <Button variant="ghost" size="icon" asChild>
              <a href="https://www.behance.net/suryaakkala" target="_blank" rel="noopener noreferrer">
                <Palette className="h-6 w-6" />
                <span className="sr-only">Behance</span>
              </a>
            </Button> */}
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:2200032642cseh@gmail.com">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  )
}
