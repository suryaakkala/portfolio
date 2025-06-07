import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Award } from "lucide-react"

export function Certifications() {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "May 2024 - May 2027",
      verificationUrl: "https://cp.certmetrics.com/amazon/en/public/verify/credential/8bbd9f13f38d45ce9c0d907826efb594",
      status: "Active",
    },
    {
      title: "Microsoft Certified: Azure AI Fundamentals",
      issuer: "Microsoft",
      date: "Jun 2024",
      verificationUrl:
        "https://learn.microsoft.com/api/credentials/share/en-us/AKKALASURYAVENKATADEEPAK-8390/88A21C87B71AEB03?sharingId=26719F7FC28C2B21",
      status: "Active",
    },
    {
      title: "EX183 Red Hat Certified Enterprise Application Developer",
      issuer: "Red Hat",
      date: "Sep 2024 - Sep 2027",
      verificationUrl: "https://rhtapps.redhat.com/verify?certId=240-193-706",
      status: "Active",
    },
    {
      title: "Automation Anywhere Certified Essentials RPA Professional 2023",
      issuer: "Automation Anywhere",
      date: "Mar 2024",
      verificationUrl: "https://certificates.automationanywhere.com/4212c819-8ebe-4a53-a08b-857820931bcc",
      status: "Active",
    },
    {
      title: "Salesforce Certified AI Associate",
      issuer: "Salesforce",
      date: "Oct 2024",
      verificationUrl: "https://www.salesforce.com/trailblazer/suryaakkala",
      status: "Active",
    },
  ]

  return (
    <section id="certifications" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications that validate my expertise in cloud computing, AI, and enterprise development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg leading-tight">{cert.title}</CardTitle>
                      <CardDescription className="font-medium">{cert.issuer}</CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    {cert.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">{cert.date}</p>
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Verify Certificate
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
