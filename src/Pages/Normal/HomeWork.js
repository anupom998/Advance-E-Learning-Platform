import React from 'react'
import BreadCrumb from '../../Components/Library/BreadCrumb'
import DataTable from 'react-data-table-component'
import TextFiled from '../../Components/Library/Form/TextFiled';
import Textarea from '../../Components/Library/Form/Textarea';

// Sample data
const tableData = [
  {
    course: "Photo Editing",
    my_notes: "",
    teacher_feedback: "",
    status: "Unapproved",
    assignment_link: "https://www.facebook.com/share/gvtWy93WeyKify6K/?mibextid=oFDknk"
  },

];

const HomeWork = () => {
  const [assignment, setAssignment] = React.useState(null) //null | object

  const handleEdit = (link, notes) => {
    setAssignment({
      link: link,
      notes: notes
    })
  }

  // Define columns
  const columns = [
    {
      name: "Course",
      cell: (row) => <div>{row.course}</div>,
      minWidth: "9.375rem",
    },
    {
      name: "My Notes",
      selector: (row) => row.my_notes,
      minWidth: "9.375rem",
    },
    {
      name: "Teacher Feedback",
      selector: (row) => row.teacher_feedback,
      minWidth: "12.5rem",
    },
    {
      name: "Status",
      selector: (row) => row.status,
      minWidth: "9.375rem",
    },
    {
      name: "Action",
      cell: (row) => (
        <div className='flex space-x-2 font-medium'>
          {/* View */}
          <a target='_blank' rel="noreferrer" href={row.assignment_link}>
            <button className="bg-blue-600 text-white p-1.5 capitalize rounded-md text-nowrap">
              View
            </button>
          </a>

          {/* Edit */}
          <button onClick={() => handleEdit(row.assignment_link, row.notes)} className="bg-yellow-500 text-black p-1.5 capitalize rounded-md text-nowrap">
            Edit
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
        <h1 className="text-3xl md:text-4xl mb-5 font-semibold">My All Home Works</h1>

        <BreadCrumb
          links={[
            {
              pageName: "Home",
              route: "/",
            },
            {
              pageName: "My Course",
              route: "/student/my-homeworks",
              lock: true,
            },
          ]}
        />
      </header>
      <section className="max-w-6xl w-full mx-auto ">
        {/* Assignment Form */}
        {assignment && (<AssignmentForm assignmentLink={assignment?.link} notes={assignment?.notes} />)}

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


const AssignmentForm = ({ assignmentLink, notes }) => {


  return (<form className='bg-white p-2 grid md:grid-cols-12 mb-3 gap-3 lg:gap-5'>

    {/* Enter link */}
    <div className='xl:col-span-5 md:col-span-4'>
      <TextFiled placeholder="Type Your Homework Link" defaultValue={assignmentLink} />
    </div>

    {/* Enter notes */}
    <div className='xl:col-span-5 md:col-span-4'>
      <Textarea placeholder='Enter Your Notes...' rows="1" defaultValue={notes} type="url" />
    </div>

    <button type='submit' className="bg-blue-600 hover:bg-blue-700 block xl:col-span-2 md:col-span-4 my-auto w-full text-white p-3 h-fit capitalize rounded-sm text-nowrap font-medium">
      Submit Assignment
    </button>
  </form>)
}


export default HomeWork