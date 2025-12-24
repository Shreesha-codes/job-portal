import React from 'react'
import { assets } from '../assets/assets.js'
import { useNavigate } from 'react-router-dom'

const JobCard = ({ job }) => {

  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-3 transition-transform duration-200 hover:scale-[1.03] hover:shadow-xl">
      <div className="flex items-center gap-3 mb-2">
        <img src={assets.company_icon} alt="Company Logo" className="h-10 w-10 rounded-full shadow" />
        <h4 className="font-semibold text-lg text-blue-700">{job.title}</h4>
      </div>
      <div className="flex gap-4 text-sm text-gray-500 mb-2">
        <span className="bg-blue-50 px-2 py-1 rounded-full">{job.location}</span>
        <span className="bg-gray-100 px-2 py-1 rounded-full">{job.level}</span>
      </div>
      <p className="text-gray-700 text-sm mb-2" dangerouslySetInnerHTML={{ __html: job.description.slice(0, 150) + '...' }}></p>
      <div className="flex gap-3 mt-auto">
        <button onClick={() => { navigate(`/apply-job/${job._id}`); scrollTo(0, 0); }} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium shadow transition-all duration-200">
          Apply Now
        </button>
        <button onClick={() => { navigate(`/apply-job/${job._id}`); scrollTo(0, 0); }} className="bg-gray-100 hover:bg-gray-200 text-blue-700 px-4 py-2 rounded-lg font-medium shadow transition-all duration-200">
          Learn More
        </button>
      </div >
    </div >
  )
}

export default JobCard
