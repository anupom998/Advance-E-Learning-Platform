import React from "react";
import DataTable from "react-data-table-component";

// Sample data
const tableData = [
  {
    id: 1,
    method: "Bkash",
    date: "17 Jul 2024, 06:52 pm",
    amount: "1575.00",
    notes_admin: "Withdrawal Completed",
    status: "Completed",
  },
  
];

const Withdrawals = () => {
  // Define columns
  const columns = [
    {
      name: "Sr.No",
      cell: (row) => <div className="font-extrabold">{row.id}</div>,
    },
    {
      name: "Method",
      selector: (row) => row.method,
      width: "9.375rem",
    },
    {
      name: "Date",
      selector: (row) => row.date,
      width: "12.5rem",
    },
    {
      name: "Amount",
      selector: (row) => row.amount,
      width: "9.375rem",
    },
    {
      name: "Notes(Admin)",
      selector: (row) => row.notes_admin,
      width: "9.375rem",
    },
    {
      name: "Status",
      selector: (row) => row.status,
      width: "9.375rem",
    },
  ];

  return (
    <div>
      <header className="mb-8 space-y-5">
        <h1 className="text-xl mb-5 font-semibold text-dark-blue">
          My Passbook
        </h1>

        <div>
          {/* Balance */}
          <p className="text-gray-700 text-base">
            Current Balance: <span className="font-bold text-lg">Tk 1.51</span>
          </p>

          {/* Minimum Withdrawal Amount*/}
          <p className="text-gray-700 text-base">
            Minimum Withdrawal Amount:{" "}
            <span className="font-bold text-lg">Tk 50.00</span>
          </p>
        </div>

        <div>
          {/* Warning */}
          <p className="text-gray-700 text-base">
            Your account is not eligible for withdrawal
          </p>

          {/* Note:*/}
          <p className="text-gray-700 text-base">
            Note: You can"t perform your next withdrawal without passing 168
            hours
          </p>
        </div>
      </header>

      <div>
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
                fontWeight: "bold",
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Withdrawals;
