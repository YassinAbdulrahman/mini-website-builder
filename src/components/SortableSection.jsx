"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function SortableSection({
  section,
  children,
  onClick,
  isSelected,
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
  } = useSortable({
    id: section.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`
        relative
        rounded-lg
        border-2
        bg-white
        shadow-sm
        transition-all
        ${isSelected ? "border-blue-500 shadow-md" : "border-gray-200"}
      `}
    >
      {/* Drag Handle */}
      <div
        ref={setActivatorNodeRef}
        {...listeners}
        {...attributes}
        className="
          flex
          items-center
          justify-between
          px-3
          py-2
          bg-gray-100
          border-b
          cursor-grab
          active:cursor-grabbing
          text-sm
          text-gray-500
        "
      >
        <span>Drag Section</span>
        <span>☰</span>
      </div>

      {/* Content */}
      <div onClick={() => onClick?.()} className="cursor-pointer">
        {children}
      </div>
    </div>
  );
}
