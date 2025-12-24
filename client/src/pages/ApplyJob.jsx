import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ApplyJob = () => {
  const { id } = useParams()
  const { jobs } = useContext(AppContext)
  const [jobData, setJobData] = useState(null)

  useEffect(() => {
    if (jobs && jobs.length > 0) {
      const job = jobs.find(j => j._id === id)
      if (job) {
        setJobData(job)
      }
    }
  }, [id, jobs])

  if (!jobData) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-gray-500">Loading job details...</p>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Job Details Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <div className="flex items-center gap-4 mb-6">
            <img src={assets.company_icon} alt="Company Logo" className="h-16 w-16 rounded-full shadow" />
            <div>
              <h1 className="text-3xl font-bold text-gray-800">{jobData.title}</h1>
              <p className="text-gray-600 mt-1">{jobData.companyId?.name || 'Company Name'}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              {jobData.location}
            </span>
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
               {jobData.level}
            </span>
            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
               {jobData.salary || 'Competitive'}
            </span>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Job Description</h2>
            <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: jobData.description }}></div>
          </div>

          {jobData.responsibilities && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Responsibilities</h2>
              <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: jobData.responsibilities }}></div>
            </div>
          )}

          {jobData.requirements && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Requirements</h2>
              <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: jobData.requirements }}></div>
            </div>
          )}
        </div>

        {/* Application Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Apply for this Position</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Resume/CV</label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Cover Letter</label>
              <textarea
                rows="5"
                placeholder="Tell us why you're a great fit for this role..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-[1.02]"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ApplyJob