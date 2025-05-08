import { Github, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} SheLeads Platform. All rights
            reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/sheleads"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="ghost" size="sm" className="gap-1">
            <Heart className="h-4 w-4 text-red-500" />
            <span className="text-xs">Support Us</span>
          </Button>
        </div>
      </div>
    </footer>
  );
}
