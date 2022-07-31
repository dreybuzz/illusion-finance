import HorizontalCard from "../../components/HorizontalCards/HorizontalCard"

export default function Home() {
  return (
    <div className="container-fluid h-100 py-3 pb-5">
      <div className="row h-100">
        {/* Left Side */}
        <div className="col-12 col-lg-8 p-3">
          <div className="container-fluid d-flex flex-column justify-content-between h-100">
            {/* First Row */}
            <div className="row justify-content-between align-items-center gy-3">
              <div className="col-6 col-xl-4 col-md-6 col-sm-12">
                <HorizontalCard />
              </div>
              <div className="col-6 col-xl-4 col-md-6 col-sm-12">
                <HorizontalCard />
              </div>
              <div className="col-6 col-xl-4 col-md-6 col-sm-12">
                <HorizontalCard />
              </div>
            </div>

            {/* Second Row */}
            <div className="row h-100 shadowed mt-5"></div>
          </div>
        </div>
        {/* Right Side */}
        <div className="col shadowed p-5 h-100"></div>
      </div>
    </div>
  )
}
