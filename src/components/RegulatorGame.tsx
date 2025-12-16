"use client";
import { useState } from "react";
import { Eye, FileText, Network, Search, CheckCircle, XCircle } from "lucide-react";

export default function RegulatorGame() {
  const [level, setLevel] = useState<"blackbox" | "disclosure" | "glassbox">("blackbox");
  const [auditResult, setAuditResult] = useState<string | null>(null);

  const handleAudit = () => {
    if (level === "blackbox") {
      setAuditResult("fail_complexity");
    } else if (level === "disclosure") {
      setAuditResult("fail_relevance");
    } else {
      setAuditResult("success");
    }
  };

  return (
    <div className="my-12 bg-slate-900 text-white rounded-xl overflow-hidden shadow-xl not-prose border border-slate-700">
      
      {/* Header */}
      <div className="p-6 border-b border-slate-700 bg-slate-800">
        <h4 className="font-sans font-bold text-lg flex items-center gap-2">
          <Search className="w-5 h-5 text-blue-400" /> Interactive: Audit the Algorithm
        </h4>
        <p className="text-slate-400 text-sm mt-1">
          Your goal: Find the "Physics Bug" that causes the robot to crash. Choose a regulatory framework.
        </p>
      </div>

      {/* Control Panel */}
      <div className="flex border-b border-slate-700 divide-x divide-slate-700">
        <button 
          onClick={() => { setLevel("blackbox"); setAuditResult(null); }}
          className={`flex-1 p-4 text-sm font-bold flex items-center justify-center gap-2 transition-colors ${level === "blackbox" ? "bg-slate-700 text-white" : "hover:bg-slate-800 text-slate-400"}`}
        >
          <Network className="w-4 h-4" /> Black Box
        </button>
        <button 
          onClick={() => { setLevel("disclosure"); setAuditResult(null); }}
          className={`flex-1 p-4 text-sm font-bold flex items-center justify-center gap-2 transition-colors ${level === "disclosure" ? "bg-slate-700 text-white" : "hover:bg-slate-800 text-slate-400"}`}
        >
          <FileText className="w-4 h-4" /> Disclosure
        </button>
        <button 
          onClick={() => { setLevel("glassbox"); setAuditResult(null); }}
          className={`flex-1 p-4 text-sm font-bold flex items-center justify-center gap-2 transition-colors ${level === "glassbox" ? "bg-slate-700 text-white" : "hover:bg-slate-800 text-slate-400"}`}
        >
          <Eye className="w-4 h-4" /> Glass Box
        </button>
      </div>

      {/* Visualization Screen */}
      <div className="p-8 min-h-[250px] flex flex-col items-center justify-center bg-slate-950 relative">
        
        {level === "blackbox" && (
          <div className="text-center animate-in fade-in">
            <div className="flex justify-center gap-1 mb-4 flex-wrap max-w-xs opacity-50">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
              ))}
            </div>
            <p className="text-slate-500 font-mono text-xs">
              0.2394, 0.9921, -0.221, 0.003, 1.229... <br/>
              (17 billion parameters hidden)
            </p>
          </div>
        )}

        {level === "disclosure" && (
          <div className="text-left w-full max-w-sm bg-slate-900 p-4 rounded border border-slate-700 animate-in fade-in">
             <h5 className="text-xs uppercase text-slate-500 font-bold mb-2">Training Data Manifest</h5>
             <ul className="text-sm text-slate-300 space-y-1 font-mono">
               <li>• YouTube_Dataset_v4 (2PB)</li>
               <li>• CommonCrawl_2024 (50TB)</li>
               <li>• Reddit_Scrape_Final (12TB)</li>
             </ul>
             <p className="mt-4 text-xs text-orange-400 italic">
               Warning: Does not show logic processing.
             </p>
          </div>
        )}

        {level === "glassbox" && (
          <div className="text-left w-full max-w-sm bg-blue-900/20 p-4 rounded border border-blue-500/50 animate-in fade-in">
            <h5 className="text-xs uppercase text-blue-400 font-bold mb-2">Interpretable Logic Tree</h5>
            <code className="text-sm text-blue-100 block">
              IF road_condition == "wet":<br/>
              &nbsp;&nbsp;friction_coefficient = 0.8<br/>
              <span className="bg-red-500/50 text-white px-1 font-bold">ELSE IF road_condition == "snow":</span><br/>
              <span className="bg-red-500/50 text-white px-1 font-bold">&nbsp;&nbsp;friction_coefficient = 1.0 (ERROR)</span><br/>
              ELSE:<br/>
              &nbsp;&nbsp;friction_coefficient = 0.9
            </code>
          </div>
        )}

        {/* Audit Result Overlay */}
        {auditResult && (
           <div className="absolute inset-0 bg-slate-900/90 flex items-center justify-center p-6 text-center animate-in zoom-in-95">
             <div>
               {auditResult === "fail_complexity" && (
                 <>
                   <XCircle className="w-12 h-12 text-red-500 mx-auto mb-3" />
                   <h3 className="text-xl font-bold text-red-400">Audit Failed</h3>
                   <p className="text-sm text-slate-300 mt-2">
                     You cannot audit a neural network by looking at the weights. 
                     The logic is uninterpretable.
                   </p>
                 </>
               )}
               {auditResult === "fail_relevance" && (
                 <>
                   <XCircle className="w-12 h-12 text-orange-500 mx-auto mb-3" />
                   <h3 className="text-xl font-bold text-orange-400">Audit Failed</h3>
                   <p className="text-sm text-slate-300 mt-2">
                     Knowing the <em>inputs</em> (Disclosure) doesn't tell you how the model <em>thinks</em>. 
                     You still can't find the bug.
                   </p>
                 </>
               )}
               {auditResult === "success" && (
                 <>
                   <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
                   <h3 className="text-xl font-bold text-green-400">Bug Found!</h3>
                   <p className="text-sm text-slate-300 mt-2">
                     Because the model is a "Glass Box," you saw that it set snow friction to 1.0 (High). 
                     You prevented the crash.
                   </p>
                 </>
               )}
               <button 
                 onClick={() => setAuditResult(null)}
                 className="mt-4 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded text-sm transition-colors"
               >
                 Try Another Method
               </button>
             </div>
           </div>
        )}
      </div>

      {/* Action Bar */}
      <div className="p-4 bg-slate-800 border-t border-slate-700 text-center">
        <button 
          onClick={handleAudit}
          disabled={!!auditResult}
          className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-2 rounded font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Attempt Audit
        </button>
      </div>
    </div>
  );
}