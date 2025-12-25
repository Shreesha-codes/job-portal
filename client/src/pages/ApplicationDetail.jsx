import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { viewApplicationsPageData } from '../assets/assets'

const ApplicationDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const application = viewApplicationsPageData.find(app => app._id === parseInt(id))

  if (!application) {
    return (
      <>
        <Navbar />
        <div className='container px-4 min-h-[65vh] 2xl:px-20 mx-auto my-10 text-center'>
          <p className='text-gray-500'>Application not found</p>
        </div>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <div className='container px-4 min-h-[65vh] 2xl:px-20 mx-auto my-10'>
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className='flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6 transition-colors'
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Applications
        </button>

        {/* Header */}
        <div className='bg-white rounded-xl shadow-md p-8 mb-6'>
          <div className='flex items-start justify-between'>
            <div className='flex items-center gap-6'>
              <img 
                src={application.imgSrc} 
                alt={application.name} 
                className='w-24 h-24 rounded-full shadow-lg object-cover'
              />
              <div>
                <h1 className='text-3xl font-bold text-gray-800 mb-2'>{application.name}</h1>
                <div className='flex flex-wrap gap-3'>
                  <span className='bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium'>
                    {application.jobTitle}
                  </span>
                  <span className='flex items-center gap-1 text-gray-600'>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {application.location}
                  </span>
                </div>
              </div>
            </div>
            <div className='flex gap-3'>
              <button className='bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-lg font-medium shadow-md transition-all duration-200 inline-flex items-center gap-2'>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Accept
              </button>
              <button className='bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-lg font-medium shadow-md transition-all duration-200 inline-flex items-center gap-2'>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Reject
              </button>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          {/* Left Column - Contact & Details */}
          <div className='space-y-6'>
            {/* Contact Information */}
            <div className='bg-white rounded-xl shadow-md p-6'>
              <h2 className='text-xl font-bold text-gray-800 mb-4 flex items-center gap-2'>
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Contact Information
              </h2>
              <div className='space-y-3'>
                <div className='flex items-center gap-3'>
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  </svg>
                  <div>
                    <p className='text-xs text-gray-500'>Email</p>
                    <p className='text-gray-800 font-medium'>{application.name.toLowerCase().replace(' ', '.')}@email.com</p>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <div>
                    <p className='text-xs text-gray-500'>Phone</p>
                    <p className='text-gray-800 font-medium'>+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className='text-xs text-gray-500'>Location</p>
                    <p className='text-gray-800 font-medium'>{application.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Details */}
            <div className='bg-white rounded-xl shadow-md p-6'>
              <h2 className='text-xl font-bold text-gray-800 mb-4 flex items-center gap-2'>
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                Application Details
              </h2>
              <div className='space-y-3'>
                <div>
                  <p className='text-xs text-gray-500'>Applied For</p>
                  <p className='text-gray-800 font-medium'>{application.jobTitle}</p>
                </div>
                <div>
                  <p className='text-xs text-gray-500'>Applied Date</p>
                  <p className='text-gray-800 font-medium'>Dec 20, 2024</p>
                </div>
                <div>
                  <p className='text-xs text-gray-500'>Status</p>
                  <span className='inline-flex items-center bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-medium border border-yellow-200'>
                    Pending Review
                  </span>
                </div>
                <div>
                  <p className='text-xs text-gray-500'>Experience</p>
                  <p className='text-gray-800 font-medium'>5+ Years</p>
                </div>
              </div>
            </div>

            {/* Resume Download */}
            <div className='bg-white rounded-xl shadow-md p-6'>
              <h2 className='text-xl font-bold text-gray-800 mb-4 flex items-center gap-2'>
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                </svg>
                Resume
              </h2>
              <a 
                href='#'
                className='flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors'
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Column - Profile Details */}
          <div className='lg:col-span-2 space-y-6'>
            {/* Professional Summary */}
            <div className='bg-white rounded-xl shadow-md p-6'>
              <h2 className='text-xl font-bold text-gray-800 mb-4'>Professional Summary</h2>
              <p className='text-gray-700 leading-relaxed'>
                Experienced {application.jobTitle} with 5+ years of expertise in developing robust and scalable applications. 
                Passionate about clean code, best practices, and continuous learning. Proven track record of delivering 
                high-quality solutions in fast-paced environments. Strong problem-solving skills and excellent team collaboration abilities.
              </p>
            </div>

            {/* Skills */}
            <div className='bg-white rounded-xl shadow-md p-6'>
              <h2 className='text-xl font-bold text-gray-800 mb-4'>Skills</h2>
              <div className='flex flex-wrap gap-2'>
                {['JavaScript', 'React', 'Node.js', 'Python', 'MongoDB', 'AWS', 'Git', 'Docker', 'TypeScript', 'REST APIs', 'GraphQL', 'CI/CD'].map((skill, index) => (
                  <span key={index} className='bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-200 transition-colors'>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Work Experience */}
            <div className='bg-white rounded-xl shadow-md p-6'>
              <h2 className='text-xl font-bold text-gray-800 mb-4'>Work Experience</h2>
              <div className='space-y-6'>
                <div className='border-l-4 border-blue-600 pl-4'>
                  <h3 className='text-lg font-semibold text-gray-800'>Senior {application.jobTitle}</h3>
                  <p className='text-gray-600 text-sm mb-2'>Tech Corp Inc. • 2021 - Present</p>
                  <ul className='text-gray-700 space-y-1 text-sm list-disc list-inside'>
                    <li>Led development of multiple high-impact projects</li>
                    <li>Mentored junior developers and conducted code reviews</li>
                    <li>Improved application performance by 40%</li>
                  </ul>
                </div>
                <div className='border-l-4 border-gray-300 pl-4'>
                  <h3 className='text-lg font-semibold text-gray-800'>{application.jobTitle}</h3>
                  <p className='text-gray-600 text-sm mb-2'>Digital Solutions Ltd. • 2019 - 2021</p>
                  <ul className='text-gray-700 space-y-1 text-sm list-disc list-inside'>
                    <li>Developed and maintained web applications</li>
                    <li>Collaborated with cross-functional teams</li>
                    <li>Implemented best practices and coding standards</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className='bg-white rounded-xl shadow-md p-6'>
              <h2 className='text-xl font-bold text-gray-800 mb-4'>Education</h2>
              <div className='border-l-4 border-blue-600 pl-4'>
                <h3 className='text-lg font-semibold text-gray-800'>Bachelor of Computer Science</h3>
                <p className='text-gray-600 text-sm'>University of Technology • 2015 - 2019</p>
              </div>
            </div>

            {/* Cover Letter */}
            <div className='bg-white rounded-xl shadow-md p-6'>
              <h2 className='text-xl font-bold text-gray-800 mb-4'>Cover Letter</h2>
              <p className='text-gray-700 leading-relaxed'>
                Dear Hiring Manager,<br /><br />
                I am writing to express my strong interest in the {application.jobTitle} position. With over 5 years 
                of professional experience and a proven track record of delivering high-quality solutions, I am confident 
                in my ability to contribute to your team's success.<br /><br />
                Throughout my career, I have developed expertise in modern technologies and best practices. I am particularly 
                drawn to your company's commitment to innovation and excellence. I believe my skills and experience align 
                perfectly with your requirements.<br /><br />
                Thank you for considering my application. I look forward to the opportunity to discuss how I can contribute 
                to your team.<br /><br />
                Best regards,<br />
                {application.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ApplicationDetail
