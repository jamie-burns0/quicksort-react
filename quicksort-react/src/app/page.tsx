import { useState } from "react";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl font-bold text-center">Welcome to the Algorithms Visualizer</h1>
      <Image
        src="/images/_0e422f3c-b7ee-4042-a082-219ca874f7b1.jpg"
        alt="Hero Image"
        width={500}
        height={500}
      />
      <Link href="/quicksort" className="text-2xl font-bold">Quicksort</Link>
    </main>
  );
}
