import { MainLayout } from "@/components/layout/main-layout";
import { ProfileCard } from "@/components/profile/profile-card";
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
  Image,
  Video,
  Music,
  FileText,
  Plus,
} from "lucide-react";

const profiles = [
  {
    id: 1,
    name: "Amina Uwase",
    location: "Kigali, Rwanda",
    interests: ["Dance", "Poetry", "Photography"],
    description:
      "Passionate about contemporary dance and visual storytelling. I'm working on combining dance with digital art to express Rwanda's cultural evolution.",
  },
  {
    id: 2,
    name: "Claudine Mukamana",
    location: "Musanze, Rwanda",
    interests: ["Athletics", "Leadership", "Environmental Science"],
    description:
      "Long-distance runner with a passion for environmental conservation. I organize weekly clean-up events in my community while training for regional competitions.",
  },
  {
    id: 3,
    name: "Grace Ishimwe",
    location: "Huye, Rwanda",
    interests: ["Music", "Violin", "Composition"],
    description:
      "Classical violinist with an interest in blending traditional Rwandan music with classical techniques. Currently composing music inspired by folk tales.",
  },
  {
    id: 4,
    name: "Diane Mugwaneza",
    location: "Rubavu, Rwanda",
    interests: ["Basketball", "Coaching", "Youth Development"],
    description:
      "Basketball player and youth coach focused on using sports as a tool for building confidence and teamwork among young girls in rural communities.",
  },
  {
    id: 5,
    name: "Françoise Niyonzima",
    location: "Nyagatare, Rwanda",
    interests: ["Painting", "Sculpture", "Art Education"],
    description:
      "Visual artist working with recycled materials to create installations that highlight environmental challenges. I also teach art workshops for children.",
  },
  {
    id: 6,
    name: "Josiane Umutoni",
    location: "Karongi, Rwanda",
    interests: ["Theatre", "Screenwriting", "Digital Media"],
    description:
      "Playwright and theatre performer exploring traditional storytelling through modern theatrical techniques. Currently developing a series of short plays focused on women's stories.",
  },
];

const categories = [
  { name: "All", count: 60 },
  { name: "Dance", count: 12 },
  { name: "Music", count: 15 },
  { name: "Visual Arts", count: 8 },
  { name: "Sports", count: 18 },
  { name: "Theatre", count: 7 },
];

const ProfilePage = () => {
  return (
    <MainLayout>
      <div className="container py-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Profiles & Portfolios
            </h1>
            <p className="text-muted-foreground">
              Discover talented individuals and showcase your own work
            </p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Create Your Profile
          </Button>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-[240px_1fr]">
          <div className="hidden md:block">
            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
                <CardDescription>Filter by talent category</CardDescription>
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
                <CardTitle>Location</CardTitle>
                <CardDescription>Filter by region</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 p-4">
                <div className="flex cursor-pointer items-center justify-between rounded-md p-2 text-sm hover:bg-accent">
                  <span>Kigali</span>
                  <Badge variant="secondary">24</Badge>
                </div>
                <div className="flex cursor-pointer items-center justify-between rounded-md p-2 text-sm hover:bg-accent">
                  <span>Eastern Province</span>
                  <Badge variant="secondary">12</Badge>
                </div>
                <div className="flex cursor-pointer items-center justify-between rounded-md p-2 text-sm hover:bg-accent">
                  <span>Western Province</span>
                  <Badge variant="secondary">9</Badge>
                </div>
                <div className="flex cursor-pointer items-center justify-between rounded-md p-2 text-sm hover:bg-accent">
                  <span>Northern Province</span>
                  <Badge variant="secondary">8</Badge>
                </div>
                <div className="flex cursor-pointer items-center justify-between rounded-md p-2 text-sm hover:bg-accent">
                  <span>Southern Province</span>
                  <Badge variant="secondary">7</Badge>
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
                  placeholder="Search profiles..."
                  className="w-full pl-8"
                />
              </div>
              <Button variant="outline" size="icon" className="md:hidden">
                <Filter className="h-4 w-4" />
              </Button>
              <div className="hidden md:block">
                <Tabs defaultValue="all" className="w-[300px]">
                  <TabsList>
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="photos">Photos</TabsTrigger>
                    <TabsTrigger value="videos">Videos</TabsTrigger>
                    <TabsTrigger value="writing">Writing</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>

            <div className="flex gap-2 overflow-x-auto py-2 md:hidden">
              {categories.map((category) => (
                <Badge key={category.name} variant="outline">
                  {category.name}
                </Badge>
              ))}
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {profiles.map((profile) => (
                <ProfileCard
                  key={profile.id}
                  name={profile.name}
                  location={profile.location}
                  interests={profile.interests}
                  description={profile.description}
                  onConnect={() => {}}
                  onMessage={() => {}}
                />
              ))}
            </div>

            <div className="flex justify-center">
              <Button variant="outline">Load More</Button>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="mb-4 text-2xl font-bold">Featured Portfolios</h2>
          <Tabs defaultValue="images" className="w-full">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="images" className="flex items-center gap-2">
                <Image className="h-4 w-4" />
                Images
              </TabsTrigger>
              <TabsTrigger value="videos" className="flex items-center gap-2">
                <Video className="h-4 w-4" />
                Videos
              </TabsTrigger>
              <TabsTrigger value="audio" className="flex items-center gap-2">
                <Music className="h-4 w-4" />
                Audio
              </TabsTrigger>
              <TabsTrigger value="writing" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Writing
              </TabsTrigger>
            </TabsList>
            <TabsContent value="images" className="mt-6">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {Array(8)
                  .fill(0)
                  .map((_, i) => (
                    <div
                      key={i}
                      className="group relative aspect-square cursor-pointer overflow-hidden rounded-md"
                    >
                      <img
                        src="/placeholder.svg"
                        alt="Portfolio image"
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
                        <div>
                          <h3 className="font-medium text-white">
                            Artwork Title
                          </h3>
                          <p className="text-xs text-white/80">
                            by Artist Name
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="videos">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {Array(3)
                  .fill(0)
                  .map((_, i) => (
                    <div
                      key={i}
                      className="group relative aspect-video cursor-pointer overflow-hidden rounded-md"
                    >
                      <img
                        src="/placeholder.svg"
                        alt="Video thumbnail"
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-6 w-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-3">
                        <div>
                          <h3 className="font-medium text-white">
                            Performance Title
                          </h3>
                          <p className="text-xs text-white/80">
                            by Performer Name
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="audio">
              <div className="grid gap-4">
                {Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <div
                      key={i}
                      className="flex cursor-pointer items-center gap-4 rounded-md border p-4 hover:bg-accent"
                    >
                      <div className="h-12 w-12 shrink-0 rounded-md bg-primary/10">
                        <Music className="h-12 w-12 p-3 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">Music Title</h3>
                        <p className="text-sm text-muted-foreground">
                          by Musician Name
                        </p>
                      </div>
                      <div className="text-sm text-muted-foreground">3:45</div>
                      <Button variant="ghost" size="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347c-.75.413-1.667-.13-1.667-.986V5.653z"
                          />
                        </svg>
                      </Button>
                    </div>
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="writing">
              <div className="grid gap-4 md:grid-cols-2">
                {Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <Card key={i} className="cursor-pointer hover:bg-accent/50">
                      <CardHeader>
                        <CardTitle>Creative Writing Title</CardTitle>
                        <CardDescription>by Author Name</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="line-clamp-3 text-sm text-muted-foreground">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Phasellus ac nulla vel augue faucibus lacinia
                          eget eget urna. Nulla facilisi. Fusce malesuada magna
                          at elit sollicitudin, nec condimentum ante tempus...
                        </p>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProfilePage;
