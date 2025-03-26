import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CourseCard } from "@/components/course-card";
import { CourseFilters } from "@/components/course-filters";

export default function CoursesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Courses</h1>
          <p className="text-muted-foreground mt-1">
            Browse our collection of courses to enhance your skills
          </p>
        </div>
        <div className="flex w-full md:w-auto items-center space-x-2">
          <div className="relative w-full md:w-[300px]">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search courses..."
              className="w-full pl-8"
            />
          </div>
          <Button>Search</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6">
        <CourseFilters />
        <div>
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-muted-foreground">
              Showing 12 of 42 courses
            </p>
            <select className="p-2 text-sm border rounded-md">
              <option>Most Popular</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button variant="outline" className="mx-1">
              Previous
            </Button>
            <Button
              variant="outline"
              className="mx-1 bg-primary text-primary-foreground"
            >
              1
            </Button>
            <Button variant="outline" className="mx-1">
              2
            </Button>
            <Button variant="outline" className="mx-1">
              3
            </Button>
            <Button variant="outline" className="mx-1">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

const courses = [
  {
    id: 1,
    title: "Introduction to Web Development",
    description:
      "Learn the fundamentals of web development including HTML, CSS, and JavaScript.",
    image: "/placeholder.svg?height=200&width=300",
    instructor: "Sarah Johnson",
    duration: "8 weeks",
    level: "Beginner",
    price: "$49.99",
    rating: 4.8,
    category: "Web Development",
  },
  {
    id: 2,
    title: "Advanced React Patterns",
    description:
      "Master advanced React concepts and patterns for building scalable applications.",
    image: "/placeholder.svg?height=200&width=300",
    instructor: "Michael Chen",
    duration: "6 weeks",
    level: "Advanced",
    price: "$79.99",
    rating: 4.9,
    category: "JavaScript",
  },
  {
    id: 3,
    title: "UI/UX Design Principles",
    description:
      "Learn essential design principles and tools for creating beautiful user interfaces.",
    image: "/placeholder.svg?height=200&width=300",
    instructor: "Emma Rodriguez",
    duration: "5 weeks",
    level: "Intermediate",
    price: "$59.99",
    rating: 4.7,
    category: "Design",
  },
  {
    id: 4,
    title: "Node.js Backend Development",
    description:
      "Build robust backend systems with Node.js, Express, and MongoDB.",
    image: "/placeholder.svg?height=200&width=300",
    instructor: "David Kim",
    duration: "7 weeks",
    level: "Intermediate",
    price: "$69.99",
    rating: 4.6,
    category: "Backend",
  },
  {
    id: 5,
    title: "Python for Data Science",
    description:
      "Learn Python programming for data analysis and visualization.",
    image: "/placeholder.svg?height=200&width=300",
    instructor: "Lisa Wang",
    duration: "10 weeks",
    level: "Beginner",
    price: "$89.99",
    rating: 4.9,
    category: "Data Science",
  },
];
