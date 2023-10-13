export const getCategoryWiseProducts = (products, categories) =>
  !categories.length
    ? products
    : products.filter((product) =>
        categories.some(
          (category) =>
            product.categoryName.toUpperCase() === category.toUpperCase()
        )
      );
