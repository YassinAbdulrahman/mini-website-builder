"use client";

import useBuilderStore from "@/store/builderStore";
import { LayoutPanelTop, ImageIcon, PanelBottom, Plus } from "lucide-react";

export default function SectionLibrary() {
  const addSection = useBuilderStore((state) => state.addSection);

  const sections = [
    {
      type: "header",
      title: "Header",
      description: "Navigation, logo and menu",
      icon: LayoutPanelTop,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      type: "hero",
      title: "Hero",
      description: "Main landing section",
      icon: ImageIcon,
      gradient: "from-violet-500 to-purple-500",
    },
    {
      type: "footer",
      title: "Footer",
      description: "Links and copyright",
      icon: PanelBottom,
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const handleAddSection = (type) => {
    const id = crypto.randomUUID();

    switch (type) {
      case "header":
        addSection({
          id,
          type,
          title: "My Website",
        });
        break;

      case "hero":
        addSection({
          id,
          type,
          title: "Welcome",
          description: "Build something amazing",
        });
        break;

      case "footer":
        addSection({
          id,
          type,
          title: "© 2026 All Rights Reserved",
        });
        break;
    }
  };

  return (
    <div className="h-full bg-white p-4 sm:p-6">
      <div className="mb-6 sm:mb-8">
        <h2 className="text-xl font-bold sm:text-2xl">Section Library</h2>

        <p className="mt-1 text-xs text-gray-500 sm:text-sm">
          Click a section to add it to your page
        </p>
      </div>

      <div className="space-y-3 sm:space-y-4">
        {sections.map((section) => {
          const Icon = section.icon;

          return (
            <button
              key={section.type}
              onClick={() => handleAddSection(section.type)}
              className="group relative w-full overflow-hidden rounded-xl border border-gray-200 bg-white p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg sm:rounded-2xl sm:p-5"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-10 ${section.gradient} `}
              />

              <div className="relative flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div
                    className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r sm:h-12 sm:w-12 sm:rounded-xl ${section.gradient} text-white`}
                  >
                    <Icon size={20} />
                  </div>

                  <h3 className="text-base font-semibold sm:text-lg">
                    {section.title}
                  </h3>

                  <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                    {section.description}
                  </p>
                </div>

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 transition group-hover:bg-blue-500 group-hover:text-white sm:h-9 sm:w-9">
                  <Plus size={16} />
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
