import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface CourseCardProps {
  title: string;
  image: string;
  description: string;
  category: string;
  duration: string;
  enrolled: number;
  progress?: number;
  onEnroll?: () => void;
  onContinue?: () => void;
}

export function CourseCard({
  title,
  image,
  description,
  category,
  duration,
  enrolled,
  progress,
  onEnroll,
  onContinue,
}: CourseCardProps) {
  const isEnrolled = progress !== undefined;

  return (
    <Card className="overflow-hidden">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="line-clamp-1">{title}</CardTitle>
            <CardDescription className="line-clamp-2 mt-1">
              {description}
            </CardDescription>
          </div>
          <Badge>{category}</Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{enrolled} enrolled</span>
          </div>
        </div>
        {isEnrolled && (
          <div className="mt-4">
            <div className="mb-1 flex items-center justify-between text-xs">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}
      </CardContent>
      <CardFooter>
        {isEnrolled ? (
          <Button onClick={onContinue} className="w-full">
            Continue Learning
          </Button>
        ) : (
          <Button onClick={onEnroll} className="w-full">
            Enroll Now
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
