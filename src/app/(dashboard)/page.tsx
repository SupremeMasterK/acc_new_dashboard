import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-10">
      <UserButton afterSwitchSessionUrl="/" />
      <h1 className="text-3xl font-bold ">Welcome!</h1>
      <p>This is an Authenticated Route</p>
    </div>
  );
}
