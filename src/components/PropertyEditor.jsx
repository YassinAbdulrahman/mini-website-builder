"use client";

import useBuilderStore from "@/store/builderStore";

export default function PropertyEditor() {
  const selectedSection = useBuilderStore((state) =>
    state.sections.find((section) => section.id === state.selectedSectionId),
  );

  const updateSection = useBuilderStore((state) => state.updateSection);

  const deleteSection = useBuilderStore((state) => state.deleteSection);

  if (!selectedSection) {
    return (
      <div className="flex h-full items-center justify-center p-6">
        <div className="text-center">
          <div className="text-sm text-gray-400">No section selected</div>

          <div className="mt-2 text-lg font-semibold">
            Select a block to edit
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full border-l bg-white p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold">Properties</h2>

        <div className="text-sm text-gray-500">Edit your section settings</div>
      </div>

      <div className="mb-6 rounded-xl border bg-gray-50 p-4">
        <div className="text-xs text-gray-400">SECTION TYPE</div>

        <div className="mt-1 inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
          {selectedSection.type}
        </div>
      </div>

      <div className="mb-5">
        <label className="text-sm font-medium text-gray-700">Title</label>

        <input
          type="text"
          value={selectedSection.title || ""}
          onChange={(e) =>
            updateSection(selectedSection.id, {
              title: e.target.value,
            })
          }
          className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm transition outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {selectedSection.type === "hero" && (
        <div className="mb-5">
          <label className="text-sm font-medium text-gray-700">
            Description
          </label>

          <textarea
            value={selectedSection.description || ""}
            onChange={(e) =>
              updateSection(selectedSection.id, {
                description: e.target.value,
              })
            }
            rows={4}
            className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm transition outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
          />
        </div>
      )}

      <div className="mt-10 rounded-xl border border-red-100 bg-red-50 p-4">
        <div className="text-sm font-semibold text-red-600">Danger Zone</div>

        <div className="mb-3 text-xs text-red-400">
          This action cannot be undone
        </div>

        <button
          onClick={() => deleteSection(selectedSection.id)}
          className="w-full rounded-xl bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600 hover:shadow-md"
        >
          Delete Section
        </button>
      </div>
    </div>
  );
}
