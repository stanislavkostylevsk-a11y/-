import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutCourseSection from './components/AboutCourseSection';
import AuthorSection from './components/AuthorSection';
import TariffsSection from './components/TariffsSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import StickyMobileBar from './components/StickyMobileBar';
import OrderModal from './components/OrderModal';
import VideoIntroModal from './components/VideoIntroModal';
import DirectChatModal from './components/DirectChatModal';
import LegalModal from './components/LegalModal';

export default function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedTariffId, setSelectedTariffId] = useState<string>('solo');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isDirectChatOpen, setIsDirectChatOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'offer' | 'privacy' | null>(null);

  const handleOpenOrder = (tariffId: string = 'solo') => {
    setSelectedTariffId(tariffId);
    setIsOrderModalOpen(true);
  };

  const handleCloseOrder = () => {
    setIsOrderModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#24201D] font-sans selection:bg-[#EAE1D7] selection:text-[#1C1714]">
      {/* Top Bar & Header Navigation */}
      <Header
        onOpenOrder={() => handleOpenOrder('solo')}
        onOpenDirectChat={() => setIsDirectChatOpen(true)}
      />

      {/* Main Landing Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenOrder={() => handleOpenOrder('solo')}
          onOpenDirectChat={() => setIsDirectChatOpen(true)}
          onPlayVideoModal={() => setIsVideoModalOpen(true)}
        />

        {/* 2. Core Course Details: About, Learning Outcomes, Format & Key Benefits */}
        <AboutCourseSection
          onOpenOrder={() => handleOpenOrder('solo')}
        />

        {/* 4. About Author: Amaliya */}
        <AuthorSection
          onOpenDirectChat={() => setIsDirectChatOpen(true)}
        />

        {/* 7. Pricing: Single Tariff 'Я сама' 1 490 ₽ */}
        <TariffsSection
          onSelectTariff={handleOpenOrder}
        />

        {/* 8. FAQ Section */}
        <FaqSection
          onOpenDirectChat={() => setIsDirectChatOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenOrder={() => handleOpenOrder('solo')}
        onOpenDirectChat={() => setIsDirectChatOpen(true)}
        onOpenLegal={(type) => setLegalModalType(type)}
      />

      {/* Persistent Mobile Bottom Bar for Instagram Traffic */}
      <StickyMobileBar
        onOpenOrder={() => handleOpenOrder('solo')}
      />

      {/* Modals */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={handleCloseOrder}
        initialTariffId={selectedTariffId}
        onOpenLegal={(type) => setLegalModalType(type)}
      />

      <VideoIntroModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        onOpenOrder={() => {
          setIsVideoModalOpen(false);
          handleOpenOrder('solo');
        }}
      />

      <DirectChatModal
        isOpen={isDirectChatOpen}
        onClose={() => setIsDirectChatOpen(false)}
        onOpenOrder={() => {
          setIsDirectChatOpen(false);
          handleOpenOrder('solo');
        }}
      />

      <LegalModal
        isOpen={Boolean(legalModalType)}
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
