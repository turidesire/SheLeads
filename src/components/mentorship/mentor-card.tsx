import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Star } from "lucide-react";

interface MentorCardProps {
  name: string;
  image?: string;
  profession: string;
  location: string;
  specialties: string[];
  experience: string;
  rating: number;
  availability: string;
  onBook?: () => void;
  onViewProfile?: () => void;
}

export function MentorCard({
  name,
  image,
  profession,
  location,
  specialties,
  experience,
  rating,
  availability,
  onBook,
  onViewProfile,
}: MentorCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-4">
          <Avatar className="h-14 w-14">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>{name}</CardTitle>
            <CardDescription>{profession}</CardDescription>
            <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="h-3 w-3" /> {location}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex flex-wrap gap-1">
          {specialties.map((specialty) => (
            <Badge key={specialty} variant="outline" className="text-xs">
              {specialty}
            </Badge>
          ))}
        </div>
        <div className="mb-2 flex items-center gap-2">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < rating ? "fill-primary text-primary" : "text-muted"
                }`}
              />
            ))}
          <span className="text-sm">{rating.toFixed(1)}</span>
        </div>
        <p className="mb-2 text-sm text-muted-foreground">{experience}</p>
        <div className="flex items-center gap-2 text-sm">
          <CalendarDays className="h-4 w-4 text-muted-foreground" />
          <span>{availability}</span>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button onClick={onBook} className="flex-1">
          Book Session
        </Button>
        <Button variant="outline" onClick={onViewProfile} className="flex-1">
          View Profile
        </Button>
      </CardFooter>
    </Card>
  );
}
