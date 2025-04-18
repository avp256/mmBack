const parceProduct = (product) => {
  const parsedProduct = {
    barcode: product.barcode,
    data: {
      ...product.data,
    },
  };

  for (const key in product.data) {
    if (Object.hasOwn(product.data, key)) {
      const value = product.data[key];

     
      if (typeof value === "boolean") {
        parsedProduct.data[key] = value;
        continue;
      }
        if (key === "product_code") {
 
          parsedProduct.data[key] = value.toString().replace(/\s/g, "");
          continue;
      }
      const parsedValue = parseFloat(value);
      if (!isNaN(parsedValue) && value !== null && value !== "") {
        parsedProduct.data[key] = parsedValue;
      } else {
        parsedProduct.data[key] = value;
      }
    }
  }

  return parsedProduct;
};

module.exports = parceProduct;
