import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-10">
      <h1 className="text-3xl font-bold ">Welcome!</h1>
      <Button variant={"outline"}>Dashboard Button</Button>
    </div>
  );
}
