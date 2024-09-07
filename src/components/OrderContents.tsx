import { OrderItem, MenuItem } from "../types"
import { formatPrice } from "../utils/formatPrice"

type OrderContentProps = {
    order: OrderItem[],
    deleteItem: (id: MenuItem['id']) => void
}

export default function OrderContents({ order, deleteItem }: OrderContentProps) {

    return (
        <div>
            <h2 className="font-black text-4xl">Consumo</h2>
            <div className="h-full flex flex-col justify-between">
                <div className="mt-10 gap-8">
                    {order.map(orderItem => (
                        <div key={orderItem.id} className="grid grid-cols-7 mb-4">
                            <div className="col-span-3">
                                <p className="text-left ">{orderItem.name} <br /> <span className="font-black text-center">{formatPrice(orderItem.price)}</span></p>
                            </div>
                            <div className="col-span-1 flex items-center justify-center">
                                <p className="font-black text-teal-400">{formatPrice(orderItem.price * orderItem.quantity)}</p>
                            </div>
                            <div className="col-span-2 flex items-center justify-center">
                                <p className="font-bold">Cantidad: {orderItem.quantity}</p>
                            </div>
                            <div className="col-span-1 flex items-center justify-center">
                                <button
                                    className="w-8 h-8 bg-red-600 rounded-full text-white font-black"
                                    onClick={() => deleteItem(orderItem.id)}
                                >

                                    X
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
