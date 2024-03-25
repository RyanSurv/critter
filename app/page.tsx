import { Settings } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CreatePostForm } from "@/components/create-post-form";
import { UserPost } from "@/components/user-post";

export default function HomePage() {
  return (
    <div className="w-full">
      <div className="flex border-b">
        <div className="flex-1 py-2 hover:bg-muted grid place-items-center transition ease-linear text-sm md:text-base">
          <h1 className="font-bold">For you</h1>
        </div>
        <div className="flex-1 py-2 hover:bg-muted grid place-items-center transition ease-linear text-sm md:text-base">
          <h1 className="font-bold">Following</h1>
        </div>
        <div className="py-2 px-3">
          <h1 className="font-bold">
            <Button variant={"ghost"} className="rounded-full">
              <Settings />
            </Button>
          </h1>
        </div>
      </div>

      <CreatePostForm />

      <UserPost />
    </div>
  );
}
