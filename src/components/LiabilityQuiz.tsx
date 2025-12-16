"use client";
import { useState } from "react";
import { Gavel, XCircle } from "lucide-react";

export default function LiabilityQuiz() {
  const [outcome, setOutcome] = useState<string | null>(null);

  return (
    <div className="my-12 p-8 bg-slate-50 border border-slate-200 rounded-xl not-prose">
      <h4 className="font-sans font-bold text-xl mb-2 text-slate-900">
        Challenge: Who Pays for the Crash?
      </h4>
      <p className="text-slate-600 mb-6 text-sm">
        Scenario: You are a safety engineer. You use Genie 3 to simulate a bridge stress test. 
        Genie 3 hallucinates the steel strength. You build the bridge. It collapses. 
        <strong>Who is liable?</strong>
      </p>

      <div className="flex flex-col gap-3">
        {/* Option 1 */}
        <button
          onClick={() => setOutcome("google")}
          className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-all group"
        >
          <span className="font-semibold text-gray-800">Google (The Creator)</span>
          <span className="text-xs text-gray-400 group-hover:text-blue-500">Select →</span>
        </button>

        {/* Option 2 */}
        <button
          onClick={() => setOutcome("user")}
          className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-all group"
        >
          <span className="font-semibold text-gray-800">You (The Engineer)</span>
          <span className="text-xs text-gray-400 group-hover:text-blue-500">Select →</span>
        </button>
      </div>

      {outcome === "google" && (
        <div className="mt-6 p-4 bg-red-100 text-red-900 rounded-lg border border-red-200 flex gap-3 animate-pulse">
          <XCircle className="w-6 h-6 flex-shrink-0" />
          <div>
            <span className="font-bold block">WRONG. Case Dismissed.</span>
            <p className="text-sm mt-1">
              Google argues Genie 3 is a "service," not a product. Their Terms of Service specifically disclaim 
              fitness for safety-critical tasks. The court rules the error was a "foreseeable statistical anomaly."
            </p>
          </div>
        </div>
      )}

      {outcome === "user" && (
        <div className="mt-6 p-4 bg-blue-50 text-blue-900 rounded-lg border border-blue-200 flex gap-3">
          <Gavel className="w-6 h-6 flex-shrink-0" />
          <div>
            <span className="font-bold block">CORRECT (Unfortunately).</span>
            <p className="text-sm mt-1">
              You are the <strong>"Moral Crumple Zone."</strong> The law says you should not have relied on 
              experimental AI. You absorb the full liability for a "Black Box" error you couldn't see.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}