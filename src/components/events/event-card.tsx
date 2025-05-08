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
import { CalendarDays, Clock, MapPin, Users } from "lucide-react";

interface EventCardProps {
  title: string;
  image: string;
  date: string;
  time: string;
  location: string;
  category: string;
  attendees: number;
  maxAttendees?: number;
  description: string;
  onRegister?: () => void;
  onShare?: () => void;
}

export function EventCard({
  title,
  image,
  date,
  time,
  location,
  category,
  attendees,
  maxAttendees,
  description,
  onRegister,
  onShare,
}: EventCardProps) {
  const isFull = maxAttendees !== undefined && attendees >= maxAttendees;

  return (
    <Card className="overflow-hidden">
      <div className="aspect-[16/9] w-full overflow-hidden">
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
          </div>
          <Badge variant="outline">{category}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3 pb-2">
        <div className="flex flex-col gap-2 text-sm">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span>
              {attendees} {maxAttendees ? `/ ${maxAttendees}` : ""} attendees
            </span>
          </div>
        </div>
        <CardDescription className="line-clamp-2">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button
          onClick={onRegister}
          className="flex-1"
          disabled={isFull}
          variant={isFull ? "outline" : "default"}
        >
          {isFull ? "Event Full" : "Register"}
        </Button>
        <Button variant="outline" onClick={onShare} className="flex-1">
          Share
        </Button>
      </CardFooter>
    </Card>
  );
}
