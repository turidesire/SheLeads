import { MainLayout } from "@/components/layout/main-layout";
import { EventCard } from "@/components/events/event-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Search,
  Filter,
  CalendarIcon,
  MapPin,
  Clock,
  Calendar as CalendarIcon2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const events = [
  {
    id: 1,
    title: "Youth Dance Competition",
    image: "/placeholder.svg",
    date: "June 15, 2023",
    time: "2:00 PM - 6:00 PM",
    location: "Kigali Convention Center",
    category: "Performance",
    attendees: 76,
    maxAttendees: 100,
    description:
      "Showcase your dance talents and compete for prizes in multiple categories including solo, duet, and group performances.",
  },
  {
    id: 2,
    title: "Sports Training Workshop",
    image: "/placeholder.svg",
    date: "June 22, 2023",
    time: "9:00 AM - 12:00 PM",
    location: "Amahoro Stadium",
    category: "Workshop",
    attendees: 45,
    maxAttendees: 50,
    description:
      "Learn training techniques from professional coaches and athletes focusing on proper form, nutrition, and mental preparation.",
  },
  {
    id: 3,
    title: "Art Exhibition Opening",
    image: "/placeholder.svg",
    date: "July 3, 2023",
    time: "5:00 PM - 8:00 PM",
    location: "Rwanda Art Museum",
    category: "Exhibition",
    attendees: 32,
    description:
      "Celebration of young artists featuring paintings, sculptures, and mixed media works exploring themes of identity and heritage.",
  },
  {
    id: 4,
    title: "Music Performance Masterclass",
    image: "/placeholder.svg",
    date: "July 10, 2023",
    time: "10:00 AM - 2:00 PM",
    location: "Kigali Music School",
    category: "Workshop",
    attendees: 28,
    maxAttendees: 30,
    description:
      "Develop your stage presence and performance skills with guidance from professional musicians and performers.",
  },
  {
    id: 5,
    title: "Young Writers Conference",
    image: "/placeholder.svg",
    date: "July 15, 2023",
    time: "9:00 AM - 4:00 PM",
    location: "Public Library, Huye",
    category: "Conference",
    attendees: 52,
    maxAttendees: 80,
    description:
      "A day of workshops, readings, and networking for aspiring young writers. Learn from published authors and improve your craft.",
  },
  {
    id: 6,
    title: "Basketball Tournament",
    image: "/placeholder.svg",
    date: "July 22-23, 2023",
    time: "All day",
    location: "Kimisagara Youth Center",
    category: "Sports",
    attendees: 120,
    maxAttendees: 150,
    description:
      "Two-day basketball tournament for youth teams. Compete for trophies and recognition while building teamwork and sportsmanship.",
  },
];

const categories = [
  { name: "All", count: 18 },
  { name: "Performance", count: 5 },
  { name: "Workshop", count: 6 },
  { name: "Exhibition", count: 3 },
  { name: "Conference", count: 2 },
  { name: "Sports", count: 2 },
];

const locations = [
  { name: "Kigali", count: 10 },
  { name: "Huye", count: 3 },
  { name: "Musanze", count: 2 },
  { name: "Rubavu", count: 2 },
  { name: "Other", count: 1 },
];

const EventsPage = () => {
  const [date, setDate] = useState<Date>();

  return (
    <MainLayout>
      <div className="container py-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Events & Activities
            </h1>
            <p className="text-muted-foreground">
              Discover and participate in local events, competitions, and
              workshops
            </p>
          </div>
          <Button>Submit an Event</Button>
        </div>

        <div className="mt-8">
          <Card className="bg-accent/50">
            <CardContent className="p-6">
              <div className="grid gap-4 md:grid-cols-4">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Event Type
                  </label>
                  <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                    <option value="">All Categories</option>
                    <option value="performance">Performance</option>
                    <option value="workshop">Workshop</option>
                    <option value="exhibition">Exhibition</option>
                    <option value="conference">Conference</option>
                    <option value="sports">Sports</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Location
                  </label>
                  <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                    <option value="">Any Location</option>
                    <option value="kigali">Kigali</option>
                    <option value="huye">Huye</option>
                    <option value="musanze">Musanze</option>
                    <option value="rubavu">Rubavu</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">Date</label>
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
                        {date
                          ? new Date(date).toLocaleDateString()
                          : "Select date"}
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
                  <Button className="w-full">Search Events</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-[240px_1fr]">
          <div className="hidden md:block">
            <Card>
              <CardHeader>
                <CardTitle>Event Categories</CardTitle>
                <CardDescription>Filter by type</CardDescription>
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
                <CardTitle>Locations</CardTitle>
                <CardDescription>Filter by area</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 p-4">
                {locations.map((location) => (
                  <div
                    key={location.name}
                    className="flex cursor-pointer items-center justify-between rounded-md p-2 text-sm hover:bg-accent"
                  >
                    <span>{location.name}</span>
                    <Badge variant="secondary">{location.count}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Date Range</CardTitle>
                <CardDescription>Select dates</CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search events..."
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

            <Tabs defaultValue="upcoming">
              <TabsList>
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="thisweek">This Week</TabsTrigger>
                <TabsTrigger value="thismonth">This Month</TabsTrigger>
                <TabsTrigger value="past">Past Events</TabsTrigger>
              </TabsList>
              <TabsContent value="upcoming" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {events.map((event) => (
                    <EventCard
                      key={event.id}
                      title={event.title}
                      image={event.image}
                      date={event.date}
                      time={event.time}
                      location={event.location}
                      category={event.category}
                      attendees={event.attendees}
                      maxAttendees={event.maxAttendees}
                      description={event.description}
                      onRegister={() => {}}
                      onShare={() => {}}
                    />
                  ))}
                </div>
                <div className="mt-8 flex justify-center">
                  <Button variant="outline">Load More Events</Button>
                </div>
              </TabsContent>

              <TabsContent value="thisweek">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {events.slice(0, 2).map((event) => (
                    <EventCard
                      key={event.id}
                      title={event.title}
                      image={event.image}
                      date={event.date}
                      time={event.time}
                      location={event.location}
                      category={event.category}
                      attendees={event.attendees}
                      maxAttendees={event.maxAttendees}
                      description={event.description}
                      onRegister={() => {}}
                      onShare={() => {}}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="thismonth">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {events.slice(0, 5).map((event) => (
                    <EventCard
                      key={event.id}
                      title={event.title}
                      image={event.image}
                      date={event.date}
                      time={event.time}
                      location={event.location}
                      category={event.category}
                      attendees={event.attendees}
                      maxAttendees={event.maxAttendees}
                      description={event.description}
                      onRegister={() => {}}
                      onShare={() => {}}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="past">
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="rounded-full bg-primary/10 p-4">
                    <CalendarIcon2 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mt-4 text-xl font-medium">
                    Past Events Archive
                  </h3>
                  <p className="mt-2 max-w-md text-muted-foreground">
                    Browse through our archive of past events, performances and
                    activities.
                  </p>
                  <Button className="mt-4">View Archive</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-bold">Featured Facilities</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="Kigali Arts Center"
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Kigali Arts Center</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> Kigali, Rwanda
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Modern performance space with facilities for dance, music, and
                  visual arts. Available for rehearsals, workshops, and
                  exhibitions.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Book Facility
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="Huye Community Center"
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Huye Community Center</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> Huye, Rwanda
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Multipurpose space with rooms for meetings, performances, and
                  sports activities. Affordable rates for community
                  organizations.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Book Facility
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="Musanze Sports Complex"
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Musanze Sports Complex</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> Musanze, Rwanda
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Full sports facility with basketball courts, athletic fields,
                  and training rooms. Available for team practices and
                  competitions.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Book Facility
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="mt-16">
          <Card className="overflow-hidden">
            <div className="md:grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-2xl font-bold">Host Your Own Event</h2>
                <p className="mt-4 text-muted-foreground">
                  Have an idea for a workshop, competition, or showcase? Submit
                  your event to be featured on our platform and reach a wider
                  audience.
                </p>
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5">
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
                    <div className="text-sm">
                      <span className="font-medium">Free Promotion</span>
                      <p className="text-muted-foreground">
                        Reach our community
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5">
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
                    <div className="text-sm">
                      <span className="font-medium">RSVP Management</span>
                      <p className="text-muted-foreground">
                        Track attendance easily
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5">
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
                    <div className="text-sm">
                      <span className="font-medium">Facility Booking</span>
                      <p className="text-muted-foreground">
                        Find suitable venues
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5">
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
                    <div className="text-sm">
                      <span className="font-medium">Support & Resources</span>
                      <p className="text-muted-foreground">
                        Guidance for planning
                      </p>
                    </div>
                  </div>
                </div>
                <Button className="mt-6">Submit Your Event</Button>
              </div>
              <div className="hidden bg-accent md:block"></div>
            </div>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default EventsPage;
