import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { viewApplicationsPageData } from '../assets/assets'

const ViewApplications = () => {
  const navigate = useNavigate()
  const [applications, setApplications] = useState(viewApplicationsPageData)
  const [filter, setFilter] = useState('all')

  const filteredApplications = applications.filter(app => {
    if (filter === 'all') return true
    return app.jobTitle === filter
  })

  const uniqueJobTitles = [...new Set(applications.map(app => app.jobTitle))]

  return (
    <>
      <Navbar />
      <div className='container px-4 min-h-[65vh] 2xl:px-20 mx-auto my-10'>
        {/* Header */}
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-gray-800'>View Applications</h1>
          <p className='text-gray-600 mt-1'>Review all candidate applications for your job postings</p>
        </div>

        {/* Stats and Filter */}
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6'>
          <div className='flex gap-4'>
            <div className='bg-white rounded-lg shadow-md px-6 py-3'>
              <p className='text-gray-600 text-sm'>Total Applications</p>
              <p className='text-2xl font-bold text-gray-800'>{applications.length}</p>
            </div>
            <div className='bg-white rounded-lg shadow-md px-6 py-3'>
              <p className='text-gray-600 text-sm'>Positions</p>
              <p className='text-2xl font-bold text-gray-800'>{uniqueJobTitles.length}</p>
            </div>
          </div>

          {/* Filter */}
          <div className='flex items-center gap-3'>
            <label className='text-gray-700 font-medium'>Filter by Position:</label>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className='px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none'
            >
              <option value='all'>All Positions</option>
              {uniqueJobTitles.map((title, index) => (
                <option key={index} value={title}>{title}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Applications Table */}
        <div className='bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden'>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead className='bg-gray-50 border-b border-gray-200'>
                <tr>
                  <th className='px-6 py-4 text-left text-sm font-semibold text-gray-700'>#</th>
                  <th className='px-6 py-4 text-left text-sm font-semibold text-gray-700'>Candidate</th>
                  <th className='px-6 py-4 text-left text-sm font-semibold text-gray-700'>Position Applied</th>
                  <th className='px-6 py-4 text-left text-sm font-semibold text-gray-700'>Location</th>
                  <th className='px-6 py-4 text-left text-sm font-semibold text-gray-700'>Status</th>
                  <th className='px-6 py-4 text-left text-sm font-semibold text-gray-700'>Actions</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200'>
                {filteredApplications.length > 0 ? (
                  filteredApplications.map((application, index) => (
                    <tr key={application._id} className='hover:bg-gray-50 transition-colors duration-150'>
                      <td className='px-6 py-4 text-gray-700 font-medium'>{index + 1}</td>
                      <td className='px-6 py-4'>
                        <div className='flex items-center gap-3'>
                          <img 
                            src={application.imgSrc} 
                            alt={application.name} 
                            className='w-10 h-10 rounded-full shadow-sm object-cover'
                          />
                          <span className='font-medium text-gray-800'>{application.name}</span>
                        </div>
                      </td>
                      <td className='px-6 py-4 text-gray-700'>{application.jobTitle}</td>
                      <td className='px-6 py-4 text-gray-600'>
                        <div className='flex items-center gap-1'>
                          <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          {application.location}
                        </div>
                      </td>
                      <td className='px-6 py-4'>
                        <span className='inline-flex items-center bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-medium border border-yellow-200'>
                          Pending Review
                        </span>
                      </td>
                      <td className='px-6 py-4'>
                        <div className='flex items-center gap-2'>
                          <button 
                            onClick={() => navigate(`/application/${application._id}`)}
                            className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors'
                          >
                            Review
                          </button>
                          <button className='text-green-600 hover:text-green-700 p-2 hover:bg-green-50 rounded-lg transition-colors' title='Accept'>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </button>
                          <button className='text-red-600 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-colors' title='Reject'>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className='px-6 py-8 text-center text-gray-500'>
                      No applications found for the selected filter.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default ViewApplications
