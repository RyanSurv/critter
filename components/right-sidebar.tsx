import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function RightSidebar() {
  return (
    <div className="h-full l:w-[250px] xl:w-[400px] border-l px-4 py-2">
      <div className="flex flex-col gap-4">
        <Input placeholder="Search" className="rounded-full" />

        <div className="rounded-xl p-4 bg-muted">
          <h2 className="text-xl font-bold">Subscribe to Premium</h2>
          <p className="mt-2 text-muted-foreground">
            Subscribe to unlock new features and if eligible, receive a share of
            ads revenue. This does not do anything.
          </p>
          <Button className="rounded-full mt-4 px-8">Subscribe</Button>
        </div>
      </div>
    </div>
  );
}
