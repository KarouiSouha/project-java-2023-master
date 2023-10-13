export const getPricedProducts = (products, price) =>
  price.length
    ? products.filter(({ discountedPrice }) =>
        price.some(
          (amount) =>
          discountedPrice >= amount.min && discountedPrice <= amount.max
        )
      )
    : products;
