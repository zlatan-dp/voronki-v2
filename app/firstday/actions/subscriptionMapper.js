export const mapSubscriptionsToPlan = (apiData) => {
  if (!Array.isArray(apiData)) return [];

  return apiData.map((item) => {
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

    return {
      id: item.id,
      ulid: item.ulid,
      planName: item.name,
      duration,
      days,
      totalPrice: Number(item.price),
      currency: item.currency?.symbol || "$",
      periodType: item.period_type,
      priceRenew: Number(item.price_renew),
      periodTypeRenew: item.period_type_renew,
    };
  });
};
