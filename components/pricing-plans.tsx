import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PricingPlans() {
  const plans = [
    {
      name: "Basic",
      price: "$9.99",
      description: "Perfect for beginners",
      features: [
        "Access to 50+ basic courses",
        "Basic quizzes and assessments",
        "Email support",
        "Course completion certificates",
      ],
      popular: false,
      buttonText: "Get Started",
    },
    {
      name: "Pro",
      price: "$19.99",
      description: "For serious learners",
      features: [
        "Access to 200+ courses",
        "Advanced quizzes and assessments",
        "Priority email support",
        "Course completion certificates",
        "Career guidance sessions",
      ],
      popular: true,
      buttonText: "Get Pro",
    },
    {
      name: "Enterprise",
      price: "$49.99",
      description: "For teams and organizations",
      features: [
        "Access to all courses",
        "Custom learning paths",
        "24/7 priority support",
        "Course completion certificates",
        "Career guidance sessions",
        "Custom reporting and analytics",
      ],
      popular: false,
      buttonText: "Contact Sales",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 bg-muted" id="pricing">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Pricing Plans</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the perfect plan for your learning journey
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {plans.map((plan, index) => (
            <Card key={index} className={`flex flex-col ${plan.popular ? "border-primary shadow-lg" : ""}`}>
              {plan.popular && (
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Popular
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <div className="flex items-baseline justify-center mt-4">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className="ml-1 text-muted-foreground">/month</span>
                </div>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

