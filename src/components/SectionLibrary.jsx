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
    <div className="h-full bg-white p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Section Library</h2>

        <p className="text-sm text-gray-500 mt-1">
          Click a section to add it to your page
        </p>
      </div>

      <div className="space-y-4">
        {sections.map((section) => {
          const Icon = section.icon;

          return (
            <button
              key={section.type}
              onClick={() => handleAddSection(section.type)}
              className="
                group
                relative
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-gray-200
                bg-white
                p-5
                text-left
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-400
                hover:shadow-xl
              "
            >
              {/* Background Glow */}
              <div
                className={`
                  absolute
                  inset-0
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-10
                  bg-gradient-to-r
                  ${section.gradient}
                `}
              />

              <div className="relative flex items-start justify-between">
                <div>
                  <div
                    className={`
                      mb-3
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-gradient-to-r
                      ${section.gradient}
                      text-white
                    `}
                  >
                    <Icon size={22} />
                  </div>

                  <h3 className="font-semibold text-lg">{section.title}</h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {section.description}
                  </p>
                </div>

                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    bg-gray-100
                    transition
                    group-hover:bg-blue-500
                    group-hover:text-white
                  "
                >
                  <Plus size={18} />
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
