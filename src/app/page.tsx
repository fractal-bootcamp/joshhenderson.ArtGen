import Image from "next/image";
import verifyUser from "@/middleware/verifyUser";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        hello art world
      </div>
    </main>
  );
}
