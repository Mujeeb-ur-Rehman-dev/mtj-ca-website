import React, { createContext, useContext, useState } from 'react';
import DonationPopup from '../components/DonationPopup/DonationPopup';
import { campaigns } from '../components/data/campaigns';

const DonationContext = createContext();

export const DonationProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentCampaign, setCurrentCampaign] = useState(null);

  const openDonation = (campaignKey) => {
    const campaign = campaigns[campaignKey];

    if (!campaign) {
      console.warn(`Campaign "${campaignKey}" not found in campaigns.js`);
      return;
    }

    setCurrentCampaign(campaign);
    setIsOpen(true);
  };

  const closeDonation = () => {
    setIsOpen(false);
  };

  return (
    <DonationContext.Provider value={{ openDonation, closeDonation }}>
      {children}

      {/* Popup poori app mein sirf ek dafa render hoga */}
      {currentCampaign && (
        <DonationPopup
          isOpen={isOpen}
          onClose={closeDonation}
          data={currentCampaign}
        />
      )}
    </DonationContext.Provider>
  );
};

// Custom Hook
export const useDonation = () => {
  const context = useContext(DonationContext);

  if (!context) {
    throw new Error('useDonation must be used inside DonationProvider');
  }

  return context;
};