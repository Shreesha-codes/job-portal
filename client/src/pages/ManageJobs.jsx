import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { manageJobsData } from '../assets/assets'

const ManageJobs = () => {
  const [jobs, setJobs] = useState(manageJobsData)

  const formatDate = (timestamp) => {
    const date = new Date(timestamp)
    return date.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this job?')) {
      setJobs(jobs.filter(job => job._id !== id))
    }
  }

  return (
    <>
      <Navbar />
      <div className='container px-4 min-h-[65vh] 2xl:px-20 mx-auto my-10'>
        {/* Header */}
        <div className='flex justify-between items-center mb-8'>
          <div>
            <h1 className='text-3xl font-bold text-gray-800'>Manage Jobs</h1>
            <p className='text-gray-600 mt-1'>View and manage all your posted jobs</p>
          </div>
          <Link to='/add-job' className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium shadow-md transition-all duration-200 inline-flex items-center gap-2'>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Post New Job
          </Link>
        </div>

        {/* Stats Cards */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mb-8'>
          <div className='bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-gray-600 text-sm font-medium'>Total Jobs</p>
                <h3 className='text-3xl font-bold text-gray-800 mt-1'>{jobs.length}</h3>
              </div>
              <div className='bg-blue-100 p-3 rounded-lg'>
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          <div className='bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-gray-600 text-sm font-medium'>Total Applicants</p>
                <h3 className='text-3xl font-bold text-gray-800 mt-1'>
                  {jobs.reduce((sum, job) => sum + job.applicants, 0)}
                </h3>
              </div>
              <div className='bg-green-100 p-3 rounded-lg'>
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
            </div>
          </div>

          <div className='bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-gray-600 text-sm font-medium'>Active Jobs</p>
                <h3 className='text-3xl font-bold text-gray-800 mt-1'>{jobs.length}</h3>
              </div>
              <div className='bg-purple-100 p-3 rounded-lg'>
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          <div className='bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-gray-600 text-sm font-medium'>Avg Applicants</p>
                <h3 className='text-3xl font-bold text-gray-800 mt-1'>
                  {Math.round(jobs.reduce((sum, job) => sum + job.applicants, 0) / jobs.length) || 0}
                </h3>
              </div>
              <div className='bg-orange-100 p-3 rounded-lg'>
                <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Jobs Table */}
        <div className='bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden'>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead className='bg-gray-50 border-b border-gray-200'>
                <tr>
                  <th className='px-6 py-4 text-left text-sm font-semibold text-gray-700'>#</th>
                  <th className='px-6 py-4 text-left text-sm font-semibold text-gray-700'>Job Title</th>
                  <th className='px-6 py-4 text-left text-sm font-semibold text-gray-700'>Location</th>
                  <th className='px-6 py-4 text-left text-sm font-semibold text-gray-700'>Date Posted</th>
                  <th className='px-6 py-4 text-left text-sm font-semibold text-gray-700'>Applicants</th>
                  <th className='px-6 py-4 text-left text-sm font-semibold text-gray-700'>Actions</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200'>
                {jobs.map((job, index) => (
                  <tr key={job._id} className='hover:bg-gray-50 transition-colors duration-150'>
                    <td className='px-6 py-4 text-gray-700 font-medium'>{index + 1}</td>
                    <td className='px-6 py-4'>
                      <span className='font-medium text-gray-800'>{job.title}</span>
                    </td>
                    <td className='px-6 py-4 text-gray-600'>
                      <div className='flex items-center gap-1'>
                        <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {job.location}
                      </div>
                    </td>
                    <td className='px-6 py-4 text-gray-600'>{formatDate(job.date)}</td>
                    <td className='px-6 py-4'>
                      <span className='inline-flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium'>
                        {job.applicants} applicants
                      </span>
                    </td>
                    <td className='px-6 py-4'>
                      <div className='flex items-center gap-2'>
                        <button className='text-blue-600 hover:text-blue-700 p-2 hover:bg-blue-50 rounded-lg transition-colors'>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </button>
                        <button className='text-green-600 hover:text-green-700 p-2 hover:bg-green-50 rounded-lg transition-colors'>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                        <button 
                          onClick={() => handleDelete(job._id)}
                          className='text-red-600 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-colors'
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default ManageJobs
