import { BookOpen, Compass, Award, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HowItWorks() {
  const steps = [
    {
      icon: <Compass className="h-10 w-10 text-primary" />,
      title: "Choose Your Course",
      description:
        "Browse through our extensive library of courses and select the ones that match your learning goals.",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: "Learn at Your Pace",
      description:
        "Access course materials anytime, anywhere. Learn at your own pace with our flexible learning platform.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Join Community",
      description:
        "Connect with fellow learners and instructors to enhance your learning experience through discussions.",
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Get Certified",
      description: "Complete your courses and earn industry-recognized certificates to showcase your skills.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 bg-background" id="how-it-works">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our simple four-step process makes learning accessible to everyone
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
          {steps.map((step, index) => (
            <Card key={index} className="flex flex-col items-center text-center h-full">
              <CardHeader>
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted mb-4">{step.icon}</div>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{step.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

