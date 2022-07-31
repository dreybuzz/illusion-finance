import { Route, Routes } from "react-router-dom"
import Accounts from "../../Routes/Accounts/Accounts"
import Analytics from "../../Routes/Analytics/Analytics"
import Cards from "../../Routes/Cards/Cards"
import Home from "../../Routes/Home/Home"
import Loans from "../../Routes/Loans/Loans"
import Support from "../../Routes/Support/Support"
import Transfer from "../../Routes/Transfer/Transfer"

export default function Main() {
  return (
    <div className="col d-flex h-100 mh-100 overflow-scroll">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/accounts/*" element={<Accounts />} />
        <Route path="/cards/*" element={<Cards />} />
        <Route path="/transfer/*" element={<Transfer />} />
        <Route path="/analytics/*" element={<Analytics />} />
        <Route path="/loans/*" element={<Loans />} />
        <Route path="/support/*" element={<Support />} />
      </Routes>
    </div>
  )
}
