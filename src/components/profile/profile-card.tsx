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
import { MessageSquare, UserPlus } from "lucide-react";

interface ProfileCardProps {
  name: string;
  image?: string;
  location: string;
  interests: string[];
  description: string;
  onConnect?: () => void;
  onMessage?: () => void;
}

export function ProfileCard({
  name,
  image,
  location,
  interests,
  description,
  onConnect,
  onMessage,
}: ProfileCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>{name}</CardTitle>
            <CardDescription>{location}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex flex-wrap gap-2">
          {interests.map((interest) => (
            <Badge key={interest} variant="secondary">
              {interest}
            </Badge>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" onClick={onConnect}>
          <UserPlus className="mr-2 h-4 w-4" />
          Connect
        </Button>
        <Button variant="secondary" size="sm" onClick={onMessage}>
          <MessageSquare className="mr-2 h-4 w-4" />
          Message
        </Button>
      </CardFooter>
    </Card>
  );
}
