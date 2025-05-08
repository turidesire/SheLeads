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
import { Search, Trophy, UserPlus, Heart, Dumbbell } from "lucide-react";

const sportsModules = [
  {
    id: 1,
    title: "Athletic Training Fundamentals",
    image: "/placeholder.svg",
    description:
      "Develop proper techniques for training, nutrition, and recovery for athletic performance.",
    category: "Athletics",
    duration: "10 weeks",
    enrolled: 53,
  },
  {
    id: 2,
    title: "Basketball Skills Development",
    image: "/placeholder.svg",
    description:
      "Improve your basketball fundamentals including dribbling, shooting, and defensive strategies.",
    category: "Basketball",
    duration: "6 weeks",
    enrolled: 47,
    progress: 35,
  },
  {
    id: 3,
    title: "Volleyball Basics",
    image: "/placeholder.svg",
    description:
      "Learn essential volleyball skills including serving, setting, and teamwork fundamentals.",
    category: "Volleyball",
    duration: "8 weeks",
    enrolled: 31,
  },
  {
    id: 4,
    title: "Sports Nutrition for Young Athletes",
    image: "/placeholder.svg",
    description:
      "Understand how to fuel your body properly for training and competition with accessible nutrition.",
    category: "Nutrition",
    duration: "4 weeks",
    enrolled: 42,
  },
  {
    id: 5,
    title: "Running Techniques and Training",
    image: "/placeholder.svg",
    description:
      "Master proper running form, build endurance, and prepare for competitions of various distances.",
    category: "Athletics",
    duration: "8 weeks",
    enrolled: 38,
  },
  {
    id: 6,
    title: "Football Skills Workshop",
    image: "/placeholder.svg",
    description:
      "Develop essential football (soccer) skills including ball control, passing, and game strategy.",
    category: "Football",
    duration: "10 weeks",
    enrolled: 56,
  },
];

const sportsCategories = [
  { name: "All", count: 15 },
  { name: "Athletics", count: 4 },
  { name: "Basketball", count: 2 },
  { name: "Football", count: 3 },
  { name: "Volleyball", count: 2 },
  { name: "Nutrition", count: 2 },
  { name: "Mental Training", count: 2 },
];

const SportsPage = () => {
  return (
    <MainLayout>
      <div className="container py-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Sports Training
            </h1>
            <p className="text-muted-foreground">
              Develop your athletic skills with professional guidance
            </p>
          </div>
          <Button>My Learning Dashboard</Button>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-[240px_1fr]">
          <div className="hidden md:block">
            <Card>
              <CardHeader>
                <CardTitle>Sports Categories</CardTitle>
                <CardDescription>Browse by sport</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 p-4">
                {sportsCategories.map((category) => (
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
                  <Badge variant="secondary">10</Badge>
                </div>
                <div className="flex cursor-pointer items-center justify-between rounded-md p-2 text-sm hover:bg-accent">
                  <span>Intermediate</span>
                  <Badge variant="secondary">4</Badge>
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
                  placeholder="Search sports training modules..."
                  className="w-full pl-8"
                />
              </div>
            </div>

            <div className="flex gap-2 overflow-x-auto py-2 md:hidden">
              {sportsCategories.map((category) => (
                <Badge key={category.name} variant="outline">
                  {category.name}
                </Badge>
              ))}
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sportsModules.map((module) => (
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
          <h2 className="mb-4 text-2xl font-bold">Training Components</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <div className="rounded-md bg-primary/10 p-2 mr-2">
                  <Dumbbell className="h-4 w-4 text-primary" />
                </div>
                <CardTitle className="text-lg">Physical Training</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Develop proper form, strength, endurance, and sport-specific
                  skills through structured exercises.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <div className="rounded-md bg-primary/10 p-2 mr-2">
                  <Heart className="h-4 w-4 text-primary" />
                </div>
                <CardTitle className="text-lg">Nutrition & Recovery</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Learn how to fuel your body properly and implement rest
                  strategies for optimal performance.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <div className="rounded-md bg-primary/10 p-2 mr-2">
                  <UserPlus className="h-4 w-4 text-primary" />
                </div>
                <CardTitle className="text-lg">Team Dynamics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Develop communication, leadership, and collaboration skills
                  essential for team sports.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <div className="rounded-md bg-primary/10 p-2 mr-2">
                  <Trophy className="h-4 w-4 text-primary" />
                </div>
                <CardTitle className="text-lg">Mental Preparation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Build focus, resilience, confidence, and other mental skills
                  critical for competitive performance.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16">
          <Card className="overflow-hidden">
            <div className="md:grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-2xl font-bold">Meet Our Coaches</h2>
                <p className="mt-4 text-muted-foreground">
                  Learn from experienced athletic trainers, former professional
                  athletes, and sports specialists who are committed to
                  developing the next generation of talent.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-muted">
                      <img
                        src="/placeholder.svg"
                        alt="Coach Robert"
                        className="h-full w-full rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">Robert Mugisha</h3>
                      <p className="text-sm text-muted-foreground">
                        Former Olympic athlete, specializes in track & field
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-muted">
                      <img
                        src="/placeholder.svg"
                        alt="Coach David"
                        className="h-full w-full rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">David Karangwa</h3>
                      <p className="text-sm text-muted-foreground">
                        Former national team player, basketball specialist
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-muted">
                      <img
                        src="/placeholder.svg"
                        alt="Coach Diane"
                        className="h-full w-full rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">Diane Mukamana</h3>
                      <p className="text-sm text-muted-foreground">
                        Certified nutritionist specializing in youth sports
                      </p>
                    </div>
                  </div>
                </div>
                <Button className="mt-6">View All Coaches</Button>
              </div>
              <div className="hidden bg-accent md:block"></div>
            </div>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default SportsPage;
