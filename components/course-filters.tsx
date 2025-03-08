import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

export function CourseFilters() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6">
          <Accordion
            type="multiple"
            defaultValue={["categories", "level", "price", "duration"]}
          >
            <AccordionItem value="categories">
              <AccordionTrigger>Categories</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox id={`category-${category}`} />
                      <label
                        htmlFor={`category-${category}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="level">
              <AccordionTrigger>Level</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  {levels.map((level) => (
                    <div key={level} className="flex items-center space-x-2">
                      <Checkbox id={`level-${level}`} />
                      <label
                        htmlFor={`level-${level}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {level}
                      </label>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="price">
              <AccordionTrigger>Price Range</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <Slider defaultValue={[0, 100]} max={200} step={1} />
                  <div className="flex items-center justify-between">
                    <span className="text-sm">$0</span>
                    <span className="text-sm">$200+</span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="duration">
              <AccordionTrigger>Duration</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  {durations.map((duration) => (
                    <div key={duration} className="flex items-center space-x-2">
                      <Checkbox id={`duration-${duration}`} />
                      <label
                        htmlFor={`duration-${duration}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {duration}
                      </label>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <div className="flex gap-2">
        <Button variant="outline" className="w-full">
          Reset
        </Button>
        <Button className="w-full">Apply Filters</Button>
      </div>
    </div>
  );
}

const categories = [
  "Web Development",
  "JavaScript",
  "Design",
  "Backend",
  "Data Science",
  "Mobile Development",
  "DevOps",
  "Blockchain",
  "Cloud Computing",
  "Security",
  "Game Development",
];

const levels = ["Beginner", "Intermediate", "Advanced"];

const durations = [
  "Less than 5 weeks",
  "5-8 weeks",
  "8-12 weeks",
  "More than 12 weeks",
];
