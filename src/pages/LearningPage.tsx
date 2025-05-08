import { MainLayout } from "@/components/layout/main-layout";
import { CourseCard } from "@/components/learning/course-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Search,
  Filter,
  BookOpen,
  Youtube,
  Video,
  FileText,
  Calendar,
  Presentation,
} from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Fundamentals of Modern Dance",
    image: "/placeholder.svg",
    description:
      "Learn the core techniques and expressions of contemporary dance styles.",
    category: "Dance",
    duration: "8 weeks",
    enrolled: 42,
  },
  {
    id: 2,
    title: "Digital Storytelling Basics",
    image: "/placeholder.svg",
    description:
      "Master the art of telling compelling stories using digital media tools.",
    category: "Digital Arts",
    duration: "6 weeks",
    enrolled: 37,
    progress: 65,
  },
  {
    id: 3,
    title: "Athletic Training Fundamentals",
    image: "/placeholder.svg",
    description:
      "Develop proper techniques for training, nutrition, and recovery for athletic performance.",
    category: "Sports",
    duration: "10 weeks",
    enrolled: 53,
  },
  {
    id: 4,
    title: "Introduction to Music Theory",
    image: "/placeholder.svg",
    description:
      "Understand the language of music through practical lessons on rhythm, melody, and harmony.",
    category: "Music",
    duration: "12 weeks",
    enrolled: 29,
  },
  {
    id: 5,
    title: "Visual Arts Portfolio Building",
    image: "/placeholder.svg",
    description:
      "Create a professional art portfolio that showcases your unique style and technical skills.",
    category: "Visual Arts",
    duration: "8 weeks",
    enrolled: 24,
    progress: 80,
  },
  {
    id: 6,
    title: "Theater Performance Techniques",
    image: "/placeholder.svg",
    description:
      "Master the foundations of stage performance including voice projection, movement, and character development.",
    category: "Theatre",
    duration: "10 weeks",
    enrolled: 31,
  },
  {
    id: 7,
    title: "Basketball Skills Development",
    image: "/placeholder.svg",
    description:
      "Improve your basketball fundamentals including dribbling, shooting, and defensive strategies.",
    category: "Sports",
    duration: "6 weeks",
    enrolled: 47,
    progress: 35,
  },
  {
    id: 8,
    title: "Creative Writing Workshop",
    image: "/placeholder.svg",
    description:
      "Develop your storytelling abilities through structured writing exercises and constructive feedback.",
    category: "Writing",
    duration: "8 weeks",
    enrolled: 22,
  },
  {
    id: 9,
    title: "Digital Photography Essentials",
    image: "/placeholder.svg",
    description:
      "Learn to take professional-quality photographs with any camera and basic editing techniques.",
    category: "Digital Arts",
    duration: "6 weeks",
    enrolled: 38,
  },
];

const categories = [
  { name: "All", count: 24 },
  { name: "Dance", count: 4 },
  { name: "Music", count: 5 },
  { name: "Visual Arts", count: 3 },
  { name: "Sports", count: 6 },
  { name: "Theatre", count: 2 },
  { name: "Digital Skills", count: 4 },
];

const resources = [
  {
    id: 1,
    title: "Dance Warm-Up Routine",
    type: "Video",
    duration: "15 min",
    icon: <Video className="h-4 w-4" />,
  },
  {
    id: 2,
    title: "Sports Nutrition Guide",
    type: "Document",
    pages: "24 pages",
    icon: <FileText className="h-4 w-4" />,
  },
  {
    id: 3,
    title: "Music Theory Cheatsheet",
    type: "Document",
    pages: "10 pages",
    icon: <FileText className="h-4 w-4" />,
  },
  {
    id: 4,
    title: "Basic Acting Techniques",
    type: "Video",
    duration: "25 min",
    icon: <Video className="h-4 w-4" />,
  },
  {
    id: 5,
    title: "Visual Arts Workshop",
    type: "Event",
    date: "Jun 15, 2023",
    icon: <Calendar className="h-4 w-4" />,
  },
];

const LearningPage = () => {
  return (
    <MainLayout>
      <div className="container py-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Learning Center
            </h1>
            <p className="text-muted-foreground">
              Develop your skills with free workshops and training modules
            </p>
          </div>
          <Button>My Learning Dashboard</Button>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-[240px_1fr]">
          <div className="hidden md:block">
            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
                <CardDescription>Browse by subject</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 p-4">
                {categories.map((category) => (
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
                <CardTitle>Quick Resources</CardTitle>
                <CardDescription>Useful materials</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 p-4">
                {resources.map((resource) => (
                  <div
                    key={resource.id}
                    className="flex cursor-pointer items-center gap-3 rounded-md p-2 text-sm hover:bg-accent"
                  >
                    <div className="rounded-md bg-primary/10 p-2">
                      {resource.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{resource.title}</div>
                      <div className="text-xs text-muted-foreground">
                        {resource.type} •{" "}
                        {resource.duration || resource.pages || resource.date}
                      </div>
                    </div>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full mt-2">
                  View All Resources
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search workshops and courses..."
                  className="w-full pl-8"
                />
              </div>
              <Button variant="outline" size="icon" className="md:hidden">
                <Filter className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex gap-2 overflow-x-auto py-2 md:hidden">
              {categories.map((category) => (
                <Badge key={category.name} variant="outline">
                  {category.name}
                </Badge>
              ))}
            </div>

            <Tabs defaultValue="all">
              <TabsList>
                <TabsTrigger value="all">All Courses</TabsTrigger>
                <TabsTrigger value="enrolled">My Courses</TabsTrigger>
                <TabsTrigger value="popular">Most Popular</TabsTrigger>
                <TabsTrigger value="new">Newest</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {courses.map((course) => (
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
              </TabsContent>

              <TabsContent value="enrolled" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {courses
                    .filter((course) => course.progress !== undefined)
                    .map((course) => (
                      <CourseCard
                        key={course.id}
                        title={course.title}
                        image={course.image}
                        description={course.description}
                        category={course.category}
                        duration={course.duration}
                        enrolled={course.enrolled}
                        progress={course.progress}
                        onContinue={() => {}}
                      />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="popular" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {courses
                    .sort((a, b) => b.enrolled - a.enrolled)
                    .slice(0, 6)
                    .map((course) => (
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
              </TabsContent>

              <TabsContent value="new" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {courses.slice(0, 3).map((course) => (
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
              </TabsContent>
            </Tabs>

            <div className="flex justify-center">
              <Button variant="outline">Load More</Button>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="mb-4 text-2xl font-bold">Learning Formats</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <div className="rounded-md bg-primary/10 p-2 mr-2">
                  <Video className="h-4 w-4 text-primary" />
                </div>
                <CardTitle className="text-lg">Video Lessons</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Watch expert tutorials and demonstrations to learn at your own
                  pace.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <div className="rounded-md bg-primary/10 p-2 mr-2">
                  <BookOpen className="h-4 w-4 text-primary" />
                </div>
                <CardTitle className="text-lg">Reading Materials</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Access comprehensive guides, articles, and reference
                  materials.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <div className="rounded-md bg-primary/10 p-2 mr-2">
                  <Presentation className="h-4 w-4 text-primary" />
                </div>
                <CardTitle className="text-lg">Live Workshops</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Join interactive sessions with instructors and fellow
                  learners.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <div className="rounded-md bg-primary/10 p-2 mr-2">
                  <Youtube className="h-4 w-4 text-primary" />
                </div>
                <CardTitle className="text-lg">Practice Exercises</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Apply what you've learned through hands-on challenges and
                  projects.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16">
          <Card className="overflow-hidden">
            <div className="md:grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-2xl font-bold">Become an Instructor</h2>
                <p className="mt-4 text-muted-foreground">
                  Share your expertise and empower others by creating courses
                  and workshops. Help build a stronger community through
                  knowledge sharing.
                </p>
                <div className="mt-8">
                  <h3 className="font-semibold">Requirements:</h3>
                  <ul className="mt-2 space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="rounded-full bg-primary/10 p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="h-3 w-3 text-primary"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      </div>
                      <span>Expertise in your field</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="rounded-full bg-primary/10 p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="h-3 w-3 text-primary"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      </div>
                      <span>Passion for teaching and mentoring</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="rounded-full bg-primary/10 p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="h-3 w-3 text-primary"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      </div>
                      <span>Ability to create engaging content</span>
                    </li>
                  </ul>
                </div>
                <Button className="mt-6">Apply to Teach</Button>
              </div>
              <div className="hidden bg-accent md:block"></div>
            </div>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default LearningPage;
