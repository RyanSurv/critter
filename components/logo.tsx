import { Bug } from "lucide-react";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="grid place-items-center md:place-items-start">
      <Bug size={42} className="cursor-pointer" />
    </Link>
  );
}
