let subtotal = -1e6;

switch (true) {
  case subtotal < 0:
    console.log("subtotal: invalid");
    break;
  case subtotal >= 5e5:
    console.log(
      `subtotal: Rp.${subtotal - (subtotal * 5) / 100}, kamu dapat diskon 5%`
    );
    break;
  case subtotal > 1e6:
    console.log(
      `subtotal: Rp.${subtotal - (subtotal * 10) / 100} kamu dapat diskon 10%`
    );
    break;
  default:
    console.log(`subtotal: Rp.${subtotal}`);
    break;
}
