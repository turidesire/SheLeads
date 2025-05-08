import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, Heart, MessageSquare, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface PostCardProps {
  title: string;
  image?: string;
  content: string;
  author: {
    name: string;
    avatar?: string;
  };
  date: string;
  category: string;
  likes: number;
  comments: number;
  isLiked?: boolean;
  onLike?: () => void;
  onComment?: () => void;
  onShare?: () => void;
  onReadMore?: () => void;
}

export function PostCard({
  title,
  image,
  content,
  author,
  date,
  category,
  likes,
  comments,
  isLiked = false,
  onLike,
  onComment,
  onShare,
  onReadMore,
}: PostCardProps) {
  const initials = author.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Card className="overflow-hidden">
      {image && (
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform hover:scale-105"
          />
        </div>
      )}
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={author.avatar} alt={author.name} />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <div>
              <span className="text-sm font-medium">{author.name}</span>
              <div className="flex items-center gap-2">
                <CalendarDays className="h-3 w-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{date}</span>
              </div>
            </div>
          </div>
          <Badge variant="outline">{category}</Badge>
        </div>
        <CardTitle className="line-clamp-2 mt-4">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="line-clamp-3">{content}</CardDescription>
      </CardContent>
      <CardFooter className="flex flex-col gap-4 pt-2">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-1 px-2"
              onClick={onLike}
            >
              <Heart
                className={cn(
                  "h-4 w-4",
                  isLiked && "fill-red-500 text-red-500",
                )}
              />
              <span className="text-xs">{likes}</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-1 px-2"
              onClick={onComment}
            >
              <MessageSquare className="h-4 w-4" />
              <span className="text-xs">{comments}</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-1 px-2"
              onClick={onShare}
            >
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
          <Button variant="link" size="sm" onClick={onReadMore}>
            Read more
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
