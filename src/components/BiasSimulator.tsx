"use client";
import { useState } from "react";
import { AlertTriangle, CheckCircle, Video } from "lucide-react";

export default function BiasSimulator() {
  const [selectedData, setSelectedData] = useState<string | null>(null);

  const scenarios = {
    hollywood: {
      title: "Action Movie Dataset",
      description: "50,000 hours of Fast & Furious and Marvel movies.",
      result: "Catastrophic Failure",
      explanation: "Genie 3 learned that cars defy gravity when driving off ramps. Your autonomous vehicle just accelerated into a ravine expecting to fly.",
      icon: <AlertTriangle className="w-6 h-6 text-red-500" />
    },
    youtube: {
      title: "Viral Dashcam Fails",
      description: "Unfiltered scrapings of Russian dashcam footage and TikTok stunts.",
      result: "Erratic Behavior",
      explanation: "Genie 3 learned that 'normal' driving involves aggression and drifting. Your robot assumes right-of-way means 'whoever is fastest.'",
      icon: <AlertTriangle className="w-6 h-6 text-orange-500" />
    },
    curated: {
      title: "Curated Clean Data",
      description: "Expensive, copyright-cleared, verified physics simulations.",
      result: "Safe Operation",
      explanation: "The model understands friction and gravity correctly. However, this dataset was 100x more expensive to acquire.",
      icon: <CheckCircle className="w-6 h-6 text-green-500" />
    }
  };

  return (
    <div className="my-12 bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm not-prose">
      <div className="bg-slate-900 p-6 text-white">
        <h4 className="font-sans font-bold text-lg flex items-center gap-2">
          <Video className="w-5 h-5" /> Interactive: Train the Model
        </h4>
        <p className="text-slate-300 text-sm mt-1">
          Select a dataset to train your autonomous vehicle's world model.
        </p>
      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {Object.entries(scenarios).map(([key, data]) => (
          <button
            key={key}
            onClick={() => setSelectedData(key)}
            className={`p-4 rounded-lg border text-left transition-all ${
              selectedData === key 
                ? "border-blue-500 bg-blue-50 ring-2 ring-blue-200" 
                : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
            }`}
          >
            <span className="font-sans font-bold text-gray-600 text-sm block mb-1">{data.title}</span>
            <span className="text-xs text-gray-500">{data.description}</span>
          </button>
        ))}
      </div>

      {selectedData && (
        <div className="px-6 pb-6 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              {scenarios[selectedData as keyof typeof scenarios].icon}
              <span className="font-bold font-sans text-gray-600">
                Outcome: {scenarios[selectedData as keyof typeof scenarios].result}
              </span>
            </div>
            <p className="text-sm text-gray-700">
              {scenarios[selectedData as keyof typeof scenarios].explanation}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}