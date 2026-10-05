/** Flat nationwide delivery charge (PKR). */
export const DELIVERY_CHARGE = 300;

export function withDelivery(subtotal: number) {
  return subtotal + DELIVERY_CHARGE;
}
