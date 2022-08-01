import "./HorizontalCard.scss"

interface HorizontalCard {
  icon: string
  title: string
  text: string | number
}

export default function HorizontalCard({
  icon = "account_balance",
  title = "Illusion",
  text = Math.random() * 9999999999,
}: HorizontalCard) {
  return (
    <div className="horizontal-card shadowed p-3 container-fluid pointer">
      <div className="row justify-content-center align-items-center">
        <div className="col-2 d-flex justify-content-center align-items-center mx-3">
          <span
            className={`material-symbols-outlined me-2 p-2 shadowed`}
            role="button">
            {icon}
          </span>
        </div>
        <div className="col d-flex flex-column p-2">
          <span className="fw-bolder section-title">{title}</span>
          <span>{text}</span>
        </div>
      </div>
    </div>
  )
}
