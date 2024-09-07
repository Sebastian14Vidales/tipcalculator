import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentegeForm from "./components/TipPercentegeForm";
import { menuItems } from "./data/db"
import useOrder from "./hook/useOrder";

function App() {

  const { order, tip, setTip, addItem, deleteItem, placeOrder } = useOrder();

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-4xl text-center font-black">Calculadora de Propinas</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2 gap-4 text-center">
        <div>
          <h2 className="mb-6 font-black text-4xl bg-teal-400 py-2">Menú</h2>
          <div className="space-y-2">
            {menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {order.length > 0 ? (
            <>
              <OrderContents
                order={order}
                deleteItem={deleteItem}
              />

              <TipPercentegeForm
                setTip={setTip}
                tip={tip}
              />

              <OrderTotals
                order={order}
                tip={tip}
                placeOrder={placeOrder}
              />
            </>
          ) :
            <p className="text-center">La orden está vacía</p>
          }
        </div>
      </main>
    </>
  )
}

export default App
