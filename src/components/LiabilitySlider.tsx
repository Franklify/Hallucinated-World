"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function LiabilitySlider() {
  const [value, setValue] = useState(50);

  return (
    <div className="my-12 p-6 bg-gray-50 border border-gray-200 rounded-lg not-prose">
      <h4 className="font-sans font-bold text-lg mb-4">Interactive: The Liability Shift</h4>
      <p className="text-sm text-gray-600 mb-6">
        Drag to see who pays for the accident based on the legal standard.
      </p>
      
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />

      <div className="flex justify-between mt-4 font-sans text-sm font-semibold">
        <span className={value < 50 ? "text-red-600" : "text-gray-400"}>
          Negligence (User Pays)
        </span>
        <span className={value > 50 ? "text-blue-600" : "text-gray-400"}>
          Strict Liability (Google Pays)
        </span>
      </div>

      <div className="mt-4 p-4 bg-white border border-gray-100 rounded shadow-sm">
        <p className="font-serif italic text-gray-800">
          {value < 50 
            ? "Under current law, the engineer is the 'Moral Crumple Zone.' Google is protected by the Terms of Service."
            : "Under 'War Torts' theory, the creator of the risk bears the cost. Google pays for the defect."
          }
        </p>
      </div>
    </div>
  );
}