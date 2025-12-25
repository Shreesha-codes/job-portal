import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { JobCategories, JobLocations } from '../assets/assets'

const AddJob = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    category: '',
    level: '',
    salary: '',
    description: '',
    requirements: '',
    responsibilities: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Job Posted:', formData)
    // Add logic to submit job data
    alert('Job posted successfully!')
    navigate('/manage-jobs')
  }

  return (
    <>
      <Navbar />
      <div className='container px-4 min-h-[65vh] 2xl:px-20 mx-auto my-10'>
        {/* Header */}
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-gray-800'>Post a New Job</h1>
          <p className='text-gray-600 mt-1'>Fill in the details to create a new job posting</p>
        </div>

        {/* Form */}
        <div className='bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 max-w-4xl'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            {/* Job Title */}
            <div>
              <label className='block text-gray-700 font-semibold mb-2'>
                Job Title <span className='text-red-500'>*</span>
              </label>
              <input
                type='text'
                name='title'
                value={formData.title}
                onChange={handleChange}
                placeholder='e.g. Full Stack Developer'
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all'
                required
              />
            </div>

            {/* Location and Category */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div>
                <label className='block text-gray-700 font-semibold mb-2'>
                  Location <span className='text-red-500'>*</span>
                </label>
                <select
                  name='location'
                  value={formData.location}
                  onChange={handleChange}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all'
                  required
                >
                  <option value=''>Select Location</option>
                  {JobLocations.map((location, index) => (
                    <option key={index} value={location}>{location}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className='block text-gray-700 font-semibold mb-2'>
                  Category <span className='text-red-500'>*</span>
                </label>
                <select
                  name='category'
                  value={formData.category}
                  onChange={handleChange}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all'
                  required
                >
                  <option value=''>Select Category</option>
                  {JobCategories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Job Level and Salary */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div>
                <label className='block text-gray-700 font-semibold mb-2'>
                  Job Level <span className='text-red-500'>*</span>
                </label>
                <select
                  name='level'
                  value={formData.level}
                  onChange={handleChange}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all'
                  required
                >
                  <option value=''>Select Level</option>
                  <option value='Entry Level'>Entry Level</option>
                  <option value='Mid Level'>Mid Level</option>
                  <option value='Senior Level'>Senior Level</option>
                  <option value='Lead'>Lead</option>
                </select>
              </div>

              <div>
                <label className='block text-gray-700 font-semibold mb-2'>
                  Salary
                </label>
                <input
                  type='text'
                  name='salary'
                  value={formData.salary}
                  onChange={handleChange}
                  placeholder='e.g. $80,000 - $100,000'
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all'
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className='block text-gray-700 font-semibold mb-2'>
                Job Description <span className='text-red-500'>*</span>
              </label>
              <textarea
                name='description'
                value={formData.description}
                onChange={handleChange}
                rows='5'
                placeholder='Describe the role, responsibilities, and what makes this position unique...'
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none transition-all'
                required
              ></textarea>
            </div>

            {/* Requirements */}
            <div>
              <label className='block text-gray-700 font-semibold mb-2'>
                Requirements <span className='text-red-500'>*</span>
              </label>
              <textarea
                name='requirements'
                value={formData.requirements}
                onChange={handleChange}
                rows='4'
                placeholder='List the required qualifications, skills, and experience...'
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none transition-all'
                required
              ></textarea>
            </div>

            {/* Responsibilities */}
            <div>
              <label className='block text-gray-700 font-semibold mb-2'>
                Responsibilities
              </label>
              <textarea
                name='responsibilities'
                value={formData.responsibilities}
                onChange={handleChange}
                rows='4'
                placeholder='Outline the key responsibilities and daily tasks...'
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none transition-all'
              ></textarea>
            </div>

            {/* Buttons */}
            <div className='flex gap-4 pt-4'>
              <button
                type='submit'
                className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold shadow-md transition-all duration-200 transform hover:scale-[1.02]'
              >
                Post Job
              </button>
              <button
                type='button'
                onClick={() => navigate('/dashboard')}
                className='bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-semibold transition-all duration-200'
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddJob
