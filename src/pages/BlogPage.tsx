import { MainLayout } from "@/components/layout/main-layout";
import { PostCard } from "@/components/blog/post-card";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter, Plus } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "How Dance Changed My Life",
    image: "/placeholder.svg",
    content:
      "Growing up in a small village, I never imagined I would find my voice through movement. Dance has given me confidence, discipline, and a way to express emotions when words fail. Through the SheLeads program, I've been able to train with professional dancers and even perform at community events. The journey hasn't been easy—there were days when my body ached and my spirit was low—but the joy of dancing and the community I've found make it all worthwhile.",
    author: {
      name: "Claudine N.",
      avatar: "/placeholder.svg",
    },
    date: "May 28, 2023",
    category: "Personal Story",
    likes: 24,
    comments: 8,
  },
  {
    id: 2,
    title: "Finding Mentorship in Sports",
    image: "/placeholder.svg",
    content:
      "When I first started running, I had no proper shoes or training. Meeting Coach Robert changed everything. He not only taught me proper techniques but also showed me how sports can open doors to education and personal growth. Now, three years later, I'm training for national competitions and mentoring younger girls in my community. My journey shows the power of one person believing in your potential and the ripple effect it can create.",
    author: {
      name: "Aline K.",
      avatar: "/placeholder.svg",
    },
    date: "May 20, 2023",
    category: "Mentorship",
    likes: 36,
    comments: 12,
    isLiked: true,
  },
  {
    id: 3,
    title: "My Journey as a Young Artist",
    image: "/placeholder.svg",
    content:
      "Art has always been my refuge. With limited resources, I started creating from recycled materials. Through SheLeads, I connected with mentors who helped me refine my techniques and find my unique artistic voice. Last month, my work was featured in a community exhibition, and I sold my first piece! I've learned that creativity thrives even in constraint, and that sharing your perspective through art can touch others in unexpected ways.",
    author: {
      name: "Grace M.",
      avatar: "/placeholder.svg",
    },
    date: "May 15, 2023",
    category: "Arts",
    likes: 42,
    comments: 15,
  },
  {
    id: 4,
    title: "Building Confidence Through Theatre",
    image: "/placeholder.svg",
    content:
      "I used to be so shy I could barely introduce myself in class. When my teacher suggested I join the drama program, I thought she was crazy. But through character work and the supportive environment of our theatre group, I slowly found my voice. Playing different roles helped me understand myself better and gave me courage I never knew I had. Now I'm writing and directing my own plays about girls' experiences in rural communities.",
    author: {
      name: "Josiane U.",
      avatar: "/placeholder.svg",
    },
    date: "May 10, 2023",
    category: "Theatre",
    likes: 29,
    comments: 7,
  },
  {
    id: 5,
    title: "From Student to Teacher: My Music Journey",
    image: "/placeholder.svg",
    content:
      "Learning to play the piano changed the trajectory of my life. Music gave me a way to express complex emotions and connect with others across language barriers. After three years of dedicated practice, I now teach basic piano and music theory to younger children in my community. Seeing their faces light up when they master a simple melody reminds me why music education matters, especially in communities where such opportunities are rare.",
    author: {
      name: "Diane N.",
      avatar: "/placeholder.svg",
    },
    date: "May 5, 2023",
    category: "Music",
    likes: 33,
    comments: 9,
  },
  {
    id: 6,
    title: "Leading a Community Clean-up Initiative",
    image: "/placeholder.svg",
    content:
      "Environmental consciousness has always been important to me. After learning about pollution in our science classes, I decided to take action in my community. With support from SheLeads mentors, I organized a weekly clean-up crew focusing on local waterways. What started with five friends has grown to over thirty regular volunteers and partnerships with local businesses. This experience taught me that leadership isn't about titles—it's about taking initiative and inspiring collective action.",
    author: {
      name: "Françoise K.",
      avatar: "/placeholder.svg",
    },
    date: "April 28, 2023",
    category: "Community",
    likes: 48,
    comments: 14,
  },
];

const categories = [
  { name: "All", count: 28 },
  { name: "Personal Story", count: 10 },
  { name: "Mentorship", count: 5 },
  { name: "Arts", count: 8 },
  { name: "Sports", count: 6 },
  { name: "Community", count: 7 },
  { name: "Music", count: 4 },
  { name: "Theatre", count: 3 },
];

const popularAuthors = [
  {
    name: "Marie H.",
    posts: 12,
    avatar: "/placeholder.svg",
  },
  {
    name: "Claudine N.",
    posts: 8,
    avatar: "/placeholder.svg",
  },
  {
    name: "Aline K.",
    posts: 6,
    avatar: "/placeholder.svg",
  },
  {
    name: "Diane N.",
    posts: 5,
    avatar: "/placeholder.svg",
  },
];

const BlogPage = () => {
  return (
    <MainLayout>
      <div className="container py-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Stories & Experiences
            </h1>
            <p className="text-muted-foreground">
              Read and share personal journeys, creative works, and community
              stories
            </p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Write Your Story
          </Button>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-[240px_1fr]">
          <div className="hidden md:block">
            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
                <CardDescription>Browse by topics</CardDescription>
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
                <CardTitle>Popular Authors</CardTitle>
                <CardDescription>Community voices</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 p-4">
                {popularAuthors.map((author) => (
                  <div
                    key={author.name}
                    className="flex cursor-pointer items-center gap-3 rounded-md p-2 text-sm hover:bg-accent"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={author.avatar} alt={author.name} />
                      <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-medium">{author.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {author.posts} posts
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Writing Resources</CardTitle>
                <CardDescription>Improve your craft</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 p-4">
                <a
                  href="#"
                  className="block rounded-md p-2 text-sm hover:bg-accent"
                >
                  Storytelling Basics Guide
                </a>
                <a
                  href="#"
                  className="block rounded-md p-2 text-sm hover:bg-accent"
                >
                  How to Structure Your Story
                </a>
                <a
                  href="#"
                  className="block rounded-md p-2 text-sm hover:bg-accent"
                >
                  Photography Tips for Blogs
                </a>
                <a
                  href="#"
                  className="block rounded-md p-2 text-sm hover:bg-accent"
                >
                  Audio Recording Essentials
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search stories..."
                  className="w-full pl-8"
                />
              </div>
              <Button variant="outline" size="icon" className="md:hidden">
                <Filter className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex gap-2 overflow-x-auto py-2 md:hidden">
              {categories.slice(0, 5).map((category) => (
                <Badge key={category.name} variant="outline">
                  {category.name}
                </Badge>
              ))}
            </div>

            <Tabs defaultValue="latest">
              <TabsList>
                <TabsTrigger value="latest">Latest</TabsTrigger>
                <TabsTrigger value="popular">Most Popular</TabsTrigger>
                <TabsTrigger value="featured">Featured</TabsTrigger>
              </TabsList>
              <TabsContent value="latest" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {posts.map((post) => (
                    <PostCard
                      key={post.id}
                      title={post.title}
                      image={post.image}
                      content={post.content}
                      author={post.author}
                      date={post.date}
                      category={post.category}
                      likes={post.likes}
                      comments={post.comments}
                      isLiked={post.isLiked}
                      onLike={() => {}}
                      onComment={() => {}}
                      onShare={() => {}}
                      onReadMore={() => {}}
                    />
                  ))}
                </div>
                <div className="mt-8 flex justify-center">
                  <Button variant="outline">Load More Stories</Button>
                </div>
              </TabsContent>

              <TabsContent value="popular">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[...posts]
                    .sort((a, b) => b.likes - a.likes)
                    .slice(0, 6)
                    .map((post) => (
                      <PostCard
                        key={post.id}
                        title={post.title}
                        image={post.image}
                        content={post.content}
                        author={post.author}
                        date={post.date}
                        category={post.category}
                        likes={post.likes}
                        comments={post.comments}
                        isLiked={post.isLiked}
                        onLike={() => {}}
                        onComment={() => {}}
                        onShare={() => {}}
                        onReadMore={() => {}}
                      />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="featured">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {posts
                    .filter((_, index) => index % 2 === 0) // Just for demonstration
                    .map((post) => (
                      <PostCard
                        key={post.id}
                        title={post.title}
                        image={post.image}
                        content={post.content}
                        author={post.author}
                        date={post.date}
                        category={post.category}
                        likes={post.likes}
                        comments={post.comments}
                        isLiked={post.isLiked}
                        onLike={() => {}}
                        onComment={() => {}}
                        onShare={() => {}}
                        onReadMore={() => {}}
                      />
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-bold">Featured Story</h2>
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="order-2 md:order-1 p-8 md:p-12 flex flex-col justify-center">
                <Badge className="w-fit mb-4">{posts[1].category}</Badge>
                <CardTitle className="text-2xl md:text-3xl mb-4">
                  {posts[1].title}
                </CardTitle>
                <CardDescription className="mb-6">
                  {posts[1].content.substring(0, 300)}...
                </CardDescription>
                <div className="flex items-center gap-3 mb-6">
                  <Avatar>
                    <AvatarImage
                      src={posts[1].author.avatar}
                      alt={posts[1].author.name}
                    />
                    <AvatarFallback>
                      {posts[1].author.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-sm font-medium">
                      {posts[1].author.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {posts[1].date}
                    </div>
                  </div>
                </div>
                <Button>Read Full Story</Button>
              </div>
              <div className="order-1 md:order-2 aspect-video md:aspect-auto md:h-full bg-muted">
                <img
                  src={posts[1].image}
                  alt={posts[1].title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-16">
          <Card className="bg-primary text-primary-foreground overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Share Your Story
                </h2>
                <p className="mb-6">
                  Your journey matters. Share your experiences, creative works,
                  or community initiatives to inspire others and build
                  connections.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-primary-foreground/20 p-1 mt-0.5">
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
                    <div className="text-sm">
                      <span className="font-medium">Text, Photos & Videos</span>
                      <p className="text-primary-foreground/80">
                        Express yourself in multiple formats
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-primary-foreground/20 p-1 mt-0.5">
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
                    <div className="text-sm">
                      <span className="font-medium">Connect with Others</span>
                      <p className="text-primary-foreground/80">
                        Get feedback and build community
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-primary-foreground/20 p-1 mt-0.5">
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
                    <div className="text-sm">
                      <span className="font-medium">Writing Support</span>
                      <p className="text-primary-foreground/80">
                        Access resources and mentorship
                      </p>
                    </div>
                  </div>
                </div>
                <Button variant="secondary" className="mt-6">
                  <Plus className="mr-2 h-4 w-4" /> Start Writing
                </Button>
              </div>
              <div className="hidden md:block bg-primary-foreground/10"></div>
            </div>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default BlogPage;
