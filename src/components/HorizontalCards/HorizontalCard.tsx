import { currency } from "../../utilities/helpers"
import "./HorizontalCard.scss"
export default function HorizontalCard() {
  return (
    <div className="horizontal-card shadowed p-3 container-fluid pointer">
      <div className="row justify-content-center align-items-center">
        <div className="col-2 d-flex justify-content-center align-items-center mx-3">
          <span
            className={`material-symbols-outlined me-2 p-2 shadowed`}
            role="button">
            account_balance
          </span>
        </div>
        <div className="col d-flex flex-column p-2">
          <span className="fw-bolder section-title">Main Account</span>
          <span>{currency(384954874)}</span>
        </div>
      </div>
    </div>
  )
}
