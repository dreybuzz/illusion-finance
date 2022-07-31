import "./NavBar.scss"
import { useNavigate } from "react-router-dom"

export default function NavBar() {
  const schema = [
    { title: "Home", icon: "home" },
    {
      title: "Accounts",
      children: [
        {
          title: "Accounts",
          icon: "account_balance",
        },
        {
          title: "Open New Account",
          icon: "account_balance_wallet",
        },
      ],
    },
    {
      title: "Cards",
      children: [
        {
          title: "Manage Cards",
          icon: "credit_card",
        },
        {
          title: "Virtual Cards",
          icon: "add_card",
        },
        {
          title: "Replacements",
          icon: "find_replace",
        },
      ],
    },
    {
      title: "Transfer",
      children: [
        {
          title: "Beneficiaries",
          icon: "contacts",
        },
        {
          title: "Domestic",
          icon: "transfer_within_a_station",
        },
        {
          title: "Local",
          icon: "move_up",
        },
        {
          title: "International",
          icon: "public",
        },
      ],
    },
    {
      title: "Analytics",
      children: [
        {
          title: "Transactions History",
          icon: "history",
        },
        {
          title: "Charts",
          icon: "monitoring",
        },
      ],
    },
    {
      title: "Loans",
      children: [
        {
          title: "Request New Loan",
          icon: "credit_score",
        },

        {
          title: "Manage Loans",
          icon: "cases",
        },
      ],
    },

    {
      title: "Support",
      children: [
        {
          title: "Open New Ticket",
          icon: "support",
        },

        {
          title: "View Tickets",
          icon: "airplane_ticket",
        },

        {
          title: "Live Chat",
          icon: "chat",
        },
      ],
    },
  ]

  const navigate = useNavigate()

  return (
    <span id="navbar" className="">
      {schema.map((section, index) => {
        return (
          <div
            key={index}
            className={`mb-5 d-flex align-items-center ${
              !section.children && "nav-item p-2"
            }`}>
            {/* Icon */}
            {section.icon && (
              <span className={`material-symbols-outlined me-2`} role="button">
                {section.icon}
              </span>
            )}

            {/* Section Title */}
            <span
              className="d-flex flex-column pointer"
              onClick={() => navigate(`${section.title.toLowerCase()}/`)}>
              <span
                className={`${
                  !section.icon ? "section-title" : "section-title-text"
                }`}>
                {section.title}
              </span>

              {section.children && (
                <span className="d-flex flex-column p-1 ms-2">
                  {section.children.map((child, index) => {
                    return (
                      <span
                        className="mt-3 d-flex align-items-center p-2 nav-item"
                        key={index}
                        onClick={() =>
                          navigate(
                            `${section.title.toLowerCase()}/${child.title.toLowerCase()}`
                          )
                        }>
                        <span
                          className={`material-symbols-outlined me-2`}
                          role="button">
                          {child.icon}
                        </span>
                        <span className="fw-bolder fs-6">{child.title}</span>
                      </span>
                    )
                  })}
                </span>
              )}
            </span>
          </div>
        )
      })}
    </span>
  )
}
