import { Dispatch, SetStateAction } from "react"



const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]

type TipPercentageForm = {
    setTip: Dispatch<SetStateAction<number>>,
    tip: number
}

export default function TipPercentegeForm({ setTip, tip }: TipPercentageForm) {
    return (
        <div className="text-left">
            <h3 className="font-black text-2xl">Propina:</h3>
            <form className="mt-2">
                {tipOptions.map(tipOption => (
                    <div key={tipOption.id}>
                        <label className="mr-4" htmlFor={tipOption.id}>{tipOption.label}</label>
                        <input
                            id={tipOption.id}
                            type="radio"
                            name="tip"
                            value={tipOption.value}
                            onChange={e => setTip(+e.target.value)}
                            checked={tipOption.value === tip}
                        />
                    </div>
                ))}
            </form>
        </div>
    )
}

