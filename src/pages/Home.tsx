import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MainLayout } from "@/components/layout/main-layout";
import { ProfileCard } from "@/components/profile/profile-card";
import { MentorCard } from "@/components/mentorship/mentor-card";
import { CourseCard } from "@/components/learning/course-card";
import { EventCard } from "@/components/events/event-card";
import { PostCard } from "@/components/blog/post-card";
import {
  ChevronRight,
  GraduationCap,
  Calendar,
  Newspaper,
  Users,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary/20 to-primary/5 py-16 md:py-24">
        <div className="container relative z-10 mx-auto flex flex-col items-center gap-8 px-4 text-center md:px-6">
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Empowering Rural Girls Through
            <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              {" "}
              Community & Skills
            </span>
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            SheLeads connects vulnerable girls with mentors, skills training,
            and a supportive community in sports and arts.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link to="/profiles">Explore Profiles</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/mentorship">Find Mentors</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Profile Showcase</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Create your personal portfolio to showcase your talents,
                  achievements, and creative work.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Mentorship</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Connect with local and international mentors in sports, dance,
                  music, drama, and visual arts.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="rounded-lg bg-primary/10 p-2">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Access free workshops and training modules to develop your
                  skills and knowledge.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Events</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Discover local events, competitions, and facility bookings to
                  participate and showcase your talents.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Newspaper className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Storytelling</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Express yourself through blog posts, podcasts, or video logs
                  and share your journey.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Join a supportive network of peers, mentors, and organizations
                  committed to your growth.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Profiles */}
      <section className="py-12 md:py-16 bg-accent/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                Featured Profiles
              </h2>
              <p className="text-muted-foreground">
                Discover inspiring talents from our community
              </p>
            </div>
            <Button variant="link" asChild className="flex items-center gap-1">
              <Link to="/profiles">
                View all profiles
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ProfileCard
              name="Amina Uwase"
              location="Kigali, Rwanda"
              interests={["Dance", "Poetry", "Photography"]}
              description="Passionate about contemporary dance and visual storytelling. I'm working on combining dance with digital art to express Rwanda's cultural evolution."
              onConnect={() => {}}
              onMessage={() => {}}
            />
            <ProfileCard
              name="Claudine Mukamana"
              location="Musanze, Rwanda"
              interests={["Athletics", "Leadership", "Environmental Science"]}
              description="Long-distance runner with a passion for environmental conservation. I organize weekly clean-up events in my community while training for regional competitions."
              onConnect={() => {}}
              onMessage={() => {}}
            />
            <ProfileCard
              name="Grace Ishimwe"
              location="Huye, Rwanda"
              interests={["Music", "Violin", "Composition"]}
              description="Classical violinist with an interest in blending traditional Rwandan music with classical techniques. Currently composing music inspired by folk tales."
              onConnect={() => {}}
              onMessage={() => {}}
            />
          </div>
        </div>
      </section>

      {/* Featured Mentors */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                Featured Mentors
              </h2>
              <p className="text-muted-foreground">
                Connect with experienced mentors in your field of interest
              </p>
            </div>
            <Button variant="link" asChild className="flex items-center gap-1">
              <Link to="/mentorship">
                View all mentors
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <MentorCard
              name="Elizabeth Johnson"
              profession="Dance Instructor"
              location="Kigali, Rwanda"
              specialties={[
                "Contemporary Dance",
                "Choreography",
                "Dance Therapy",
              ]}
              experience="15+ years of professional dance experience"
              rating={4.8}
              availability="Weekends and Wednesday evenings"
              onBook={() => {}}
              onViewProfile={() => {}}
            />
            <MentorCard
              name="Robert Mugisha"
              profession="Track & Field Coach"
              location="Musanze, Rwanda"
              specialties={[
                "Long Distance Running",
                "Sports Nutrition",
                "Training Programs",
              ]}
              experience="Former Olympic athlete, 10 years coaching experience"
              rating={4.9}
              availability="Monday to Friday afternoons"
              onBook={() => {}}
              onViewProfile={() => {}}
            />
            <MentorCard
              name="Marie Habimana"
              profession="Visual Artist"
              location="Huye, Rwanda"
              specialties={["Painting", "Mixed Media", "Art Education"]}
              experience="Award-winning artist with exhibition experience in East Africa and Europe"
              rating={4.7}
              availability="Tuesdays and Thursdays, online sessions available"
              onBook={() => {}}
              onViewProfile={() => {}}
            />
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-12 md:py-16 bg-accent/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                Featured Workshops
              </h2>
              <p className="text-muted-foreground">
                Develop your skills with our free training modules
              </p>
            </div>
            <Button variant="link" asChild className="flex items-center gap-1">
              <Link to="/learning">
                View all workshops
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <CourseCard
              title="Fundamentals of Modern Dance"
              image="/placeholder.svg"
              description="Learn the core techniques and expressions of contemporary dance styles."
              category="Dance"
              duration="8 weeks"
              enrolled={42}
              onEnroll={() => {}}
            />
            <CourseCard
              title="Digital Storytelling Basics"
              image="/placeholder.svg"
              description="Master the art of telling compelling stories using digital media tools."
              category="Digital Arts"
              duration="6 weeks"
              enrolled={37}
              progress={65}
              onContinue={() => {}}
            />
            <CourseCard
              title="Athletic Training Fundamentals"
              image="/placeholder.svg"
              description="Develop proper techniques for training, nutrition, and recovery for athletic performance."
              category="Sports"
              duration="10 weeks"
              enrolled={53}
              onEnroll={() => {}}
            />
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                Upcoming Events
              </h2>
              <p className="text-muted-foreground">
                Join local competitions, workshops and showcases
              </p>
            </div>
            <Button variant="link" asChild className="flex items-center gap-1">
              <Link to="/events">
                View all events
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <EventCard
              title="Youth Dance Competition"
              image="/placeholder.svg"
              date="June 15, 2023"
              time="2:00 PM - 6:00 PM"
              location="Kigali Convention Center"
              category="Performance"
              attendees={76}
              maxAttendees={100}
              description="Showcase your dance talents and compete for prizes in multiple categories including solo, duet, and group performances."
              onRegister={() => {}}
              onShare={() => {}}
            />
            <EventCard
              title="Sports Training Workshop"
              image="/placeholder.svg"
              date="June 22, 2023"
              time="9:00 AM - 12:00 PM"
              location="Amahoro Stadium"
              category="Workshop"
              attendees={45}
              maxAttendees={50}
              description="Learn training techniques from professional coaches and athletes focusing on proper form, nutrition, and mental preparation."
              onRegister={() => {}}
              onShare={() => {}}
            />
            <EventCard
              title="Art Exhibition Opening"
              image="/placeholder.svg"
              date="July 3, 2023"
              time="5:00 PM - 8:00 PM"
              location="Rwanda Art Museum"
              category="Exhibition"
              attendees={32}
              description="Celebration of young artists featuring paintings, sculptures, and mixed media works exploring themes of identity and heritage."
              onRegister={() => {}}
              onShare={() => {}}
            />
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-12 md:py-16 bg-accent/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                Latest Stories
              </h2>
              <p className="text-muted-foreground">
                Read inspiring stories from our community
              </p>
            </div>
            <Button variant="link" asChild className="flex items-center gap-1">
              <Link to="/blog">
                View all stories
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <PostCard
              title="How Dance Changed My Life"
              image="/placeholder.svg"
              content="Growing up in a small village, I never imagined I would find my voice through movement. Dance has given me confidence, discipline, and a way to express emotions when words fail..."
              author={{
                name: "Claudine N.",
              }}
              date="May 28, 2023"
              category="Personal Story"
              likes={24}
              comments={8}
              onLike={() => {}}
              onComment={() => {}}
              onShare={() => {}}
              onReadMore={() => {}}
            />
            <PostCard
              title="Finding Mentorship in Sports"
              image="/placeholder.svg"
              content="When I first started running, I had no proper shoes or training. Meeting Coach Robert changed everything. He not only taught me proper techniques but also showed me how sports can open doors to education..."
              author={{
                name: "Aline K.",
              }}
              date="May 20, 2023"
              category="Mentorship"
              likes={36}
              comments={12}
              isLiked={true}
              onLike={() => {}}
              onComment={() => {}}
              onShare={() => {}}
              onReadMore={() => {}}
            />
            <PostCard
              title="My Journey as a Young Artist"
              image="/placeholder.svg"
              content="Art has always been my refuge. With limited resources, I started creating from recycled materials. Through SheLeads, I connected with mentors who helped me refine my techniques and find my unique artistic voice..."
              author={{
                name: "Grace M.",
              }}
              date="May 15, 2023"
              category="Arts"
              likes={42}
              comments={15}
              onLike={() => {}}
              onComment={() => {}}
              onShare={() => {}}
              onReadMore={() => {}}
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 rounded-lg bg-primary p-8 text-center text-primary-foreground md:p-12">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Join Our Community Today
            </h2>
            <p className="max-w-[700px] text-primary-foreground/90">
              Connect with mentors, showcase your talents, and access free
              learning resources to develop your skills in sports and the arts.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" variant="secondary">
                Create Profile
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;
