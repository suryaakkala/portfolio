import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin } from "lucide-react"

export function Experience() {
  const experience = {
    company: "Vehinova",
    position: "Full Stack Developer",
    location: "Kuchipudi, Andhra Pradesh, India",
    period: "May 2024 - Jun 2024",
    type: "Internship",
    achievements: [
      "Helmed a development team to architect web applications with Python and Django, boosting user engagement by 35%",
      "Amplified cross-device accessibility by 40% through strategic application of responsive design principles",
      "Orchestrated cross-functional collaboration, achieving 100% on-time project delivery and elevating code quality by 30%",
    ],
  }

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and key achievements in software development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <CardTitle className="text-xl">{experience.position}</CardTitle>
                  <CardDescription className="text-lg font-medium text-primary">{experience.company}</CardDescription>
                </div>
                <Badge variant="secondary" className="w-fit">
                  {experience.type}
                </Badge>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <CalendarDays className="h-4 w-4" />
                  {experience.period}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {experience.location}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {experience.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
