let subtotal = 5e5;
if (subtotal > 0) {
  if (subtotal > 1e6) {
    console.log(
      `subtotal: Rp.${subtotal - (subtotal * 10) / 100} kamu dapat diskon 10%`
    );
  } else if (subtotal >= 5e5) {
    console.log(
      `subtotal: Rp.${subtotal - (subtotal * 5) / 100} kamu dapat diskon 5%`
    );
  } else {
    console.log(`subtotal: Rp.${subtotal}`);
  }
} else {
  console.log("subtotal: invalid");
}
