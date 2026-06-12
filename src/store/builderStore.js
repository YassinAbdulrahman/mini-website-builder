import { create } from "zustand";

const useBuilderStore = create((set) => ({
  sections: [],
  selectedSectionId: null,

  addSection: (section) =>
    set((state) => ({
      sections: [...state.sections, section],
    })),

  selectSection: (id) =>
    set({
      selectedSectionId: id,
    }),

  updateSection: (id, updatedFields) =>
    set((state) => ({
      sections: state.sections.map((section) =>
        section.id === id
          ? {
              ...section,
              ...updatedFields,
            }
          : section,
      ),
    })),

  deleteSection: (id) =>
    set((state) => ({
      sections: state.sections.filter((section) => section.id !== id),
      selectedSectionId:
        state.selectedSectionId === id ? null : state.selectedSectionId,
    })),
  reorderSections: (oldIndex, newIndex) =>
    set((state) => {
      const updated = [...state.sections];

      const [moved] = updated.splice(oldIndex, 1);
      updated.splice(newIndex, 0, moved);

      return { sections: updated };
    }),
}));

export default useBuilderStore;
