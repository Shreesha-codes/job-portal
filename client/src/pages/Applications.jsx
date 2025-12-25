import { useState } from 'react';
import React from 'react'
import Navbar from '../components/Navbar.jsx'
import { jobsApplied } from '../assets/assets.js';




const Applications = () => {
  const [isEdit, setIsEdit] = useState(false)
  const [resume, setResume] = useState(null)
  return (
    <>
      <Navbar />
      <div className='container px-4 min-h-[65vh] 2xl:px-20 mx-auto my-10'>
        {/* Resume Section */}
        <div className='bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 mb-8'>
          <h2 className='text-2xl font-bold text-gray-800 mb-5'>Your Resume</h2>
          <div className='flex items-center gap-3'>
            {isEdit ? (
              <>
                <label htmlFor="resumeUpload" className='cursor-pointer'>
                  <div className='bg-blue-50 text-blue-600 px-6 py-2.5 rounded-lg hover:bg-blue-100 hover:shadow-md transition-all duration-200 inline-flex items-center gap-2 border border-blue-200'>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"/>
                      <path d="M9 13h2v5a1 1 0 11-2 0v-5z"/>
                    </svg>
                    <span className='font-medium'>Select Resume</span>
                  </div>
                  <input 
                    onChange={(e) => setResume(e.target.files[0])} 
                    accept="application/pdf" 
                    type="file" 
                    id="resumeUpload"
                    className='hidden'
                  />
                </label>
                <button 
                  onClick={() => setIsEdit(false)} 
                  className='bg-green-50 text-green-700 border border-green-300 rounded-lg px-6 py-2.5 hover:bg-green-100 hover:shadow-md transition-all duration-200 font-medium'
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <a className='bg-blue-50 text-blue-600 px-6 py-2.5 rounded-lg hover:bg-blue-100 hover:shadow-md transition-all duration-200 font-medium inline-flex items-center gap-2 border border-blue-200' href="">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd"/>
                  </svg>
                  Resume
                </a>
                <button 
                  onClick={() => setIsEdit(true)} 
                  className='text-gray-700 bg-white border-2 border-gray-300 px-6 py-2.5 rounded-lg hover:border-blue-400 hover:text-blue-600 hover:shadow-md transition-all duration-200 font-medium'
                >
                  Edit
                </button>
              </>
            )}
          </div>
        </div>

        {/* Applied Jobs Section */}
        <div className='bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden'>
          <div className='p-6 border-b border-gray-200'>
            <h2 className='text-2xl font-bold text-gray-800'>Applied Jobs</h2>
          </div>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead className='bg-gray-50 border-b border-gray-200'>
                <tr>
                  <th className='px-6 py-4 text-left text-sm font-semibold text-gray-700'>Company</th>
                  <th className='px-6 py-4 text-left text-sm font-semibold text-gray-700'>Job Title</th>
                  <th className='px-6 py-4 text-left text-sm font-semibold text-gray-700'>Location</th>
                  <th className='px-6 py-4 text-left text-sm font-semibold text-gray-700'>Date</th>
                  <th className='px-6 py-4 text-left text-sm font-semibold text-gray-700'>Status</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200'>
                {jobsApplied.map((job, index) => (
                  <tr key={index} className='hover:bg-gray-50 transition-colors duration-150'>
                    <td className='px-6 py-4'>
                      <div className='flex items-center gap-3'>
                        <img src={job.logo} alt={job.company} className='w-10 h-10 rounded-full shadow-sm' />
                        <span className='font-medium text-gray-800'>{job.company}</span>
                      </div>
                    </td>
                    <td className='px-6 py-4 text-gray-700'>{job.title}</td>
                    <td className='px-6 py-4 text-gray-600'>{job.location}</td>
                    <td className='px-6 py-4 text-gray-600'>{job.date}</td>
                    <td className='px-6 py-4'>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        job.status === 'Accepted' 
                          ? 'bg-green-100 text-green-700 border border-green-200' 
                          : job.status === 'Rejected' 
                          ? 'bg-red-100 text-red-700 border border-red-200'
                          : 'bg-yellow-100 text-yellow-700 border border-yellow-200'
                      }`}>
                        {job.status}
                      </span>
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

export default Applications
