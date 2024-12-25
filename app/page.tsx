import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col">
      <h1 className="text-3xl mb-6">Download links for different platforms</h1>
      <div className="flex space-x-6 items-center justify-center">
        {/* Windows */}
        <Link
          href="https://github.com/abubakrkhon1/builds-pomodoro/raw/refs/heads/main/windows.exe"
          className="p-6 hover:bg-white/5 transition bg-white/10 flex items-center justify-center"
        >
          Download link for Windows
        </Link>
        {/* Mac */}
        <Link
          href="https://github.com/abubakrkhon1/builds-pomodoro/raw/refs/heads/main/Pomodoro%20App_0.1.0_aarch64.dmg"
          className="p-6 hover:bg-white/5 transition bg-white/10 flex items-center justify-center"
        >
          Download link for MacOS
        </Link>
      </div>
    </div>
  );
}
