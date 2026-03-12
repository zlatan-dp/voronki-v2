export const mapSubscriptionsToPlan = (apiData) => {
  if (!Array.isArray(apiData)) return [];

  return apiData.map((item, index) => {
    let days = 0;

    if (item.period_type === "day") {
      days = item.period;
    } else if (item.period_type === "week") {
      days = item.period * 7;
    } else if (item.period_type === "month") {
      days = item.period * 30;
    } else if (item.period_type === "year") {
      days = item.period * 365;
    } else {
      days = item.period;
    }

    const duration = `${item.period} ${item.period_type}${item.period > 1 ? "s" : ""}`;

    const totalPrice = item.trial ? 0 : Number(item.price);

    return {
      id: index + 1,
      ulid: item.ulid,
      planName: item.name,
      duration,
      days,
      totalPrice,
      currency: item.currency?.symbol || "$",
      priceRenew: Number(item.price_renew),
      periodType: item.period_type_renew,
    };
  });
};
