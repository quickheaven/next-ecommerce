import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import AuthStatus from "./auth-status";
import { CartIndicator } from "./card-indicator";

export const categories = [
  { id: 1, name: "Electronics", href: "/search/electronics" },
  { id: 2, name: "Fashion", href: "/search/fashion" },
  { id: 3, name: "Home", href: "/search/home" },
];

export function Navbar() {
  return (
    <div className="border-b border-dashed">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div>
          <div className="flex items-center gap-6">
            <Link className="text-2xl font-bold" href="/">
              Store
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  href={category.href}
                >
                  {category.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <div className="flex items-center gap-0">
          <AuthStatus />
          <CartIndicator />
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
