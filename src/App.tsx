import { useState, useEffect } from "react";
import BrowNavbar from "./components/BrowNavbar";
import Hero from "./components/Hero";
import PainPoints from "./components/PainPoints";
import AboutCourseSection from "./components/AboutCourseSection";
import CourseCurriculumSection from "./components/CourseCurriculumSection";
import TariffsSection from "./components/TariffsSection";
import AuthorSection from "./components/AuthorSection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import StickyMobileBar from "./components/StickyMobileBar";
import OrderModal from "./components/OrderModal";
import DirectChatModal from "./components/DirectChatModal";
import VideoIntroModal from "./components/VideoIntroModal";
import { LegalModal, LegalTabType } from "./components/LegalModal";

export default function App() {
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [selectedTariffId, setSelectedTariffId] = useState<string>("solo");
  const [isDirectChatOpen, setIsDirectChatOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<LegalTabType>("offer");

  const handleOpenOrder = (tariffId: string = "solo") => {
    setSelectedTariffId(tariffId);
    setIsOrderOpen(true);
  };

  const handleOpenLegal = (tab: "offer" | "privacy" | "requisites") => {
    setLegalTab(tab as LegalTabType);
    setIsLegalOpen(true);
  };

  // Listen to hash changes for direct deep linking (#order, #faq, #offer, #privacy)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === "#order" || hash === "#buy") {
        handleOpenOrder("solo");
      } else if (hash === "#offer" || hash === "#oferta") {
        handleOpenLegal("offer");
      } else if (hash === "#privacy" || hash === "#policy") {
        handleOpenLegal("privacy");
      } else if (hash === "#direct" || hash === "#chat") {
        setIsDirectChatOpen(true);
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1714] selection:bg-[#E07A5F]/20 selection:text-[#1C1714] font-['Plus_Jakarta_Sans',sans-serif]">
      {/* 1. Top Navigation Bar */}
      <BrowNavbar
        onOpenOrder={() => handleOpenOrder("solo")}
        onOpenDirectChat={() => setIsDirectChatOpen(true)}
      />

      <main>
        {/* 2. Hero Section: Main Offer & Author Badge */}
        <Hero
          onOpenOrder={handleOpenOrder}
          onOpenDirectChat={() => setIsDirectChatOpen(true)}
          onPlayVideoModal={() => setIsVideoModalOpen(true)}
        />

        {/* 3. Pain Points: Знакомо? Утренние мучения со сборами */}
        <PainPoints onOpenOrder={() => handleOpenOrder("solo")} />

        {/* 4. About the Course & What You Will Learn */}
        <AboutCourseSection onOpenOrder={() => handleOpenOrder("solo")} />

        {/* 5. Course Curriculum (Блоки 1-5) */}
        <div id="course-program">
          <CourseCurriculumSection onOpenOrder={() => handleOpenOrder("solo")} />
        </div>

        {/* 6. Tariff & Pricing */}
        <TariffsSection onSelectTariff={handleOpenOrder} />

        {/* 8. About the Author: Амалия Акопян */}
        <AuthorSection onOpenDirectChat={() => setIsDirectChatOpen(true)} />

        {/* 9. FAQ Section: Вопросы и ответы */}
        <FaqSection onOpenDirectChat={() => setIsDirectChatOpen(true)} />
      </main>

      {/* 10. Footer with Legal Data, Links and Contacts */}
      <Footer
        onOpenOrder={() => handleOpenOrder("solo")}
        onOpenDirectChat={() => setIsDirectChatOpen(true)}
        onOpenLegal={handleOpenLegal}
      />

      {/* 11. Sticky Mobile Booking Bar */}
      <StickyMobileBar onOpenOrder={() => handleOpenOrder("solo")} />

      {/* MODALS */}
      {/* Order & Payment Modal */}
      <OrderModal
        isOpen={isOrderOpen}
        onClose={() => setIsOrderOpen(false)}
        initialTariffId={selectedTariffId}
        onOpenLegal={handleOpenLegal}
      />

      {/* Direct Chat / Consultation in Telegram Modal */}
      <DirectChatModal
        isOpen={isDirectChatOpen}
        onClose={() => setIsDirectChatOpen(false)}
        onOpenOrder={() => {
          setIsDirectChatOpen(false);
          handleOpenOrder("solo");
        }}
      />

      {/* Video Intro Modal */}
      <VideoIntroModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        onOpenOrder={() => {
          setIsVideoModalOpen(false);
          handleOpenOrder("solo");
        }}
      />

      {/* Legal Documents Modal (Оферта, Политика, Реквизиты) */}
      <LegalModal
        isOpen={isLegalOpen}
        activeTab={legalTab}
        onClose={() => setIsLegalOpen(false)}
        onTabChange={(tab) => setLegalTab(tab)}
      />
    </div>
  );
}
