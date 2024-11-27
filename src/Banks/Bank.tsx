import Header from "../Headers/Header"

const Bank = () => {
  return (
    <>
      <Header />
      <div className="Container w-full h-[100vh] bg-red-700 ">
     
     <div className="left-side flex items-center justify-center">
      <div className="heading">
        <h1>Bank</h1>
        <div>
            <h1>INVOICE</h1>
        </div>
        <div className="container flex  gap-2">
            <div className="div">
                <h2>INVOICE NUMBER</h2>
                <p>16</p>
            </div>

            <div className="div">
                <h2>INVOICE NUMBER</h2>
                <p>16</p>
            </div>

            <div className="div">
                <h2>INVOICE NUMBER</h2>
                <p>16</p>
            </div>
        </div>

     <div>
        <h1>BILLED TO</h1>
        <h2>Client</h2>
        <h3>M Zyan Atif</h3>
        <h4>Parent/ Guardian</h4>
        <h5>M.Atif Shahbaz</h5>
     </div>

      </div>
     </div>


     <div className="right-sides">

     </div>
      </div>
    </>
  )
}

export default Bank
