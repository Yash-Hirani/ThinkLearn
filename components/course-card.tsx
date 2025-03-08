import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  instructor: string;
  duration: string;
  level: string;
  price: string;
  rating: number;
  category: string;
}

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative h-48 w-full">
        <Image
          src={course.image || "/placeholder.svg"}
          alt={course.title}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader className="p-4">
        <div className="flex justify-between items-start">
          <Badge variant="outline" className="mb-2">
            {course.category}
          </Badge>
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="text-sm font-medium ml-1">{course.rating}</span>
          </div>
        </div>
        <Link href={`/courses/${course.id}`} className="hover:underline">
          <h3 className="font-semibold text-lg leading-tight">
            {course.title}
          </h3>
        </Link>
        <div className="text-sm text-muted-foreground">
          Instructor: {course.instructor}
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0 flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {course.description}
        </p>
        <div className="flex items-center justify-between mt-4 text-sm">
          <div className="flex items-center gap-4">
            <span>{course.duration}</span>
            <span>{course.level}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 border-t flex justify-between items-center">
        <span className="font-bold">{course.price}</span>
        <Button size="sm">Enroll Now</Button>
      </CardFooter>
    </Card>
  );
}
