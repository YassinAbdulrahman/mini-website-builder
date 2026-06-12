"use client";

import PreviewArea from "@/components/PreviewArea";
import PropertyEditor from "@/components/PropertyEditor";
import SectionLibrary from "@/components/SectionLibrary";

export default function Home() {
  return (
    <div className="grid grid-cols-12 min-h-screen">
      <aside className="col-span-3 border-r">
        <SectionLibrary />
      </aside>

      <main className="col-span-6">
        <PreviewArea />
      </main>

      <aside className="col-span-3 border-l">
        <PropertyEditor />
      </aside>
    </div>
  );
}
