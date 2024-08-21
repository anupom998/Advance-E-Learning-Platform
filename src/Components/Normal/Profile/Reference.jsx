import React from "react";
import DataTable from "react-data-table-component";

// Sample data
const tableData = [
    {
      id: 1,
      name: "Mst Naima",
      student_id: 2328044,
      counsellor: "Not mapping",
      joining_date: "17 Jul 2024, 06:52 pm",
      whatsapp_link: "https://whatsapp.com",
    },
    {
      id: 2,
      name: "Md Rana",
      student_id: 5757814,
      counsellor: "Not mapping",
      joining_date: "17 Jul 2024, 10:57 am",
      whatsapp_link: "https://whatsapp.com",
    },
    {
      id: 3,
      name: "Khairul Islam",
      student_id: 1077287,
      counsellor: "Not mapping",
      joining_date: "17 Jul 2024, 08:18 am",
      whatsapp_link: "https://whatsapp.com",
    },
    {
      id: 4,
      name: "Moung Pyou",
      student_id: 4942271,
      counsellor: "Not mapping",
      joining_date: "14 Jul 2024, 10:07 am",
      whatsapp_link: "https://whatsapp.com",
    },
    {
      id: 5,
      name: "Md Rakib",
      student_id: 8648735,
      counsellor: "Not mapping",
      joining_date: "13 Jul 2024, 01:34 pm",
      whatsapp_link: "https://whatsapp.com",
    },
    {
      id: 6,
      name: "Joni Khan",
      student_id: 5972264,
      counsellor: "Not mapping",
      joining_date: "12 Jul 2024, 07:27 pm",
      whatsapp_link: "https://whatsapp.com",
    },
    {
      id: 7,
      name: "Mst Ayesha",
      student_id: 3684921,
      counsellor: "Not mapping",
      joining_date: "11 Jul 2024, 09:45 am",
      whatsapp_link: "https://whatsapp.com",
    },
    {
      id: 8,
      name: "Md Hossain",
      student_id: 9145873,
      counsellor: "Not mapping",
      joining_date: "10 Jul 2024, 02:13 pm",
      whatsapp_link: "https://whatsapp.com",
    },
    {
      id: 9,
      name: "Rahim Uddin",
      student_id: 7482915,
      counsellor: "Not mapping",
      joining_date: "09 Jul 2024, 05:22 pm",
      whatsapp_link: "https://whatsapp.com",
    },
    {
      id: 10,
      name: "Fatema Begum",
      student_id: 4823917,
      counsellor: "Not mapping",
      joining_date: "08 Jul 2024, 11:16 am",
      whatsapp_link: "https://whatsapp.com",
    }
  ];
  

const Reference = () => {
  // Define columns
  const columns = [
    {
      name: "Sr.No",
      cell:(row) =>(
        <div className="font-extrabold">
            {row.id}
        </div>
      )
    },
    {
      name: "Name",
      selector: (row) => row.name,
      width: "9.375rem",
    },
    {
      name: "Student ID",
      selector: (row) => row.student_id,
    },
    {
      name: "Counsellor",
      cell: (row) => (
        <button className="bg-blue-600 text-white p-1 text-xs font-bold capitalize rounded-md text-nowrap">
          {row.counsellor}
        </button>
      ),
    //   width: "9.375rem",
    },
    {
      name: "Joining Date",
      selector: (row) => row.joining_date,
      width: "12.5rem",
    },
    {
      name: "Whatsapp",
      cell: (row) => (
        <a href={row.whatsapp_link} target="_blank" rel="noopener noreferrer">
          <button className="bg-black text-white py-1.5 px-3.5 rounded text-sm font-semibold">
            Whatsapp
          </button>
        </a>
      ),
      width: "150px",
    },
  ];

  return (
    <div>
      <header className="space-y-8 mb-10">
        <h1 className="text-xl mb-5 font-semibold text-dark-blue">
          My Referral Code
        </h1>
        <h1 className="text-4xl font-bold text-dark-blue">2458220</h1>
      </header>

      <div className="space-y-5">
        <div className="text-gray-900 text-base">
          <p>Total Leads: 151</p>
          <p>Today Leads: 0</p>
        </div>

        <h1 className="text-xl mb-5 font-semibold text-dark-blue">
          My Reference
        </h1>

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
                fontWeight:"bold"
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Reference;
