import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useState } from "react";

const languages = [
  { code: "en", name: "English" },
  { code: "fr", name: "Français" },
  { code: "rw", name: "Kinyarwanda" },
];

export function LanguageSwitcher() {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const handleLanguageChange = (langCode: string) => {
    setCurrentLanguage(langCode);
    // In a real app, this would update the app's language context/state
    // and possibly store the preference in localStorage
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={currentLanguage === lang.code ? "bg-accent" : ""}
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
