import React from "react";
import DataTable from "react-data-table-component";

// Sample data
const tableData = [
  {
    id: 1,
    type: "Withdraw",
    date: "17 Jul 2024, 06:52 pm",
    amount: '1575.00',
    notes: "Withdrawal Completed",
    status: "Approved",
  },
  {
    id: 2,
    type: "Referral",
    date: "17 Jul 2024, 06:52 pm",
    amount: '1575.00',
    notes: "Referral Bonus",
    status: "Approved",
  },
];
const MyPassbook = () => {
  // Define columns
  const columns = [
    {
      name: "Sr.No",
      cell: (row) => <div className="font-extrabold">{row.id}</div>,
    },
    {
      name: "Type",
      selector: (row) => row.type,
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
        name: "Notes",
        selector: (row) => row.notes,
        width: "9.375rem",
      },
      {
        name: "Status",
        selector: (row) => row.status,
        width: "9.375rem",
      }
  ];
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-xl mb-5 font-semibold text-dark-blue">
          My Passbook
        </h1>
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

export default MyPassbook;
