import useBuilderStore from "@/store/builderStore";

export function handleImport(event) {
  const file = event.target.files[0];

  const reader = new FileReader();

  reader.onload = (e) => {
    const data = JSON.parse(e.target.result);

    useBuilderStore.setState({
      sections: data.sections || [],
      selectedSectionId: data.selectedSectionId || null,
    });
  };

  reader.readAsText(file);
}