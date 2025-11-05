let subtotal = 10;

switch (true) {
  case subtotal > 0:
    switch (true) {
      case subtotal >= 5e5:
        console.log(subtotal - (subtotal * 5) / 100);
        break;
      case subtotal > 1e6:
        console.log(subtotal - (subtotal * 5) / 100);
        break;
      default:
        console.log(subtotal);
        break;
    }
    break;
  default:
    console.log("subtotal: invalid");
    break;
}
