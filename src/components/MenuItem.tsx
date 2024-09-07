import type { MenuItem } from "../types"

type MenuItemsProps = {
    item: MenuItem
    addItem: (item: MenuItem) => void 
}


export default function MenuItem({ item, addItem }: MenuItemsProps) {

    return (
        <button
            className="border-2 border-teal-400 w-full p-3 flex justify-between hover:bg-teal-200 rounded-md"
            onClick={() => addItem(item)}
        >
            <p>{item.name}</p>
            <p className="font-black">Precio: ${item.price}</p>
        </button>
    )
}
