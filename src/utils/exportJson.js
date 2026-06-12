import useBuilderStore from "@/store/builderStore";

export function exportJSON() {
  const state = useBuilderStore.getState();

  const data = {
    sections: state.sections,
    selectedSectionId: state.selectedSectionId,
  };

  const blob = new Blob(
    [JSON.stringify(data, null, 2)],
    { type: "application/json" }
  );

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "website-builder.json";
  a.click();
}