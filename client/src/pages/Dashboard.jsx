import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { manageJobsData, viewApplicationsPageData } from '../assets/assets'

const Dashboard = () => {
  const navigate = useNavigate()
  const totalJobs = manageJobsData.length
  const totalApplicants = manageJobsData.reduce((sum, job) => sum + job.applicants, 0)
  const recentApplications = viewApplicationsPageData.slice(0, 5)

  return (
    <>
      <Navbar />
      <div className='container px-4 min-h-[65vh] 2xl:px-20 mx-auto my-10'>
        {/* Header */}
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-gray-800'>Recruiter Dashboard</h1>
          <p className='text-gray-600 mt-1'>Welcome back! Here's an overview of your recruitment activity</p>
        </div>

        {/* Stats Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
          <div className='bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300'>
            <div className='flex items-center justify-between mb-4'>
              <div className='bg-blue-100 p-3 rounded-lg'>
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <h3 className='text-4xl font-bold text-gray-800 mb-1'>{totalJobs}</h3>
            <p className='text-gray-600 text-sm'>Total Jobs Posted</p>
          </div>

          <div className='bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300'>
            <div className='flex items-center justify-between mb-4'>
              <div className='bg-green-100 p-3 rounded-lg'>
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
            </div>
            <h3 className='text-4xl font-bold text-gray-800 mb-1'>{totalApplicants}</h3>
            <p className='text-gray-600 text-sm'>Total Applicants</p>
          </div>

          <div className='bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300'>
            <div className='flex items-center justify-between mb-4'>
              <div className='bg-purple-100 p-3 rounded-lg'>
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <h3 className='text-4xl font-bold text-gray-800 mb-1'>{totalJobs}</h3>
            <p className='text-gray-600 text-sm'>Active Positions</p>
          </div>

          <div className='bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300'>
            <div className='flex items-center justify-between mb-4'>
              <div className='bg-orange-100 p-3 rounded-lg'>
                <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>
            </div>
            <h3 className='text-4xl font-bold text-gray-800 mb-1'>
              {Math.round(totalApplicants / totalJobs) || 0}
            </h3>
            <p className='text-gray-600 text-sm'>Avg per Job</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8'>
          <Link to='/manage-jobs' className='bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 group'>
            <div className='flex items-center gap-4'>
              <div className='bg-blue-100 p-4 rounded-lg group-hover:bg-blue-200 transition-colors'>
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className='text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors'>Manage Jobs</h3>
                <p className='text-gray-600 text-sm'>View and edit your job posts</p>
              </div>
            </div>
          </Link>

          <Link to='/add-job' className='bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 group'>
            <div className='flex items-center gap-4'>
              <div className='bg-green-100 p-4 rounded-lg group-hover:bg-green-200 transition-colors'>
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                </svg>
              </div>
              <div>
                <h3 className='text-lg font-semibold text-gray-800 group-hover:text-green-600 transition-colors'>Post New Job</h3>
                <p className='text-gray-600 text-sm'>Create a new job listing</p>
              </div>
            </div>
          </Link>

          <Link to='/view-applications' className='bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 group'>
            <div className='flex items-center gap-4'>
              <div className='bg-purple-100 p-4 rounded-lg group-hover:bg-purple-200 transition-colors'>
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className='text-lg font-semibold text-gray-800 group-hover:text-purple-600 transition-colors'>View Applications</h3>
                <p className='text-gray-600 text-sm'>Review candidate applications</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Recent Applications */}
        <div className='bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden'>
          <div className='p-6 border-b border-gray-200 flex justify-between items-center'>
            <div>
              <h2 className='text-xl font-bold text-gray-800'>Recent Applications</h2>
              <p className='text-gray-600 text-sm mt-1'>Latest candidate applications</p>
            </div>
            <button className='text-blue-600 hover:text-blue-700 font-medium text-sm'>View All →</button>
          </div>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead className='bg-gray-50 border-b border-gray-200'>
                <tr>
                  <th className='px-6 py-3 text-left text-sm font-semibold text-gray-700'>Candidate</th>
                  <th className='px-6 py-3 text-left text-sm font-semibold text-gray-700'>Position</th>
                  <th className='px-6 py-3 text-left text-sm font-semibold text-gray-700'>Location</th>
                  <th className='px-6 py-3 text-left text-sm font-semibold text-gray-700'>Action</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200'>
                {recentApplications.map((application) => (
                  <tr key={application._id} className='hover:bg-gray-50 transition-colors duration-150'>
                    <td className='px-6 py-4'>
                      <div className='flex items-center gap-3'>
                        <img src={application.imgSrc} alt={application.name} className='w-10 h-10 rounded-full shadow-sm' />
                        <span className='font-medium text-gray-800'>{application.name}</span>
                      </div>
                    </td>
                    <td className='px-6 py-4 text-gray-700'>{application.jobTitle}</td>
                    <td className='px-6 py-4 text-gray-600'>{application.location}</td>
                    <td className='px-6 py-4'>
                      <button 
                        onClick={() => navigate(`/application/${application._id}`)}
                        className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors'
                      >
                        Review
                      </button>
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

export default Dashboard
