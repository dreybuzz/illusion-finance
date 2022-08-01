import { currency } from "../../utilities/helpers"

interface Transaction {
  type: "credit" | "debit"
  amount: number
  description: string
}

export default function Transaction({
  type,
  amount,
  description,
}: Transaction) {
  return (
    <div className="container-fluid shadowed">
      <div className="row p-3 gy-3 align-items-center">
        {/* Icon */}
        <div className="col-2">
          <span
            className={`material-symbols-outlined me-2 p-2 shadowed fs-6 ${
              type === "credit" ? "bg-success" : "bg-danger"
            }`}
            role="button">
            {type === "credit" ? "south_west" : "north_east"}
          </span>
        </div>

        {/* Description */}
        <div className="col-6 section-title">{description}</div>

        {/* Amount */}
        <div className="col d-flex justify-content-end align-items-center">
          {currency(amount)}
        </div>
      </div>
    </div>
  )
}
