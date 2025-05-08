import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart,
  Calendar,
  LineChart,
  MapPin,
  TrendingUp,
  Users,
  UserPlus,
  Award,
  BookOpen,
  Clock,
  Download,
} from "lucide-react";

// Mock chart component since we're using Recharts
const AreaChart = () => (
  <div className="h-[300px] w-full rounded-md bg-muted/30 flex items-center justify-center">
    <LineChart className="h-16 w-16 text-muted-foreground/50" />
  </div>
);

const BarChartComponent = () => (
  <div className="h-[300px] w-full rounded-md bg-muted/30 flex items-center justify-center">
    <BarChart className="h-16 w-16 text-muted-foreground/50" />
  </div>
);

// Mock map component
const Map = () => (
  <div className="h-[300px] w-full rounded-md bg-muted/30 flex items-center justify-center">
    <MapPin className="h-16 w-16 text-muted-foreground/50" />
  </div>
);

const DashboardPage = () => {
  return (
    <MainLayout>
      <div className="container py-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Impact Dashboard
            </h1>
            <p className="text-muted-foreground">
              Track participation, engagement, and growth across the platform
            </p>
          </div>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export Data
          </Button>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Total Members
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,853</div>
              <p className="text-xs text-muted-foreground">
                +15% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Active Mentorships
              </CardTitle>
              <UserPlus className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">421</div>
              <p className="text-xs text-muted-foreground">
                +5% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Workshop Enrollments
              </CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,274</div>
              <p className="text-xs text-muted-foreground">
                +23% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Event Registrations
              </CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">632</div>
              <p className="text-xs text-muted-foreground">
                +12% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="demographics">Demographics</TabsTrigger>
              <TabsTrigger value="engagement">Engagement</TabsTrigger>
              <TabsTrigger value="outcomes">Outcomes</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6 space-y-8">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Growth Trend</CardTitle>
                    <CardDescription>
                      Monthly registration growth over time
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AreaChart />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Activity by Category</CardTitle>
                    <CardDescription>
                      Participation across different program areas
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChartComponent />
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Regional Impact</CardTitle>
                  <CardDescription>
                    Distribution of participants across different regions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Map />
                </CardContent>
              </Card>

              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">
                      Top Workshops
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-sm font-medium">
                            Athletic Training Fundamentals
                          </p>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Users className="mr-1 h-3 w-3" />
                            <span>53 enrolled</span>
                          </div>
                        </div>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                          <TrendingUp className="h-4 w-4 text-primary" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-sm font-medium">
                            Fundamentals of Modern Dance
                          </p>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Users className="mr-1 h-3 w-3" />
                            <span>42 enrolled</span>
                          </div>
                        </div>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                          <TrendingUp className="h-4 w-4 text-primary" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-sm font-medium">
                            Digital Photography Essentials
                          </p>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Users className="mr-1 h-3 w-3" />
                            <span>38 enrolled</span>
                          </div>
                        </div>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                          <TrendingUp className="h-4 w-4 text-primary" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">
                      Top Mentors
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Robert Mugisha</p>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Award className="mr-1 h-3 w-3" />
                            <span>4.9 rating</span>
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          24 mentees
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-sm font-medium">
                            Elizabeth Johnson
                          </p>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Award className="mr-1 h-3 w-3" />
                            <span>4.8 rating</span>
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          18 mentees
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-sm font-medium">David Karangwa</p>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Award className="mr-1 h-3 w-3" />
                            <span>4.9 rating</span>
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          15 mentees
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">
                      Upcoming Events
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">
                            Youth Dance Competition
                          </p>
                          <Badge variant="outline">June 15</Badge>
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="mr-1 h-3 w-3" />
                          <span>76/100 registered</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">
                            Sports Training Workshop
                          </p>
                          <Badge variant="outline">June 22</Badge>
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="mr-1 h-3 w-3" />
                          <span>45/50 registered</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">
                            Art Exhibition Opening
                          </p>
                          <Badge variant="outline">July 3</Badge>
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="mr-1 h-3 w-3" />
                          <span>32 registered</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="demographics" className="mt-6 space-y-8">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Age Distribution</CardTitle>
                    <CardDescription>
                      Participant breakdown by age group
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChartComponent />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Geographic Reach</CardTitle>
                    <CardDescription>
                      Distribution across regions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Map />
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Interest Distribution</CardTitle>
                    <CardDescription>
                      Participation by field of interest
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Sports</span>
                          <span className="font-medium">35%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div
                            className="h-2 rounded-full bg-primary"
                            style={{ width: "35%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Dance</span>
                          <span className="font-medium">25%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div
                            className="h-2 rounded-full bg-primary"
                            style={{ width: "25%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Visual Arts</span>
                          <span className="font-medium">20%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div
                            className="h-2 rounded-full bg-primary"
                            style={{ width: "20%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Music</span>
                          <span className="font-medium">15%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div
                            className="h-2 rounded-full bg-primary"
                            style={{ width: "15%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Theatre</span>
                          <span className="font-medium">5%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div
                            className="h-2 rounded-full bg-primary"
                            style={{ width: "5%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Education Level</CardTitle>
                    <CardDescription>
                      Participants by education background
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Primary School</span>
                          <span className="font-medium">15%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div
                            className="h-2 rounded-full bg-primary"
                            style={{ width: "15%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Lower Secondary</span>
                          <span className="font-medium">45%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div
                            className="h-2 rounded-full bg-primary"
                            style={{ width: "45%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Upper Secondary</span>
                          <span className="font-medium">30%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div
                            className="h-2 rounded-full bg-primary"
                            style={{ width: "30%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Vocational Training</span>
                          <span className="font-medium">7%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div
                            className="h-2 rounded-full bg-primary"
                            style={{ width: "7%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Higher Education</span>
                          <span className="font-medium">3%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div
                            className="h-2 rounded-full bg-primary"
                            style={{ width: "3%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="engagement" className="mt-6 space-y-8">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Platform Activity</CardTitle>
                    <CardDescription>
                      Daily active users over time
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AreaChart />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Feature Utilization</CardTitle>
                    <CardDescription>
                      Most used platform features
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChartComponent />
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Content Engagement</CardTitle>
                    <CardDescription>Most viewed content</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <p className="text-sm font-medium">
                          Finding Mentorship in Sports
                        </p>
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Blog Post</span>
                          <span>1,245 views</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">
                          Athletic Training Fundamentals
                        </p>
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Workshop</span>
                          <span>987 views</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">
                          Youth Dance Competition
                        </p>
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Event</span>
                          <span>865 views</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">
                          My Journey as a Young Artist
                        </p>
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Blog Post</span>
                          <span>742 views</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Interaction Metrics</CardTitle>
                    <CardDescription>User engagement data</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="rounded-full bg-primary/10 p-1">
                              <Users className="h-3 w-3 text-primary" />
                            </div>
                            <span className="text-sm font-medium">
                              Avg. Session Time
                            </span>
                          </div>
                          <span className="text-sm">12:24 min</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="rounded-full bg-primary/10 p-1">
                              <Clock className="h-3 w-3 text-primary" />
                            </div>
                            <span className="text-sm font-medium">
                              Pages per Session
                            </span>
                          </div>
                          <span className="text-sm">4.7</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="rounded-full bg-primary/10 p-1">
                              <Award className="h-3 w-3 text-primary" />
                            </div>
                            <span className="text-sm font-medium">
                              Completion Rate
                            </span>
                          </div>
                          <span className="text-sm">68%</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="rounded-full bg-primary/10 p-1">
                              <TrendingUp className="h-3 w-3 text-primary" />
                            </div>
                            <span className="text-sm font-medium">
                              Return Rate
                            </span>
                          </div>
                          <span className="text-sm">72%</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Communication Metrics</CardTitle>
                    <CardDescription>Platform interactions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">
                            Messages Sent
                          </span>
                          <span className="text-sm">3,247</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div
                            className="h-2 rounded-full bg-primary"
                            style={{ width: "85%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">
                            Comments Posted
                          </span>
                          <span className="text-sm">1,892</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div
                            className="h-2 rounded-full bg-primary"
                            style={{ width: "65%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">
                            Likes Given
                          </span>
                          <span className="text-sm">5,643</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div
                            className="h-2 rounded-full bg-primary"
                            style={{ width: "90%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">
                            Content Shared
                          </span>
                          <span className="text-sm">947</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div
                            className="h-2 rounded-full bg-primary"
                            style={{ width: "45%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="outcomes" className="mt-6 space-y-8">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Skills Development</CardTitle>
                    <CardDescription>
                      Self-reported skill improvement over time
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AreaChart />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Impact Metrics</CardTitle>
                    <CardDescription>
                      Key performance indicators by category
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChartComponent />
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Success Stories</CardTitle>
                    <CardDescription>Recent achievements</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-700/20 dark:text-green-400">
                            New
                          </Badge>
                          <h3 className="text-sm font-medium">
                            National Competition Finalists
                          </h3>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Three SheLeads dancers have qualified for the National
                          Youth Dance Competition finals to be held in Kigali
                          next month.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-700/20 dark:text-blue-400">
                            Exhibition
                          </Badge>
                          <h3 className="text-sm font-medium">
                            Art Showcase in Regional Gallery
                          </h3>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Five young artists from our visual arts program have
                          been selected to display their work at the East
                          African Youth Art Exhibition.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 dark:bg-purple-700/20 dark:text-purple-400">
                            Scholarship
                          </Badge>
                          <h3 className="text-sm font-medium">
                            Sports Academy Acceptance
                          </h3>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Two athletes from rural communities have received full
                          scholarships to attend a prestigious sports academy
                          after being discovered through our platform.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 dark:bg-amber-700/20 dark:text-amber-400">
                            Publication
                          </Badge>
                          <h3 className="text-sm font-medium">
                            Poetry Collection Published
                          </h3>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          A collection of poems written by girls from our
                          creative writing workshops has been published with
                          support from a local publisher.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Community Impact</CardTitle>
                    <CardDescription>Long-term outcomes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-col space-y-1.5">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-medium">
                            Skills Retention Rate
                          </h3>
                          <span className="text-sm font-medium text-green-600 dark:text-green-400">
                            87%
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Participants demonstrating skills 6 months after
                          program completion
                        </p>
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-medium">Peer Training</h3>
                          <span className="text-sm font-medium text-green-600 dark:text-green-400">
                            42%
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Participants who have gone on to teach skills to peers
                        </p>
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-medium">
                            Community Initiatives
                          </h3>
                          <span className="text-sm font-medium text-green-600 dark:text-green-400">
                            34
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          New community projects started by platform members
                        </p>
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-medium">
                            Professional Pathways
                          </h3>
                          <span className="text-sm font-medium text-green-600 dark:text-green-400">
                            23%
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Participants pursuing career opportunities in their
                          field
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Sustainability Metrics</CardTitle>
                  <CardDescription>
                    Tracking long-term program viability
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium">Volunteer Hours</h3>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                          <Clock className="h-4 w-4 text-primary" />
                        </div>
                      </div>
                      <div className="text-2xl font-bold">3,452</div>
                      <p className="text-xs text-muted-foreground">
                        +12% from previous quarter
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium">
                          Community Partners
                        </h3>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                          <Users className="h-4 w-4 text-primary" />
                        </div>
                      </div>
                      <div className="text-2xl font-bold">28</div>
                      <p className="text-xs text-muted-foreground">
                        +3 new this quarter
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium">
                          Resource Sharing
                        </h3>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                          <BookOpen className="h-4 w-4 text-primary" />
                        </div>
                      </div>
                      <div className="text-2xl font-bold">85%</div>
                      <p className="text-xs text-muted-foreground">
                        Of resources freely accessible
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium">
                          Knowledge Retention
                        </h3>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                          <Award className="h-4 w-4 text-primary" />
                        </div>
                      </div>
                      <div className="text-2xl font-bold">92%</div>
                      <p className="text-xs text-muted-foreground">
                        Documentation completion rate
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
};

export default DashboardPage;
