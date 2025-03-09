"use client";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Thinklance Edutech transformed my learning experience. The courses are well-structured and the instructors are incredibly knowledgeable.",
      name: "Sarah Johnson",
      title: "Software Developer",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      quote:
        "I've completed three courses so far, and each one has directly contributed to my professional growth. The platform is intuitive and engaging.",
      name: "Michael Chen",
      title: "Data Scientist",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      quote:
        "As someone transitioning careers, Thinklance Edutech provided me with the skills and confidence I needed. The career portal was especially helpful.",
      name: "Priya Patel",
      title: "UX Designer",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      quote:
        "The quiz feature helped me retain information better. I appreciate how the platform combines different learning methods to enhance understanding.",
      name: "James Wilson",
      title: "Marketing Specialist",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 bg-background" id="testimonials">
      <style jsx global>{`
        .testimonial-card {
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        .testimonial-card:hover {
          transform: scale(1.03);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }

        .testimonial-quote {
          transition: font-weight 0.3s ease;
        }

        .testimonial-card:hover .testimonial-quote {
          font-weight: 500;
        }

        .testimonial-card:hover .testimonial-name {
          color: var(--primary);
          font-weight: 700;
        }

        .testimonial-card:hover .testimonial-title {
          font-weight: 600;
        }
      `}</style>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Testimonials
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from our community of learners about their experiences
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="h-full testimonial-card overflow-hidden"
            >
              <CardContent className="pt-6">
                <div className="mb-4">
                  <svg
                    className="h-8 w-8 text-primary opacity-50"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <p className="text-lg testimonial-quote">{testimonial.quote}</p>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium testimonial-name">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground testimonial-title">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
