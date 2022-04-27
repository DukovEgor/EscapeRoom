export const getFilteredOffers = (offers, activeTab) => {
  if (activeTab === 'all') {
    return offers;
  }

  return offers.filter((offer) => offer.type === activeTab);
};
