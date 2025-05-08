import { MainLayout } from "@/components/layout/main-layout";
import { MentorCard } from "@/components/mentorship/mentor-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { format } from "date-fns";
import { CalendarIcon, Search, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const mentors = [
  {
    id: 1,
    name: "Elizabeth Johnson",
    image: "/placeholder.svg",
    profession: "Dance Instructor",
    location: "Kigali, Rwanda",
    specialties: ["Contemporary Dance", "Choreography", "Dance Therapy"],
    experience: "15+ years of professional dance experience",
    rating: 4.8,
    availability: "Weekends and Wednesday evenings",
  },
  {
    id: 2,
    name: "Robert Mugisha",
    image: "/placeholder.svg",
    profession: "Track & Field Coach",
    location: "Musanze, Rwanda",
    specialties: [
      "Long Distance Running",
      "Sports Nutrition",
      "Training Programs",
    ],
    experience: "Former Olympic athlete, 10 years coaching experience",
    rating: 4.9,
    availability: "Monday to Friday afternoons",
  },
  {
    id: 3,
    name: "Marie Habimana",
    image: "/placeholder.svg",
    profession: "Visual Artist",
    location: "Huye, Rwanda",
    specialties: ["Painting", "Mixed Media", "Art Education"],
    experience:
      "Award-winning artist with exhibition experience in East Africa and Europe",
    rating: 4.7,
    availability: "Tuesdays and Thursdays, online sessions available",
  },
  {
    id: 4,
    name: "Jean-Paul Ndayisenga",
    image: "/placeholder.svg",
    profession: "Music Instructor",
    location: "Kigali, Rwanda",
    specialties: ["Piano", "Music Theory", "Composition"],
    experience:
      "Conservatory-trained pianist with 12 years teaching experience",
    rating: 4.6,
    availability: "Weekday evenings and Saturday mornings",
  },
  {
    id: 5,
    name: "Patricia Uwimana",
    image: "/placeholder.svg",
    profession: "Theater Director",
    location: "Huye, Rwanda",
    specialties: ["Acting", "Playwriting", "Directing"],
    experience: "MFA in Theater Arts, directed over 20 productions",
    rating: 4.8,
    availability: "Flexible schedule, prefers afternoons",
  },
  {
    id: 6,
    name: "David Karangwa",
    image: "/placeholder.svg",
    profession: "Basketball Coach",
    location: "Kigali, Rwanda",
    specialties: ["Basketball Skills", "Team Building", "Athletic Development"],
    experience: "Former national team player, 8 years coaching youth teams",
    rating: 4.9,
    availability: "Weekday evenings and weekends",
  },
];

const testimonials = [
  {
    id: 1,
    content:
      "Working with Coach Robert transformed my running technique. His personalized approach helped me improve my speed and endurance. I'm now preparing for my first international competition!",
    author: "Aline K., 16",
    relationship: "Mentee in athletics",
  },
  {
    id: 2,
    content:
      "Miss Elizabeth saw potential in me that I never recognized. Through her dance mentorship, I've gained confidence that extends beyond performance into every aspect of my life.",
    author: "Grace M., 15",
    relationship: "Dance mentee",
  },
  {
    id: 3,
    content:
      "The guidance I've received through the mentorship program has been life-changing. My mentor didn't just teach me artistic techniques, but also how to develop my unique creative voice.",
    author: "Claudine U., 17",
    relationship: "Visual arts mentee",
  },
];

const MentorshipPage = () => {
  const [date, setDate] = useState<Date>();

  return (
    <MainLayout>
      <div className="container py-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Find Your Mentor
            </h1>
            <p className="text-muted-foreground">
              Connect with experienced mentors in sports, arts, and more
            </p>
          </div>
          <Button>Become a Mentor</Button>
        </div>

        <div className="mt-8">
          <Card className="bg-accent/50">
            <CardContent className="p-6">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Expertise
                  </label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dance">Dance</SelectItem>
                      <SelectItem value="music">Music</SelectItem>
                      <SelectItem value="sports">Sports</SelectItem>
                      <SelectItem value="visual-arts">Visual Arts</SelectItem>
                      <SelectItem value="theatre">Theatre</SelectItem>
                      <SelectItem value="creative-writing">
                        Creative Writing
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Location
                  </label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kigali">Kigali</SelectItem>
                      <SelectItem value="eastern">Eastern Province</SelectItem>
                      <SelectItem value="western">Western Province</SelectItem>
                      <SelectItem value="northern">
                        Northern Province
                      </SelectItem>
                      <SelectItem value="southern">
                        Southern Province
                      </SelectItem>
                      <SelectItem value="online">Online Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Availability
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground",
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="flex items-end">
                  <Button className="w-full">Search Mentors</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Tabs defaultValue="all">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <TabsList>
                <TabsTrigger value="all">All Mentors</TabsTrigger>
                <TabsTrigger value="sports">Sports</TabsTrigger>
                <TabsTrigger value="arts">Arts</TabsTrigger>
                <TabsTrigger value="tech">Digital Skills</TabsTrigger>
              </TabsList>

              <div className="relative w-full md:w-auto">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search mentors..."
                  className="w-full pl-8 md:w-[200px] lg:w-[300px]"
                />
              </div>
            </div>

            <TabsContent value="all" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {mentors.map((mentor) => (
                  <MentorCard
                    key={mentor.id}
                    name={mentor.name}
                    image={mentor.image}
                    profession={mentor.profession}
                    location={mentor.location}
                    specialties={mentor.specialties}
                    experience={mentor.experience}
                    rating={mentor.rating}
                    availability={mentor.availability}
                    onBook={() => {}}
                    onViewProfile={() => {}}
                  />
                ))}
              </div>

              <div className="mt-8 flex justify-center">
                <Button variant="outline">Load More</Button>
              </div>
            </TabsContent>

            <TabsContent value="sports" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {mentors
                  .filter((mentor) =>
                    mentor.specialties.some((s) =>
                      [
                        "Running",
                        "Basketball",
                        "Sports",
                        "Athletic",
                        "Training",
                      ].some((sport) => s.includes(sport)),
                    ),
                  )
                  .map((mentor) => (
                    <MentorCard
                      key={mentor.id}
                      name={mentor.name}
                      image={mentor.image}
                      profession={mentor.profession}
                      location={mentor.location}
                      specialties={mentor.specialties}
                      experience={mentor.experience}
                      rating={mentor.rating}
                      availability={mentor.availability}
                      onBook={() => {}}
                      onViewProfile={() => {}}
                    />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="arts" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {mentors
                  .filter((mentor) =>
                    mentor.specialties.some((s) =>
                      [
                        "Dance",
                        "Music",
                        "Art",
                        "Theater",
                        "Paint",
                        "Acting",
                      ].some((art) => s.includes(art)),
                    ),
                  )
                  .map((mentor) => (
                    <MentorCard
                      key={mentor.id}
                      name={mentor.name}
                      image={mentor.image}
                      profession={mentor.profession}
                      location={mentor.location}
                      specialties={mentor.specialties}
                      experience={mentor.experience}
                      rating={mentor.rating}
                      availability={mentor.availability}
                      onBook={() => {}}
                      onViewProfile={() => {}}
                    />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="tech" className="mt-6">
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="rounded-full bg-primary/10 p-4">
                  <ChevronDown className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mt-4 text-xl font-medium">Coming Soon</h3>
                <p className="mt-2 max-w-md text-muted-foreground">
                  Digital skills mentors will be available soon. Sign up to be
                  notified when this feature launches.
                </p>
                <Button className="mt-4">Get Notified</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-bold">How Mentorship Works</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">1</span>
                </div>
                <CardTitle className="mt-4">Find Your Mentor</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Browse through our diverse community of experienced mentors
                  specializing in various fields. Use filters to find the
                  perfect match for your interests.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">2</span>
                </div>
                <CardTitle className="mt-4">Connect & Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Reach out to mentors and schedule your first meeting. Sessions
                  can be in-person or virtual, depending on your location and
                  preferences.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">3</span>
                </div>
                <CardTitle className="mt-4">Learn & Grow</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Develop your skills through personalized guidance, receive
                  feedback on your work, and track your progress as you grow in
                  your chosen field.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-bold">Success Stories</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id}>
                <CardContent className="pt-6">
                  <div className="mb-4 flex">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5 text-yellow-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                  </div>
                  <p className="mb-4 italic text-muted-foreground">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.relationship}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 md:p-12">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h2 className="text-2xl font-bold md:text-3xl">
                    Become a Mentor
                  </h2>
                  <p className="mt-4 text-primary-foreground/90">
                    Share your expertise and make a difference in a young
                    person's life. Join our mentorship program to help guide the
                    next generation of talent.
                  </p>
                  <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                    <Button variant="secondary">Apply Now</Button>
                    <Button
                      variant="outline"
                      className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
                <div className="hidden rounded-lg bg-primary-foreground/10 md:block"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default MentorshipPage;
