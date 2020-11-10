export default (data) => (
  data.map((item) => (
    {
      ...item,
      daysRemaining: item.days_remaining,
      donationReceived: item.donation_received,
      donationPercentage: item.donation_percentage,
    }
  ))
);
