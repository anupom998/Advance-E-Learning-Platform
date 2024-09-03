import React from 'react'
import DataTable from 'react-data-table-component'

// Sample data
const tableData = [
  {
    "sr_no": 1,
    "full_name": "John Smith",
    "method": "Bkash",
    "amount": 16.99,
    "date": "17 Jul 2024, 06:52 pm",
    "status": "Pending",
  },
  {
    "sr_no": 2,
    "full_name": "John Smith",
    "method": "Bkash",
    "amount": 16.99,
    "date": "17 Jul 2024, 06:52 pm",
    "status": "Pending",
  },
  {
    "sr_no": 3,
    "full_name": "John Smith",
    "method": "Bkash",
    "amount": 16.99,
    "date": "17 Jul 2024, 06:52 pm",
    "status": "Pending",
  },

];

const WithdrawRequest = () => {


  // Define columns
  const columns = [
    {
      name: "Sr.No",
      cell: (row) => <div>{row.sr_no}</div>,
      minWidth: "9.375rem",
    },
    {
      name: "Full Name",
      selector: (row) => row.full_name,
      minWidth: "9.375rem",
    },
    {
      name: "Method",
      selector: (row) => row.method,
      minWidth: "12.5rem",
    },
    {
      name: "Amount",
      selector: (row) => row.amount,
      minWidth: "9.375rem",
    },
    {
      name: "Date",
      selector: (row) => row.date,
      minWidth: "9.375rem",
    },
    {
      name: "Action",
      cell: (row) => (
        <div className='flex space-x-2 font-medium'>

          {/* Approve */}
          <button className="bg-blue-600 text-white p-1.5 capitalize rounded-md text-nowrap">
            Approve
          </button>

          {/* Reject */}
          <button className="bg-red-600 text-white p-1.5 capitalize rounded-md text-nowrap">
            Reject
          </button>
        </div>
      ),
      minWidth: "9.375rem",
    },

  ];



  return (
    <main className="min-h-screen  py-20 bg-gray-50">
      <header className="text-center mb-10">
        {/* Name */}
        <h1 className="text-3xl md:text-4xl mb-5 font-semibold">Withdrawal Request</h1>

      </header>
      <section className="max-w-6xl w-full mx-auto ">
        {/* Assignment Form */}

        <div className="bg-white">

          <DataTable
            columns={columns}
            data={tableData}
            fixedHeader
            pagination
            customStyles={{
              cells: {
                style: {
                  fontSize: "1rem",
                },
              },
              headCells: {
                style: {
                  fontSize: "1rem",
                  color: "gray"
                },
              },
            }}
          />
        </div>
      </section>
    </main>
  )
}


export default WithdrawRequest