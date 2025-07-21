// src/lib/actions/order.actions.ts

export function calcDeliveryDateAndPrice(address: string) {
  // Demo logic
  return {
    deliveryDate: new Date().toISOString(),
    price: 100
  }
}
