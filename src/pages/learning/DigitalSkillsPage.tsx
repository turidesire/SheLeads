import { MainLayout } from "@/components/layout/main-layout";
import { CourseCard } from "@/components/learning/course-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Search, Computer, Code, Video, Database, Globe } from "lucide-react";

const digitalCourses = [
  {
    id: 1,
    title: "Digital Storytelling Basics",
    image: "/placeholder.svg",
    description:
      "Master the art of telling compelling stories using digital media tools.",
    category: "Digital Media",
    duration: "6 weeks",
    enrolled: 37,
  },
  {
    id: 2,
    title: "Introduction to Web Design",
    image: "/placeholder.svg",
    description:
      "Learn the fundamentals of creating attractive and functional websites.",
    category: "Web Development",
    duration: "8 weeks",
    enrolled: 42,
  },
  {
    id: 3,
    title: "Social Media for Change Makers",
    image: "/placeholder.svg",
    description:
      "Use social platforms to amplify your voice and build community around important causes.",
    category: "Digital Marketing",
    duration: "4 weeks",
    enrolled: 53,
  },
  {
    id: 4,
    title: "Digital Photography Essentials",
    image: "/placeholder.svg",
    description:
      "Learn to take professional-quality photographs with any camera and basic editing techniques.",
    category: "Digital Media",
    duration: "6 weeks",
    enrolled: 38,
    progress: 25,
  },
  {
    id: 5,
    title: "Podcasting 101",
    image: "/placeholder.svg",
    description:
      "Create your own podcast from planning to publishing with minimal equipment.",
    category: "Digital Media",
    duration: "5 weeks",
    enrolled: 29,
  },
  {
    id: 6,
    title: "Basic Coding for Beginners",
    image: "/placeholder.svg",
    description:
      "An introduction to programming concepts with practical examples and projects.",
    category: "Programming",
    duration: "10 weeks",
    enrolled: 34,
  },
];

const digitalSkillsCategories = [
  { name: "All", count: 12 },
  { name: "Digital Media", count: 5 },
  { name: "Web Development", count: 2 },
  { name: "Programming", count: 3 },
  { name: "Digital Marketing", count: 2 },
];

const DigitalSkillsPage = () => {
  return (
    <MainLayout>
      <div className="container py-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Digital Skills
            </h1>
            <p className="text-muted-foreground">
              Build practical technology skills for the future
            </p>
          </div>
          <Button>My Learning Dashboard</Button>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-[240px_1fr]">
          <div className="hidden md:block">
            <Card>
              <CardHeader>
                <CardTitle>Skills Categories</CardTitle>
                <CardDescription>Browse by type</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 p-4">
                {digitalSkillsCategories.map((category) => (
                  <div
                    key={category.name}
                    className="flex cursor-pointer items-center justify-between rounded-md p-2 text-sm hover:bg-accent"
                  >
                    <span>{category.name}</span>
                    <Badge variant="secondary">{category.count}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Skill Level</CardTitle>
                <CardDescription>Filter by experience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 p-4">
                <div className="flex cursor-pointer items-center justify-between rounded-md p-2 text-sm hover:bg-accent">
                  <span>Beginner</span>
                  <Badge variant="secondary">8</Badge>
                </div>
                <div className="flex cursor-pointer items-center justify-between rounded-md p-2 text-sm hover:bg-accent">
                  <span>Intermediate</span>
                  <Badge variant="secondary">3</Badge>
                </div>
                <div className="flex cursor-pointer items-center justify-between rounded-md p-2 text-sm hover:bg-accent">
                  <span>Advanced</span>
                  <Badge variant="secondary">1</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search digital skills courses..."
                  className="w-full pl-8"
                />
              </div>
            </div>

            <div className="flex gap-2 overflow-x-auto py-2 md:hidden">
              {digitalSkillsCategories.map((category) => (
                <Badge key={category.name} variant="outline">
                  {category.name}
                </Badge>
              ))}
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {digitalCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  title={course.title}
                  image={course.image}
                  description={course.description}
                  category={course.category}
                  duration={course.duration}
                  enrolled={course.enrolled}
                  progress={course.progress}
                  onEnroll={() => {}}
                  onContinue={() => {}}
                />
              ))}
            </div>

            <div className="flex justify-center">
              <Button variant="outline">Load More</Button>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="mb-4 text-2xl font-bold">Digital Skills Categories</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <div className="rounded-md bg-primary/10 p-2 mr-2">
                  <Video className="h-4 w-4 text-primary" />
                </div>
                <CardTitle className="text-lg">Digital Media</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Create and edit images, video, audio and other digital content
                  for effective communication.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <div className="rounded-md bg-primary/10 p-2 mr-2">
                  <Code className="h-4 w-4 text-primary" />
                </div>
                <CardTitle className="text-lg">Programming</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Learn coding basics and build simple applications, websites,
                  and interactive projects.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <div className="rounded-md bg-primary/10 p-2 mr-2">
                  <Globe className="h-4 w-4 text-primary" />
                </div>
                <CardTitle className="text-lg">Web Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Design and build websites using modern tools and platforms to
                  showcase your work online.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <div className="rounded-md bg-primary/10 p-2 mr-2">
                  <Database className="h-4 w-4 text-primary" />
                </div>
                <CardTitle className="text-lg">Digital Marketing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Master the fundamentals of online promotion, social media
                  management, and content strategy.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16">
          <Card className="bg-primary text-primary-foreground p-8 md:p-12">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold md:text-3xl">
                  Why Digital Skills Matter
                </h2>
                <p className="mt-4 text-primary-foreground/90">
                  In today's world, digital literacy is essential for education,
                  employment, and self-expression. Learning these skills opens
                  doors to new opportunities and ways to share your creative
                  voice.
                </p>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-primary-foreground/20 p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-3 w-3 text-primary-foreground"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </div>
                    <span className="text-sm">
                      Access to global resources and communities
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-primary-foreground/20 p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-3 w-3 text-primary-foreground"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </div>
                    <span className="text-sm">
                      Career opportunities in growing tech fields
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-primary-foreground/20 p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-3 w-3 text-primary-foreground"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </div>
                    <span className="text-sm">
                      Tools to amplify your creative expression
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-primary-foreground/20 p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-3 w-3 text-primary-foreground"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </div>
                    <span className="text-sm">
                      Ability to create solutions for community needs
                    </span>
                  </li>
                </ul>
                <Button variant="secondary" className="mt-6">
                  Start Learning
                </Button>
              </div>
              <div className="hidden md:flex md:items-center md:justify-center">
                <div className="rounded-lg bg-primary-foreground/10 p-6">
                  <Computer className="h-32 w-32 text-primary-foreground/80" />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default DigitalSkillsPage;
