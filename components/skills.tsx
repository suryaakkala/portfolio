import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C/C++", "Java", "Python", "JavaScript", "SQL"],
    },
    {
      title: "Frontend Development",
      skills: ["React", "Vue.js", "Next.js", "HTML5", "CSS3", "Responsive Design", "Bootstrap"],
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Django", "Spring Boot", "REST APIs", "Database Management"],
    },
    {
      title: "DevOps & Cloud",
      skills: ["AWS", "Linux", "Docker", "Git", "Jenkins", "CI/CD", "Azure"],
    },
    {
      title: "Certifications",
      skills: ["AWS Cloud Practitioner", "Azure AI Fundamentals", "Salesforce AI Associate", "Red Hat Certified", "Automation Anywhere RPA"],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies, tools, and certifications I've mastered to deliver exceptional software
            solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-center">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
