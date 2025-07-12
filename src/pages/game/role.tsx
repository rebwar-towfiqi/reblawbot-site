// src/components/RoleSelector.tsx
"use client";

import React from "react";

type RoleSelectorProps = {
  selectedRole: "plaintiff" | "defender" | null;
  onSelect: (role: "plaintiff" | "defender") => void;
};

const RoleSelector: React.FC<RoleSelectorProps> = ({ selectedRole, onSelect }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-4">
      <h2 className="text-xl font-semibold text-center text-white">🎭 انتخاب نقش خود در جلسه دادگاه</h2>
      <div className="flex gap-6 mt-2">
        <button
          onClick={() => onSelect("plaintiff")}
          className={`px-6 py-3 rounded-lg font-bold text-white transition ${
            selectedRole === "plaintiff" ? "bg-red-600" : "bg-gray-700 hover:bg-red-700"
          }`}
        >
          شاکی (گناهکار)
        </button>
        <button
          onClick={() => onSelect("defender")}
          className={`px-6 py-3 rounded-lg font-bold text-white transition ${
            selectedRole === "defender" ? "bg-green-600" : "bg-gray-700 hover:bg-green-700"
          }`}
        >
          متهم (بی‌گناه)
        </button>
      </div>
    </div>
  );
};

export default RoleSelector;
