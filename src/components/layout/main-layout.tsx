import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";

export function MainLayout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children || <Outlet />}</main>
      <Footer />
    </div>
  );
}
