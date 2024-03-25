import { Image, Smile, Locate } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function CreatePostForm() {
  return (
    <div className="p-4 w-full border-b">
      <div className="flex gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="flex flex-col gap-2 flex-grow">
          <Input
            className="w-full text-xl border-none"
            placeholder="What is happening?!"
          />

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <Button
                size={"icon"}
                variant={"ghost"}
                className="rounded-full text-primary"
              >
                <Image size={16} />
              </Button>
              <Button
                size={"icon"}
                variant={"ghost"}
                className="rounded-full text-primary hidden md:flex"
              >
                <Smile size={16} />
              </Button>
              <Button
                size={"icon"}
                variant={"ghost"}
                className="rounded-full text-primary hidden md:flex"
              >
                <Locate size={16} />
              </Button>
            </div>

            <Button size={"sm"} className="rounded-full font-bold px-6">
              Post
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
