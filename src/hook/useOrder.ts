import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([]);
    const [tip, setTip] = useState(0);

    const addItem = (item: MenuItem) => {
        const itemExist = order.find(orderId => orderId.id === item.id);
        if (itemExist) {
            const updateOrder = order.map(orderItem => orderItem.id === item.id ?
                { ...orderItem, quantity: orderItem.quantity + 1 } :
                orderItem
            );
            setOrder(updateOrder)
            console.log(order);
            

        } else {
            const newOrder = { ...item, quantity: 1 };
            console.log(newOrder);
            
            setOrder([...order, newOrder])
            console.log(order);

        }

    }

    const deleteItem = (id: MenuItem['id']) => {
        setOrder(order.filter(idOrder => idOrder.id !== id))
    }

    const placeOrder = () => {
        setOrder([]);
        setTip(0);
        
    }

    return {
        order,
        tip,
        setTip,
        addItem,
        deleteItem,
        placeOrder
    }
}