import { useState } from "react"
import {
  currency,
  generateRandomColor,
  generateRandomNumber,
} from "../../utilities/helpers"
import HorizontalCard from "../../components/HorizontalCards/HorizontalCard"
import ExchangeWidget from "../../components/ExchangeWidget/ExchangeWidget"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Bar } from "react-chartjs-2"
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function Home() {
  const allBeneficiaries = [
    {
      name: "Rica Blaby",
      type: "Local",
      account_number: 2068375534,
      IBAN: "TR65 7175 7EPO JFQZ TJM6 1IGF UA",
    },
    {
      name: "Clair Heatley",
      type: "Local",
      account_number: 7848374378,
      IBAN: "MT67 LBKT 5900 6OW3 ANVO LRDH 2HVI QNH",
    },
    {
      name: "Larine Barbey",
      type: "International",
      account_number: 9472897094,
      IBAN: "IT60 J864 0254 290Q 6DGB X9XC IMJ",
    },
    {
      name: "Samaria Berick",
      type: "Local",
      account_number: 3955194769,
      IBAN: "MR83 1171 3440 3621 4312 6879 995",
    },
    {
      name: "Ann-marie Bagby",
      type: "International",
      account_number: 8456737920,
      IBAN: "SE20 6148 3727 4865 4426 5330",
    },
    {
      name: "Larisa Fearn",
      type: "International",
      account_number: 4785366039,
      IBAN: "BG10 CRUD 0355 13CZ EHSU LO",
    },
    {
      name: "Che Axup",
      type: "Domestic",
      account_number: 2010964028,
      IBAN: "BE84 9168 9424 3520",
    },
    {
      name: "Kathi Hasley",
      type: "Local",
      account_number: 2710815336,
      IBAN: "SA25 326V LBMR 4QMP XEC5 T8NQ",
    },
    {
      name: "Fayina Parlour",
      type: "Local",
      account_number: 8046029128,
      IBAN: "PS80 KSGJ TT4H TIVH BSPL JI9M 9HRG Y",
    },
    {
      name: "Bobinette Dilleston",
      type: "Domestic",
      account_number: 8107898702,
      IBAN: "FR31 7055 4296 46WP 3PCT RT4B 247",
    },
    {
      name: "Danyette Codi",
      type: "Domestic",
      account_number: 3551842292,
      IBAN: "FR46 4063 8418 520B HZFI WGM1 D21",
    },
    {
      name: "Tim Medhurst",
      type: "International",
      account_number: 3903316689,
      IBAN: "KZ13 903D QVSX KV3B AW9U",
    },
    {
      name: "Benedetto Beeke",
      type: "Domestic",
      account_number: 3902634693,
      IBAN: "PK92 RWWC HBGT POPZ N43Y ROTJ",
    },
    {
      name: "Martynne Hayes",
      type: "International",
      account_number: 1707961175,
      IBAN: "ES95 6903 1357 2290 3814 0362",
    },
    {
      name: "Zechariah Mallon",
      type: "Local",
      account_number: 4344889383,
      IBAN: "AT36 1840 9399 7847 1987",
    },
  ]

  const internationalBanks = [
    "Industrial & Commercial Bank of China Limited",
    "China Construction Bank Corporation",
    "Agricultural Bank of China Limited",
    "Bank of China Limited",
    "BNP Paribas SA",
    "JPMorgan Chase Bank National Association",
    "Crédit Agricole SA",
    "China Development Bank",
    "MUFG Bank Ltd.",
    "Bank of America National Association",
    "JAPAN POST BANK Co Ltd",
    "Sumitomo Mitsui Banking Corporation",
    "Banco Santander SA",
    "Mizuho Bank Ltd",
    "Société Générale",
    "BPCE",
    "Wells Fargo Bank National Association",
    "Postal Savings Bank of China Co Ltd",
    "Citibank NA",
    "Bank of Communications Co Ltd",
    "Deutsche Bank AG",
    "Barclays Bank PLC",
    "The Toronto- Dominion Bank",
    "China Merchants Bank Co Ltd",
    "Intesa Sanpaolo SpA",
    "Royal Bank of Canada",
    "Shanghai Pudong Development Bank",
    "The Hongkong and Shanghai Banking Corporation Limited",
    "Industrial Bank Co Ltd",
    "ING Bank NV",
    "China Citic Bank Corporation Limited CNCB",
    "UniCredit SpA",
    "China Minsheng Banking Corporation Limited",
    "The Agricultural Development Bank of China",
    "UBS AG",
    "The Norinchukin Bank",
    "HSBC Bank plc",
    "Credit Suisse AG",
    "Banco Bilbao Vizcaya Argentaria SA",
    "The Bank of Nova Scotia",
    "China Everbright Bank Co Ltd",
    "Lloyds Bank Plc",
    "Standard Chartered Bank",
    "Coöperatieve Rabobank UA",
    "Banque Fédérative du Crédit Mutuel",
    "Australia and New Zealand Banking Group Limited",
    "DZ BANK AG Deutsche Zentral-Genossenschaftsbank",
    "Crédit Agricole Corporate and Investment Bank CACIB",
    "Bank of Montreal",
    "Commonwealth Bank of Australia",
  ]

  const localBanks = [
    "JPMorgan Chase",
    "Bank of America",
    "Citigroup",
    "Wells Fargo",
    "Goldman Sachs",
    "Morgan Stanley",
    "Charles Schwab Corporation",
    "U.S. Bancorp",
    "PNC Financial Services",
    "Truist Financial",
    "TD Bank, N.A.",
    "The Bank of New York Mellon",
    "Capital One",
    "TIAA",
    "State Street Corporation",
    "HSBC Bank USA",
    "USAA",
    "Fifth Third Bank",
    "BMO Harris Bank",
    "SVB Financial Group",
    "UBS",
    "Citizens Financial Group",
    "KeyCorp",
    "American Express",
    "Ally Financial",
    "Huntington Bancshares",
    "Barclays",
    "Ameriprise",
    "Northern Trust",
    "MUFG Union Bank",
    "RBC Bank",
    "BNP Paribas / Bank of the West",
    "Regions Financial Corporation",
    "Santander Bank",
    "M&T Bank",
    "Deutsche Bank",
    "Discover Financial",
    "Credit Suisse",
    "Comerica",
    "Synchrony Financial",
    "First Horizon National Corporation",
    "Popular, Inc.",
    "People's United Financial",
    "Raymond James Financial",
    "East West Bank",
    "CIBC Bank USA",
    "New York Community Bank",
    "First Citizens BancShares",
    "Synovus",
    "CIT Group",
    "Western Alliance Bank",
    "Mizuho Financial Group",
    "Cullen/Frost Bankers, Inc.",
    "Wintrust Financial",
    "BOK Financial Corporation",
    "John Deere Capital Corporation",
    "Valley National Bank",
    "South State Bank",
    "FNB Corporation",
    "UMB Financial Corporation",
    "Pinnacle Financial Partners",
    "Prosperity Bancshares",
    "Texas Capital Bank",
    "PacWest Bancorp",
    "Webster Bank",
    "Hancock Whitney",
    "BankUnited",
    "Commerce Bancshares",
    "Associated Banc-Corp",
    "MidFirst Bank",
    "Umpqua Holdings Corporation",
    "Stifel",
    "Sterling Bancorp",
    "United Bank (West Virginia)",
    "FirstBank Holding Co",
    "Investors Bank",
    "Flagstar Bank",
    "Arvest Bank",
    "Fulton Financial Corporation",
    "First National of Nebraska",
    "First Hawaiian Bank",
    "SMBC Americas Holdings Inc.",
    "Old National Bank",
    "Simmons Bank",
    "Bank of Hawaii",
    "Ameris Bancorp",
    "First Midwest Bank",
    "Glacier Bancorp , Inc",
    "First BanCorp",
    "Pacific Premier Bancorp , Inc.",
    "BCI Financial Group, Inc.",
    "Atlantic Union Bank",
    "Cathay Bank",
    "Cadence Bank",
    "Washington Federal",
    "Central Bancompany, Inc",
    "United Community Bank",
    "First Interstate Bancsystem, Inc.",
    "Customers Bancorp",
    "EB Acquisition Company LLC",
  ]

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Expenditures",
      },
    },
    scales: {
      x: {
        title: {
          display: false,
          text: "Weekday",
          padding: 5,
          font: {
            size: 17,
          },
        },
        ticks: {
          font: {
            weight: "bold",
          },
        },
      },
      y: {
        title: {
          display: false,
          text: "Amount",
          padding: 5,
          font: {
            size: 17,
          },
        },
        ticks: {
          font: {
            weight: "bold",
          },
        },
      },
    },
  }

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ]

  const data = {
    labels,
    datasets: [
      {
        label: "Month",
        data: [
          generateRandomNumber(1000, 99999),
          generateRandomNumber(1000, 99999),
          generateRandomNumber(1000, 99999),
          generateRandomNumber(1000, 99999),
          generateRandomNumber(1000, 99999),
          generateRandomNumber(1000, 99999),
          generateRandomNumber(1000, 99999),
        ],
        backgroundColor: [
          generateRandomColor(),
          generateRandomColor(),
          generateRandomColor(),
          generateRandomColor(),
          generateRandomColor(),
          generateRandomColor(),
          generateRandomColor(),
        ],
      },
    ],
  }

  const [from, setFrom] = useState("primary")
  const [to, setTo] = useState("beneficiary")
  const [beneficiary, setBeneficiary] = useState(allBeneficiaries[0].IBAN)
  const [beneficiaryDetails, setBeneficiaryDetails] = useState(
    allBeneficiaries[0]
  )

  function getBeneficiaryDetails(iban: string) {
    for (let i = 0; i < allBeneficiaries.length; i++) {
      if (iban === allBeneficiaries[i].IBAN) {
        return allBeneficiaries[i]
      }
    }
    return {
      name: "",
      type: "",
      account_number: 0,
      IBAN: "",
    }
  }

  return (
    <div className="container-fluid h-100 py-3 pb-5">
      <div className="row h-100 justify-content-center gy-5">
        {/* Left Side */}
        <div className="col-12 col-lg-10 col-xl-8 p-3">
          <div className="container-fluid d-flex flex-column justify-content-between">
            {/* First Row */}
            <div className="row justify-content-between align-items-center gy-3">
              <div className="col-12 col-xl-4 col-md-6 col-lg-4 col-sm-12">
                <HorizontalCard
                  icon="account_balance"
                  title="Primary Account"
                  text={currency(Math.random() * 999999)}
                />
              </div>
              <div className="col-12 col-xl-4 col-md-6 col-lg-4 col-sm-12">
                <HorizontalCard
                  icon="account_balance"
                  title="Current Account"
                  text={currency(Math.random() * 999999)}
                />
              </div>
              <div className="col-12 col-xl-4 col-md-6 col-lg-4 col-sm-12">
                <HorizontalCard
                  icon="account_balance"
                  title="Savings Account"
                  text={currency(Math.random() * 999999)}
                />
              </div>
            </div>

            {/* Second Row */}
            <div className="row shadowed mt-5 gy-3 p-3 mh-100 overflow-auto">
              <div className="col-12 col-lg-6 d-flex flex-column py-3 h-100 mh-100 overflow-scroll">
                <div className="fs-6 mx-auto mb-3">Quick Transfer</div>

                {/* Amount */}
                <div className="mb-4 d-flex flex-column shadowed">
                  <input type="text" className="input" placeholder="Amount" />
                </div>

                {/* From */}
                <label className="mb-2 section-title">From</label>
                <select
                  className="form-select mb-3"
                  aria-label=".form-select-lg example">
                  <option value="primary">
                    Primary - ({currency(Math.ceil(Math.random() * 999999))})
                  </option>
                  <option value="current">
                    Current - ({currency(Math.ceil(Math.random() * 999999))})
                  </option>
                  <option value="savings">
                    Savings - ({currency(Math.ceil(Math.random() * 999999))})
                  </option>
                </select>

                {/* To */}
                <label className="mb-2 section-title">To</label>
                <select
                  className="form-select mb-3"
                  aria-label=".form-select example"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}>
                  <option value="myself">My Accounts</option>
                  <option value="beneficiary" selected>
                    To Saved Beneficiary
                  </option>
                  <option value="domestic">
                    Domestic - (Other Illusion Customers)
                  </option>
                  <option value="local">Local</option>
                  <option value="international">International - (Swift)</option>
                </select>

                {/* Saved Beneficiaries */}
                {to === "beneficiary" && (
                  <>
                    <div
                      className={`${
                        to === "beneficiary" ? "shown" : "hidden"
                      }`}>
                      {/* Name */}
                      <label className="mb-2 section-title mt-3">
                        Saved Beneficiaries
                      </label>
                      <select
                        className="form-select mb-3"
                        aria-label=".form-select example"
                        value={beneficiary}
                        onChange={(e) => {
                          setBeneficiary(e.target.value)
                          setBeneficiaryDetails(
                            getBeneficiaryDetails(beneficiary)
                          )
                        }}>
                        {allBeneficiaries.map((beneficiary, index) => {
                          return (
                            <option key={index} value={beneficiary.IBAN}>
                              {beneficiary.name}
                            </option>
                          )
                        })}
                      </select>
                    </div>

                    {/* Beneficiary Details */}
                    {/* Bank Name */}
                    <div className="d-flex flex-column mt-3">
                      <label className="form-label section-title">Bank</label>
                      <span className="read-only p-3">
                        {beneficiaryDetails.type === "Domestic"
                          ? "Illusion Finance"
                          : beneficiaryDetails.type === "Local"
                          ? localBanks[
                              Math.floor(Math.random() * localBanks.length)
                            ]
                          : internationalBanks[
                              Math.floor(
                                Math.random() * internationalBanks.length
                              )
                            ]}
                      </span>
                    </div>

                    {/* Account Number */}
                    <div className="d-flex flex-column mt-4">
                      <label className="form-label section-title">
                        Account Number & IBAN
                      </label>
                      <span className="read-only p-3">
                        {beneficiaryDetails.account_number} -{" "}
                        {beneficiaryDetails.IBAN}
                      </span>
                    </div>
                  </>
                )}

                <div className="mt-4 d-flex justify-content-center">
                  <button className="w-75 shadowed p-2">Send</button>
                </div>
              </div>

              <div className="col shadowed d-flex flex-column p-3">
                <span className="mx-auto">Recent Transactions</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="col h-100 d-flex flex-column justify-content-between">
          <div className="row h-100 p-3">
            <ExchangeWidget />
          </div>

          <div className="row p-3 shadowed">
            <Bar options={options} data={data} />
          </div>
        </div>
      </div>
    </div>
  )
}
