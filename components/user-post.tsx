import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  BarChart2,
  Bookmark,
  Heart,
  MessageCircle,
  Repeat2,
  Upload,
} from "lucide-react";

export function UserPost() {
  return (
    <div className="flex gap-4 w-full p-4 border-b">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1">
          <p className="font-bold">John Doe</p>
          <p className="text-muted-foreground text-sm">@JDoe12</p>
          <p className="text-muted-foreground text-sm">- 1h</p>
        </div>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem officia
          ex minima repellendus! Quibusdam, recusandae?
        </p>

        <div className="flex justify-between items center">
          <Button variant={"ghost"} size={"icon"} className="rounded-full">
            <MessageCircle size={16} />
          </Button>
          <Button variant={"ghost"} size={"icon"} className="rounded-full">
            <Repeat2 size={16} />
          </Button>
          <Button variant={"ghost"} size={"icon"} className="rounded-full">
            <Heart size={16} />
          </Button>
          <Button
            variant={"ghost"}
            size={"icon"}
            className="rounded-full hidden md:flex"
          >
            <BarChart2 size={16} />
          </Button>
          <Button
            variant={"ghost"}
            size={"icon"}
            className="rounded-full hidden md:flex"
          >
            <Bookmark size={16} />
          </Button>
          <Button
            variant={"ghost"}
            size={"icon"}
            className="rounded-full hidden md:flex"
          >
            <Upload size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}
