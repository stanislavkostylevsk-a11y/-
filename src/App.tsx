import React, { useState } from "react";
import { Header } from "./components/Header";
import { LandingPageStudio } from "./components/LandingPageStudio";
import { GoogleAiProductionSuite } from "./components/GoogleAiProductionSuite";
import { PersonaDossier } from "./components/PersonaDossier";
import { InstagramMockup } from "./components/InstagramMockup";
import { ReelsEngine } from "./components/ReelsEngine";
import { InfoproductStudio } from "./components/InfoproductStudio";
import { AiGeneratorLab } from "./components/AiGeneratorLab";
import { TechStackGuide } from "./components/TechStackGuide";
import { StrategyExportModal } from "./components/StrategyExportModal";
import { Trees, Sparkles, Instagram, Flame, BookOpen, Cpu, ShieldCheck, Heart } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("landing-page");
  const [isExportOpen, setIsExportOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Navigation Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenExport={() => setIsExportOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === "landing-page" && <LandingPageStudio />}
        {activeTab === "google-ai" && <GoogleAiProductionSuite />}
        {activeTab === "persona" && <PersonaDossier />}
        {activeTab === "instagram" && <InstagramMockup />}
        {activeTab === "reels" && <ReelsEngine />}
        {activeTab === "infoproduct" && <InfoproductStudio />}
        {activeTab === "ai-lab" && <AiGeneratorLab />}
        {activeTab === "tech-stack" && <TechStackGuide />}
      </main>

      {/* Export Strategy Modal */}
      <StrategyExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
      />

      {/* Atmospheric Footer */}
      <footer className="border-t border-stone-800/80 bg-stone-950 py-8 text-xs text-stone-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-stone-400">
            <Trees className="h-4 w-4 text-emerald-400" />
            <span className="font-['Cinzel'] font-bold text-stone-300">ЖДАН ТАЁЖНЫЙ</span>
            <span>• Экосистема запуска AI-блогера по здоровью и долголетию</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-stone-400">
            <span>Google Imagen 3 • Google Veo 2 • NotebookLM • Google Cloud TTS</span>
            <span className="text-stone-700">•</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <Sparkles className="h-3 w-3" />
              Gemini 3.7 / 2.5 Flash Engine
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

