import React from 'react'
import BreadCrumb from '../../Components/Library/BreadCrumb';
import DataTable from 'react-data-table-component';
import { NavLink } from 'react-router-dom';
import TextFiled from '../../Components/Library/Form/TextFiled'

// Sample data
const tableData = [
  {
    course: "Photo Editing",
    code: "Photo1",
    content: 0,
    status: "Inactive",
  },

];


const MyLearning = () => {


  // Define columns
  const columns = [
    {
      name: "Course",
      cell: (row) => <div>{row.course}</div>,
      minWidth: "9.375rem",
    },
    {
      name: "Code",
      selector: (row) => row.code,
      minWidth: "9.375rem",
    },
    {
      name: "Content",
      selector: (row) => row.content,
      minWidth: "9.375rem",
    },
    {
      name: "Status",
      selector: (row) => row.status,
      minWidth: "9.375rem",
    },
    {
      name: "View",
      cell: (row) => (
        <NavLink to='/'>
          <button className="bg-[#0dcaf0] text-white p-1.5 capitalize rounded-md text-nowrap">
            View
          </button>
        </NavLink>
      ),
      minWidth: "9.375rem",
    },
    {
      name: "Homework",
      cell: (row) => (
        <NavLink to='/student/my-homeworks'>
          <button className="bg-blue-600 text-white p-1.5 capitalize rounded-md text-nowrap">
            Homework
          </button>
        </NavLink>
      ),
      minWidth: "9.375rem",
    }
  ];

  return (
    <main className="min-h-screen  py-20 bg-gray-50">
      <header className="text-center mb-10">
        {/* Name */}
        <h1 className="text-3xl md:text-4xl mb-5 font-semibold">My Learning</h1>

        <BreadCrumb
          links={[
            {
              pageName: "Home",
              route: "/",
            },
            {
              pageName: "My Course",
              route: "/student/course",
              lock: true,
            },
          ]}
        />
      </header>
      <section className="max-w-6xl w-full mx-auto ">
        {/* Assignment Form */}
        <form className='border border-gray-600 p-1.5 flex items-center space-x-3 mb-5'>

          {/* Enter link */}
          <div className='max-w-[16rem] w-full'>
            <TextFiled placeholder="Enter Course Code" />
          </div>


          <div>
            <button type='submit' className="bg-[#0dcaf0] text-white px-5 py-2 capitalize rounded-md text-nowrap font-medium">
              Enroll
            </button>
          </div>

        </form>
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

export default MyLearning