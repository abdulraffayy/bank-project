import { useState } from "react";
import Header from "../Headers/Header";
import rightsideimage from "../assets/bsesPhotos.png";


const tableData = [
  { id: 1, description: "Speech Therapy", fee: "RS 1,900", hours: "", amount: "RS 0" },
  { id: 2, description: "ABA Therapy", fee: "RS 1,600", hours: "7", amount: "RS 11,200" },
  { id: 3, description: "Occupational Therapy", fee: "RS 2,100", hours: "4", amount: "RS 8,400" },
  { id: 4, description: "Montessori", fee: "RS 0", hours: "0", amount: "RS 0" },
  { id: 5, description: "Enrollment Fee", fee: "RS 0", hours: "N/A", amount: "RS 0" },
  { id: 6, description: "Summer Camp Fee", fee: "RS 0", hours: "N/A", amount: "RS 0" },
  { id: 7, description: "Overdue Balance", fee: "RS 0", hours: "N/A", amount: "RS 0" },
  { id: 8, description: "Day Program", fee: "", hours: "N/A", amount: "" },
  { id: 9, description: "Digital Marketing Seminar", fee: "$400", hours: "25 Hrs", amount: "$500" },
];

const Bank = () => {
  const [tableshow, setTable] = useState(tableData);
  const [isEditing, setIsEditing] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteItem, setDeleteItem] = useState(null);

  // Handle Delete
  function handleDelete(id) {
    const itemToDelete = tableshow.find((row) => row.id === id);
    setDeleteItem(itemToDelete);
    setIsDeleting(true);
  }

  // Confirm Delete
  function confirmDelete() {
    const updatedDeleteData = tableshow.filter((row) => row.id !== deleteItem.id);
    setTable(updatedDeleteData);
    setDeleteItem(null);
    setIsDeleting(false);
  }

  // Handle Edit
  function handleEdit(id) {
    const itemToEdit = tableshow.find((row) => row.id === id);
    setEditItem(itemToEdit);
    setIsEditing(true);
  }

  // Save Edited Item
  function saveEdit(updatedItem) {
    const updatedData = tableshow.map((row) =>
      row.id === updatedItem.id ? updatedItem : row
    );
    setTable(updatedData);
    setEditItem(null);
    setIsEditing(false);
  }

  return (
    <>
      <Header />
      <div className="w-full h-[100vh] flex flex-col items-center">
        <div className="w-[95%]">
<div className="flex flex-col sm:flex-row flex-1 justify-center items-start gap-8 p-4">
  {/* Left Side */}
  <div className="left-side flex flex-col items-start gap-6 p-4 w-full sm:w-1/2">
    {/* Heading */}
    <div className="heading">
      <h1 className="bg-black text-white w-10 p-1">Bank</h1>
      <h1 className="font-semibold text-4xl sm:text-6xl mt-4">INVOICE</h1>
    </div>

    {/* Invoice Details */}
    <div className="container flex flex-col sm:flex-row gap-4">
      <div>
        <h2 className="text-blue-500 font-semibold">INVOICE NUMBER</h2>
        <p>16</p>
      </div>
      <div>
        <h2 className="text-blue-500 font-semibold">DATE OF ISSUE</h2>
        <p>11/14/2024</p>
      </div>
      <div>
        <h2 className="text-blue-500 font-semibold">Due Date</h2>
        <p>11/15/2024</p>
      </div>
    </div>

    {/* Billed To Section */}
    <div>
      <h1 className="text-slate-300">BILLED TO</h1>
      <h2 className="font-semibold">Client</h2>
      <h3 className="font-semibold">M Zyan Atif</h3>
      <h4 className="font-semibold">Parent/ Guardian</h4>
      <h5 className="font-extrabold text-xl sm:text-2xl">M.Atif Shahbaz</h5>
    </div>
  </div>

  {/* Right Side */}
  <div className="right-side flex flex-col gap-4 w-full sm:w-1/2">
    {/* Right Side Image */}
    <div className="right-image">
      <img src={rightsideimage} className="w-full" alt="Right Side Image" />
    </div>

    {/* Address Section */}
    <div className="heading-right">
      <h1 className="text-left text-slate-700 font-medium">BASES (Lahore)</h1>
      <h2 className="text-black font-semibold">429 G1 block</h2>
      <h3 className="text-black font-semibold">Johar Town</h3>
      <h4 className="text-black font-semibold">Lahore, Punjab</h4>
      <h5 className="text-black font-semibold">Pakistan</h5>
    </div>
  </div>
</div>

          {/* Table Section */}
          <div className="w-full p-4">
            <h1 className="text-2xl font-bold mb-4">Table Data</h1>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-200 bg-white shadow-lg">
                <thead>
                  <tr className="bg-gray-200 text-gray-700">
                    <th className="border border-gray-300 px-4 py-2 text-left text-blue-500">DESCRIPTION</th>
                    <th className="border border-gray-300 px-4 py-2 text-left text-slate-400">FEE</th>
                    <th className="border border-gray-300 px-4 py-2 text-left text-slate-400">HRS./DAYS</th>
                    <th className="border border-gray-300 px-4 py-2 text-left text-slate-400">AMOUNTS</th>
                    <th className="border border-gray-300 px-4 py-2 text-left text-slate-400">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {tableshow.map(({ id, description, fee, hours, amount }) => (
                    <tr key={id} className="hover:bg-gray-100">
                      <td className="border border-gray-300 px-4 py-2">{description}</td>
                      <td className="border border-gray-300 px-4 py-2">{fee}</td>
                      <td className="border border-gray-300 px-4 py-2">{hours}</td>
                      <td className="border border-gray-300 px-4 py-2">{amount}</td>
                      <td className="border border-gray-300 px-4 py-2 flex justify-end gap-3">
                        <span onClick={() => handleEdit(id)} className="bg-green-600 p-2 rounded-md hover:text-white cursor-pointer">Edit</span>
                        <span onClick={() => handleDelete(id)} className="bg-red-500 p-2 rounded-md text-white cursor-pointer">Delete</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Edit Modal */}
          {isEditing && (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                <h2 className="text-xl font-bold mb-4">Edit Item</h2>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    saveEdit(editItem);
                  }}
                >
                  <label className="block mb-2">Description:</label>
                  <input
                    type="text"
                    value={editItem.description}
                    onChange={(e) => setEditItem({ ...editItem, description: e.target.value })}
                    className="border p-2 mb-4 w-full"
                  />
                  <label className="block mb-2">Fee:</label>
                  <input
                    type="text"
                    value={editItem.fee}
                    onChange={(e) => setEditItem({ ...editItem, fee: e.target.value })}
                    className="border p-2 mb-4 w-full"
                  />
                  <label className="block mb-2">Hours/Days:</label>
                  <input
                    type="text"
                    value={editItem.hours}
                    onChange={(e) => setEditItem({ ...editItem, hours: e.target.value })}
                    className="border p-2 mb-4 w-full"
                  />
                  <label className="block mb-2">Amount:</label>
                  <input
                    type="text"
                    value={editItem.amount}
                    onChange={(e) => setEditItem({ ...editItem, amount: e.target.value })}
                    className="border p-2 mb-4 w-full"
                  />
                  <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Save</button>
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="bg-gray-500 text-white p-2 rounded-md ml-2"
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Delete Modal */}
          {isDeleting && (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                <h2 className=" mb-4">Are you sure you want to delete this item?</h2>
                <div className="flex justify-end gap-4">
                  <button
                    onClick={confirmDelete}
                    className="bg-red-500 text-white p-2 rounded-md"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => setIsDeleting(false)}
                    className="bg-gray-500 text-white p-2 rounded-md"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
     <div className="container-totoal flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4">
  {/* Left Side */}
  <div className="left-side">
    <h1 className="text-blue-500 text-lg sm:text-xl">INVOICE TOTAL</h1>
    <h2 className="text-2xl sm:text-3xl font-semibold">RS 19,600/-</h2>
  </div>

  {/* Right Side */}
  <div className="rupees flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
    <div>
      <h2 className="text-lg sm:text-xl font-bold text-blue-500">SUB TOTAL</h2>
    </div>
    <h3 className="text-xl sm:text-2xl font-semibold">RS 19,600/-</h3>
  </div>
</div>

        


<div className="container-sides flex flex-wrap items-start justify-between mt-8 p-4 w-full">

  <div className="left-payment ">
    <h1 className="font-bold text-lg mb-2 text-blue-500">Payment Details</h1>
    <h2 className="text-gray-700 font-semibold">AC Holder: BASES THERAPY CLINIC PVT LTD</h2>
    <h3 className="text-gray-700 font-semibold">Bank Name: BANK ALFALAH</h3>
    <h4 className="text-gray-700 font-semibold">Account No: 0148-1006845095</h4>
    <h5 className="text-gray-700 font-semibold">IBAN: PK79ALFH0148001006845095</h5>
  </div>


  <div className="right-sides   flex flex-col justify-end mt-2">
    <h1 className="font-bold text-lg mb-2 text-blue-500 mt-3">
      Bases: Behavior and Special Education Services
    </h1>
  </div>
</div>

          <div className="container-term-left w-full flex flex-col sm:items-center md:flex-row md:items-center justify-between gap-6 p-4 border-t border-gray-300 mt-4">

            <div className="left-terms md:w-1/2 text-center md:text-left">
              <h1 className="text-xl font-semibold mb-2 text-blue-500">Terms and Conditions</h1>
              <p className="text-gray-600 leading-relaxed font-semibold">
                Kindly be aware that all fees paid for our products/services are non-refundable.
                This policy applies to all transactions.
              </p>
            </div>

            <div className="right-terms w-full sm:w-auto md:w-[20%] ">
              <h1 className="text-xl font-semibold mb-2 text-blue-500">Penalty</h1>
              <p className="text-gray-600 leading-relaxed font-semibold">
                A penalty of 1000/- applies from the 7th day, escalating daily until the outstanding
                amount is settled.
              </p>
            </div>

          </div>
        </div>
      </div>

    </>
  );
};

export default Bank;
