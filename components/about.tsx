import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices.",
    },
    {
      icon: Palette,
      title: "Design Focus",
      description: "Creating beautiful, intuitive interfaces that provide excellent user experiences.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and search engine visibility.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate Computer Science student and full-stack developer with hands-on experience in building
            scalable web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Currently pursuing my Bachelor of Technology at KL University, I specialize in full-stack development with
              expertise in Python, Django, React, and Next.js. My journey includes leading development teams and
              architecting solutions that significantly boost user engagement and system performance.
            </p>
            <p className="text-lg leading-relaxed">
              During my internship at Vehinova, I helmed a development team to architect web applications, boosting user
              engagement by 35% and achieving 100% on-time project delivery. I'm passionate about creating efficient,
              scalable solutions and continuously learning new technologies.
            </p>
            <div className="space-y-2">
              <p className="font-semibold">Education:</p>
              <p className="text-muted-foreground">• B.Tech Computer Science - KL University (2022-Present)</p>
              <p className="text-muted-foreground">• Intermediate - NRI Junior College (2020-2022)</p>
              <p className="text-muted-foreground">• Senior Secondary - NRI'S Indian Springs (2019-2020)</p>
            </div>
          </div>

          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
