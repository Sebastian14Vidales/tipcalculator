import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatPrice } from "../utils/formatPrice";

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}

export default function OrderTotals({ order, tip, placeOrder }: OrderTotalsProps) {

    const subTotalAmount = useMemo(() => order.reduce((totalAccount, item) => totalAccount + (item.price * item.quantity), 0), [order])
    const tipAmount = useMemo(() => subTotalAmount * tip, [tip, order])
    const totalAmount = useMemo(() => subTotalAmount + tipAmount, [tip, order])


    return (
        <>
            <div className="text-left space-y-3">
                <h1 className="font-black text-3xl mb-3">Totales y Propina: </h1>
                <p>Subtotal a Pagar: {' '}
                    <span className="font-bold">{formatPrice(subTotalAmount)}</span>
                </p>
                <p>Propina: {' '}
                    <span className="font-bold">{formatPrice(tipAmount)}</span>
                </p>
                <p>Total a Pagar: {' '}
                    <span className="font-bold">{formatPrice(totalAmount)}</span>
                </p>

            </div>
            <button
                className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-20"
                disabled={totalAmount === 0}
                onClick={placeOrder}
            >
                Guardar Orden
            </button>
        </>
    )
}
