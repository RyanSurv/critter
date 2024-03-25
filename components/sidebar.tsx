import Link from "next/link";
import { Home, Search, Bell, Mail, Ellipsis, FilePlus2 } from "lucide-react";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/mode-toggle";

const navigation = [
  {
    name: "Home",
    href: "/",
    icon: Home,
  },
  {
    name: "Explore",
    href: "/",
    icon: Search,
  },
  {
    name: "Notifications",
    href: "/",
    icon: Bell,
  },
  {
    name: "Messages",
    href: "/",
    icon: Mail,
  },
];

export function Sidebar() {
  return (
    <aside className="py-4 px-1 md:px-2 lg:px-6 border-r">
      <div className="flex flex-col justify-between items-center md:items-start h-full">
        <div>
          <Logo />

          <nav className="mt-6">
            <ul className="flex flex-col gap-3 items-center md:items-start">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Button
                    variant={"ghost"}
                    className="rounded-full py-6"
                    asChild
                  >
                    <Link href={item.href} className="flex items-center gap-4">
                      <item.icon className="h-6 w-6 md:h-7 md:w-7" />
                      <p className="hidden md:block text-lg">{item.name}</p>
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>
          </nav>

          <Button size={"lg"} className="rounded-full w-full mt-6 px-2 md:px-8">
            <p className="hidden md:block">Post</p>
            <FilePlus2 className="md:hidden" size={16} />
          </Button>
        </div>

        <div className="flex flex-col gap-2">
          <div className="pl-4">
            <ModeToggle />
          </div>

          <Button
            variant={"ghost"}
            className="rounded-full py-8 px-4 w-full flex justify-between gap-8"
          >
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <div className="hidden md:block flex flex-col items-start">
                <p className="font-semibold">John Doe</p>
                <p className="text-sm text-gray-500">@JDoe12</p>
              </div>
            </div>

            <Button className="hidden md:block" variant={"ghost"}>
              <Ellipsis size={24} />
            </Button>
          </Button>
        </div>
      </div>
    </aside>
  );
}
