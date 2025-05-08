import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Home from "./pages/Home";
import ProfilePage from "./pages/ProfilePage";
import MentorshipPage from "./pages/MentorshipPage";
import LearningPage from "./pages/LearningPage";
import SportsPage from "./pages/learning/SportsPage";
import ArtsPage from "./pages/learning/ArtsPage";
import DigitalSkillsPage from "./pages/learning/DigitalSkillsPage";
import EventsPage from "./pages/EventsPage";
import BlogPage from "./pages/BlogPage";
import DashboardPage from "./pages/DashboardPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="light">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profiles" element={<ProfilePage />} />
            <Route path="/mentorship" element={<MentorshipPage />} />
            <Route path="/learning" element={<LearningPage />} />
            <Route path="/learning/sports" element={<SportsPage />} />
            <Route path="/learning/arts" element={<ArtsPage />} />
            <Route path="/learning/digital" element={<DigitalSkillsPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
