import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Header() {
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="hidden font-bold sm:inline-block text-primary text-xl">
              SheLeads
            </span>
          </Link>
        </div>

        {isMobile ? (
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageSwitcher />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link to="/" className="text-lg font-medium">
                    Home
                  </Link>
                  <Link to="/profiles" className="text-lg font-medium">
                    Profiles
                  </Link>
                  <Link to="/mentorship" className="text-lg font-medium">
                    Mentorship
                  </Link>
                  <Link to="/learning" className="text-lg font-medium">
                    Learning
                  </Link>
                  <Link to="/events" className="text-lg font-medium">
                    Events
                  </Link>
                  <Link to="/blog" className="text-lg font-medium">
                    Blog
                  </Link>
                  <Link to="/dashboard" className="text-lg font-medium">
                    Dashboard
                  </Link>
                  <Link to="/login" className="text-lg font-medium">
                    Sign In
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Discover</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li>
                        <Link to="/profiles">
                          <NavigationMenuLink
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            )}
                          >
                            <div className="text-sm font-medium leading-none">
                              Profiles
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Browse talent profiles and portfolios
                            </p>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link to="/mentorship">
                          <NavigationMenuLink
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            )}
                          >
                            <div className="text-sm font-medium leading-none">
                              Mentorship
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Connect with mentors in sports and the arts
                            </p>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link to="/events">
                          <NavigationMenuLink
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            )}
                          >
                            <div className="text-sm font-medium leading-none">
                              Events
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Find local events, competitions, and facility
                              bookings
                            </p>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog">
                          <NavigationMenuLink
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            )}
                          >
                            <div className="text-sm font-medium leading-none">
                              Blog
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Read stories and creative content from the
                              community
                            </p>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li>
                        <Link to="/learning">
                          <NavigationMenuLink
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            )}
                          >
                            <div className="text-sm font-medium leading-none">
                              Workshops
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Access free learning content and training modules
                            </p>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link to="/learning/sports">
                          <NavigationMenuLink
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            )}
                          >
                            <div className="text-sm font-medium leading-none">
                              Sports
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Learn sports techniques and training
                            </p>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link to="/learning/arts">
                          <NavigationMenuLink
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            )}
                          >
                            <div className="text-sm font-medium leading-none">
                              Arts
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Develop your artistic skills and creativity
                            </p>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link to="/learning/digital">
                          <NavigationMenuLink
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            )}
                          >
                            <div className="text-sm font-medium leading-none">
                              Digital Skills
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Build digital and technical skills for the future
                            </p>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/dashboard">
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Dashboard
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-4">
              <ThemeToggle />
              <LanguageSwitcher />
              <Avatar className="h-9 w-9 cursor-pointer">
                <AvatarImage src="/placeholder.svg" alt="User" />
                <AvatarFallback>GU</AvatarFallback>
              </Avatar>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
