"use client";

import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import SortableSection from "@/components/SortableSection";
import useBuilderStore from "@/store/builderStore";

export default function PreviewArea() {
  const sections = useBuilderStore((state) => state.sections);
  const selectSection = useBuilderStore((state) => state.selectSection);
  const selectedSectionId = useBuilderStore((state) => state.selectedSectionId);
  const reorderSections = useBuilderStore((state) => state.reorderSections);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over) return;

    if (active.id !== over.id) {
      const oldIndex = sections.findIndex(
        (section) => section.id === active.id,
      );

      const newIndex = sections.findIndex((section) => section.id === over.id);

      reorderSections(oldIndex, newIndex);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Website Preview</h2>
          <p className="text-sm text-gray-500">
            {sections.length} sections added
          </p>
        </div>

        <div className="rounded-full bg-white px-4 py-2 shadow-sm">
          Live Preview
        </div>
      </div>

      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext
          items={sections.map((section) => section.id)}
          strategy={verticalListSortingStrategy}
        >
          {sections.length === 0 ? (
            <div className="flex h-[500px] items-center justify-center rounded-3xl border-2 border-dashed border-gray-300 bg-white">
              <div className="text-center">
                <h3 className="text-xl font-semibold">Start Building</h3>

                <p className="mt-2 text-gray-500">
                  Add a section from the library
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {sections.map((section) => (
                <SortableSection
                  key={section.id}
                  section={section}
                  isSelected={selectedSectionId === section.id}
                  onClick={() => selectSection(section.id)}
                >
                  {section.type === "header" && (
                    <header className="flex items-center justify-between rounded-2xl bg-white px-8 py-5 shadow-md">
                      <h1 className="text-2xl font-bold">{section.title}</h1>

                      <nav className="flex gap-6 text-sm text-gray-600">
                        <span>Home</span>
                        <span>About</span>
                        <span>Services</span>
                        <span>Contact</span>
                      </nav>
                    </header>
                  )}

                  {section.type === "hero" && (
                    <section className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 p-12 text-white shadow-xl">
                      <h2 className="mb-4 text-5xl font-bold">
                        {section.title}
                      </h2>

                      <p className="max-w-2xl text-lg text-blue-100">
                        {section.description}
                      </p>

                      <button className="mt-8 rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:scale-105">
                        Get Started
                      </button>
                    </section>
                  )}

                  {section.type === "footer" && (
                    <footer className="rounded-2xl bg-slate-900 p-8 text-center text-white shadow-md">
                      {section.title}
                    </footer>
                  )}
                </SortableSection>
              ))}
            </div>
          )}
        </SortableContext>
      </DndContext>
    </div>
  );
}
