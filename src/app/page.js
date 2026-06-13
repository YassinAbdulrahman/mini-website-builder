"use client";

import PreviewArea from "@/components/PreviewArea";
import PropertyEditor from "@/components/PropertyEditor";
import SectionLibrary from "@/components/SectionLibrary";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100">
      <div
        className="
          grid
          min-h-screen
          grid-cols-1
          lg:grid-cols-12
        "
      >
        <aside
          className="
            order-1
            border-b
            bg-white
            lg:order-none
            lg:col-span-3
            lg:border-b-0
            lg:border-r
          "
        >
          <SectionLibrary />
        </aside>

        <main
          className="
            order-2
            min-h-[500px]
            lg:order-none
            lg:col-span-6
          "
        >
          <PreviewArea />
        </main>

        <aside
          className="
            order-3
            border-t
            bg-white
            lg:order-none
            lg:col-span-3
            lg:border-t-0
            lg:border-l
          "
        >
          <PropertyEditor />
        </aside>
      </div>
    </div>
  );
}
