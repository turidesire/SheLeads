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
import { Search, Music, Palette, Theater, Pen } from "lucide-react";

const artsModules = [
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
    title: "Introduction to Music Theory",
    image: "/placeholder.svg",
    description:
      "Understand the language of music through practical lessons on rhythm, melody, and harmony.",
    category: "Music",
    duration: "12 weeks",
    enrolled: 29,
  },
  {
    id: 3,
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
    id: 4,
    title: "Theater Performance Techniques",
    image: "/placeholder.svg",
    description:
      "Master the foundations of stage performance including voice projection, movement, and character development.",
    category: "Theatre",
    duration: "10 weeks",
    enrolled: 31,
  },
  {
    id: 5,
    title: "Creative Writing Workshop",
    image: "/placeholder.svg",
    description:
      "Develop your storytelling abilities through structured writing exercises and constructive feedback.",
    category: "Writing",
    duration: "8 weeks",
    enrolled: 22,
  },
  {
    id: 6,
    title: "Traditional Dance Styles",
    image: "/placeholder.svg",
    description:
      "Explore the rich cultural heritage of traditional dance forms from East Africa and beyond.",
    category: "Dance",
    duration: "6 weeks",
    enrolled: 36,
  },
];

const artsCategories = [
  { name: "All", count: 18 },
  { name: "Dance", count: 4 },
  { name: "Music", count: 5 },
  { name: "Visual Arts", count: 3 },
  { name: "Theatre", count: 2 },
  { name: "Writing", count: 4 },
];

const ArtsPage = () => {
  return (
    <MainLayout>
      <div className="container py-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Arts & Expression
            </h1>
            <p className="text-muted-foreground">
              Develop your creative talents through structured learning
            </p>
          </div>
          <Button>My Learning Dashboard</Button>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-[240px_1fr]">
          <div className="hidden md:block">
            <Card>
              <CardHeader>
                <CardTitle>Arts Categories</CardTitle>
                <CardDescription>Browse by discipline</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 p-4">
                {artsCategories.map((category) => (
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
                <CardTitle>Experience Level</CardTitle>
                <CardDescription>Filter by skill level</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 p-4">
                <div className="flex cursor-pointer items-center justify-between rounded-md p-2 text-sm hover:bg-accent">
                  <span>Beginner</span>
                  <Badge variant="secondary">12</Badge>
                </div>
                <div className="flex cursor-pointer items-center justify-between rounded-md p-2 text-sm hover:bg-accent">
                  <span>Intermediate</span>
                  <Badge variant="secondary">5</Badge>
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
                  placeholder="Search arts workshops and courses..."
                  className="w-full pl-8"
                />
              </div>
            </div>

            <div className="flex gap-2 overflow-x-auto py-2 md:hidden">
              {artsCategories.map((category) => (
                <Badge key={category.name} variant="outline">
                  {category.name}
                </Badge>
              ))}
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {artsModules.map((module) => (
                <CourseCard
                  key={module.id}
                  title={module.title}
                  image={module.image}
                  description={module.description}
                  category={module.category}
                  duration={module.duration}
                  enrolled={module.enrolled}
                  progress={module.progress}
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
          <h2 className="mb-4 text-2xl font-bold">Arts Disciplines</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <div className="rounded-md bg-primary/10 p-2 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-primary"
                  >
                    <path d="m12 20-3-3m0 0 3-3m-3 3h5a4 4 0 0 0 4-4V7" />
                    <path d="M9 13V7a4 4 0 0 1 4-4h.5" />
                  </svg>
                </div>
                <CardTitle className="text-lg">Dance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Express yourself through movement, from contemporary styles to
                  traditional forms with cultural significance.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <div className="rounded-md bg-primary/10 p-2 mr-2">
                  <Music className="h-4 w-4 text-primary" />
                </div>
                <CardTitle className="text-lg">Music</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Develop your musical abilities through instrument instruction,
                  vocal training, and music theory.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <div className="rounded-md bg-primary/10 p-2 mr-2">
                  <Palette className="h-4 w-4 text-primary" />
                </div>
                <CardTitle className="text-lg">Visual Arts</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Create visual works through painting, drawing, sculpture,
                  photography, and mixed media techniques.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <div className="rounded-md bg-primary/10 p-2 mr-2">
                  <Theater className="h-4 w-4 text-primary" />
                </div>
                <CardTitle className="text-lg">Theatre</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Learn acting, directing, playwriting, and technical theatre
                  skills for powerful storytelling.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16">
          <Card className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-8 md:p-12">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold md:text-3xl">
                  The Power of Arts Expression
                </h2>
                <p className="mt-4 text-white/90">
                  Artistic expression is a fundamental human need. Our arts
                  programs help young people discover and develop their creative
                  voices, building confidence and valuable life skills in the
                  process.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-white/20 p-1 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-4 w-4 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Cultural Preservation</h3>
                      <p className="text-sm text-white/80">
                        Honoring traditional arts while exploring contemporary
                        forms
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-white/20 p-1 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-4 w-4 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Community Building</h3>
                      <p className="text-sm text-white/80">
                        Creating together builds lasting bonds and understanding
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-white/20 p-1 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-4 w-4 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Personal Growth</h3>
                      <p className="text-sm text-white/80">
                        Developing discipline, patience, and creative
                        problem-solving
                      </p>
                    </div>
                  </div>
                </div>
                <Button variant="secondary" className="mt-6">
                  Explore Arts Programs
                </Button>
              </div>
              <div className="hidden md:flex md:items-center md:justify-center">
                <div className="rounded-full bg-white/10 p-10">
                  <Pen className="h-32 w-32 text-white/80" />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default ArtsPage;
