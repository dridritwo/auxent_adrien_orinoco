export function placeDecimal(teddy) {
    teddy.price = (teddy.price / 100).toFixed(2);
    return teddy;
  }