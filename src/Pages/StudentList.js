import React from 'react'
import DataTable from 'react-data-table-component'

// Sample data
const tableData = [
  {
    id: 1,
    "full_name": "John Smith",
    "email": "example@example.com",
    "phone_number": "0170000000000",
    "gender": "male",
  },
  {
    id: 2,
    "full_name": "John Smith",
    "email": "example@example.com",
    "phone_number": "0170000000000",
    "gender": "male",
  },
  {
    id: 3,
    "full_name": "John Smith",
    "email": "example@example.com",
    "phone_number": "0170000000000",
    "gender": "male",
  },
];

const StudentList = () => {

  // const handleEdit = (link, notes) => {
  //   setAssignment({
  //     link: link,
  //     notes: notes
  //   })
  // }

  // Define columns
  const columns = [
    {
      name: "Student ID",
      cell: (row) => <div>{row.id}</div>,
      minWidth: "9.375rem",
    },
    {
      name: "Full Name",
      selector: (row) => row.full_name,
      minWidth: "9.375rem",
    },
    {
      name: "Email",
      selector: (row) => row.email,
      minWidth: "12.5rem",
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
      minWidth: "9.375rem",
    },
    {
      name: "Gender",
      selector: (row) => row.gender,
      minWidth: "9.375rem",
    },
    // {
    //   name: "Action",
    //   cell: (row) => (
    //     <div className='flex space-x-2 font-medium'>
    //       {/* View */}
    //       <a target='_blank' rel="noreferrer" href={row.assignment_link}>
    //         <button className="bg-blue-600 text-white p-1.5 capitalize rounded-md text-nowrap">
    //           View
    //         </button>
    //       </a>

    //       {/* Edit */}
    //       <button onClick={() => handleEdit(row.assignment_link, row.notes)} className="bg-yellow-500 text-black p-1.5 capitalize rounded-md text-nowrap">
    //         Edit
    //       </button>
    //     </div>
    //   ),
    //   minWidth: "9.375rem",
    // },

  ];



  return (
    <main className="min-h-screen  py-20 bg-gray-50">
      <header className="text-center mb-10">
        {/* Name */}
        <h1 className="text-3xl md:text-4xl mb-5 font-semibold">Student List</h1>

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


export default StudentList