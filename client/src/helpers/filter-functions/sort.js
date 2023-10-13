export const getSortedProducts = (products, sort) =>
  sort
    ? products.sort((a, b) =>
        sort === "lowToHigh"
          ? a.discountedPrice - b.discountedPrice
          : b.discountedPrice - a.discountedPrice
      )
    : products;
