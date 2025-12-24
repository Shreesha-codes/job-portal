import React, { useState, useContext, useMemo } from 'react'
import { AppContext } from '../context/AppContext'
import { assets, JobCategories, JobLocations } from '../assets/assets'
import JobCard from './JobCard'

const JobListing = () => {
    const { searchFilter, isSearched, setSearchfilter, jobs } = useContext(AppContext)
    const [showFilter, setShowFilter] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [selectedCategories, setSelectedCategories] = useState([])
    const [selectedLocations, setSelectedLocations] = useState([])

    const handleCategoryChange = (category) => {
        setSelectedCategories(prev => 
            prev.includes(category)
                ? prev.filter(cat => cat !== category)
                : [...prev, category]
        )
        setCurrentPage(1)
    }

    const handleLocationChange = (location) => {
        setSelectedLocations(prev => 
            prev.includes(location)
                ? prev.filter(loc => loc !== location)
                : [...prev, location]
        )
        setCurrentPage(1)
    }

    // Memoize filtered jobs
    const filteredJobs = useMemo(() => {
        const matchesCategory = (job) => {
            if (selectedCategories.length === 0) return true;
            return selectedCategories.includes(job.category);
        };
        const matchesLocation = (job) => {
            if (selectedLocations.length === 0) return true;
            return selectedLocations.includes(job.location);
        };
        const matchesTitle = (job) => {
            if (!searchFilter.title) return true;
            return job.title.toLowerCase().includes(searchFilter.title.toLowerCase());
        };
        const matchesSearchLocation = (job) => {
            if (!searchFilter.location) return true;
            return job.location.toLowerCase().includes(searchFilter.location.toLowerCase());
        };
        return jobs.slice().reverse().filter(
            job => matchesCategory(job) && matchesLocation(job) && matchesTitle(job) && matchesSearchLocation(job)
        );
    }, [jobs, searchFilter, selectedCategories, selectedLocations]);

    const jobsPerPage = 6;
    const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
    const startIdx = (currentPage - 1) * jobsPerPage;
    const endIdx = startIdx + jobsPerPage;
    const currentJobs = filteredJobs.slice(startIdx, endIdx);
  return (
    <div className='container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8'>
      {/* sidebar */}
      <div className='w-full lg:w-1/4 bg-white px-4'>
        {/* search filter from hero component */}
        {isSearched && (searchFilter.title !== "" || searchFilter.location !== "") && (
          <>
            <h3 className='font-medium text-lg mb-4'>Current Search</h3>
            <div className='mb-4 text-gray-600 flex flex-row items-center gap-2'>
              {searchFilter.title && (
                <span className='inline-flex items-center gap-1 bg-white border border-blue-200 px-2 py-0.5 rounded text-xs'>
                  {searchFilter.title}
                  <img onClick={() => setSearchfilter({ ...searchFilter, title: "" })} className="cursor-pointer w-3 h-3" src={assets.cross_icon} alt="cross icon" />
                </span>
              )}
              {searchFilter.location && (
                <span className='inline-flex items-center gap-1 bg-red-50 border border-red-200 px-2 py-0.5 rounded text-xs'>
                  {searchFilter.location}
                  <img onClick={() => setSearchfilter({ ...searchFilter, location: "" })} className="cursor-pointer w-3 h-3" src={assets.cross_icon} alt="cross icon" />
                </span>
              )}
            </div>
          </>
        )}

        <button onClick={() => setShowFilter(!showFilter)} className='px-6 py-1.5 rounded border border-gray-400 lg:hidden'>
          {showFilter ? "Close" : "Filters"}
        </button>

        {/* Category Filter */}
        <div className={showFilter ? "" : "max-lg:hidden"}>
          <h4 className='font-medium text-lg py-4'>Search by Categories</h4>
          <ul className='space-y-4 text-gray-600'>
            {JobCategories.map((category, index) => (
              <li className="flex gap-3 items-center" key={index}>
                <input onChange={() => handleCategoryChange(category)} className='scale-125' type="checkbox"
                  checked={selectedCategories.includes(category)} />
                {category}
              </li>
            ))}
          </ul>
        </div>
        {/* Search by location */}
        <div className={showFilter ? "" : "max-lg:hidden"}>
          <h4 className='font-medium text-lg py-4'>Search by Locations</h4>
          <ul className='space-y-4 text-gray-600'>
            {JobLocations.map((location, index) => (
              <li className="flex gap-3 items-center" key={index}>
                <input onChange={() => handleLocationChange(location)} className='scale-125' type="checkbox"
                  checked={selectedLocations.includes(location)} />
                {location}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* job listings section */}
      <section className='w-full lg:3/4 text-gray-800 max-lg:px-4'>
        <h3 className='font-bold text-3xl py-2 mb-2 tracking-tight' id='job-list'>Latest Jobs</h3>
        <p className='mb-8 text-gray-500'>Get your dream job here</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8'>
          {currentJobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
        {/* pagination */}
        {filteredJobs.length > jobsPerPage && (
          <div className='flex items-center justify-center mt-8 gap-2'>
            <style>{`
              .pagination-slide {
                transition: box-shadow 0.2s, background 0.2s, color 0.2s, transform 0.3s;
              }
              .pagination-slide.active {
                box-shadow: 0 2px 8px rgba(37, 99, 235, 0.15), 0 1.5px 4px rgba(0,0,0,0.08);
                background: #2563eb;
                color: #fff;
                transform: scale(1.08);
              }
              .pagination-slide:not(.active) {
                box-shadow: 0 1px 3px rgba(0,0,0,0.07);
                background: #fff;
                color: #2563eb;
              }
              .pagination-slide:disabled {
                background: #f3f4f6;
                color: #9ca3af;
                box-shadow: none;
                cursor: not-allowed;
              }
            `}</style>
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              aria-label='Previous page'
              className={`pagination-slide px-3 py-1 mx-1 rounded ${currentPage === 1 ? '' : ''}`}
            >
              Prev
            </button>
            {/* Professional pagination with ellipsis */}
            {totalPages > 6 ? (
              <>
                <button
                  onClick={() => setCurrentPage(1)}
                  className={`pagination-slide px-3 py-1 mx-1 rounded ${currentPage === 1 ? 'active' : ''}`}
                >1</button>
                {currentPage > 3 && <span className='px-2'>...</span>}
                {Array.from({ length: totalPages }, (_, i) => i + 1)
                  .filter(page =>
                    page === 1 ||
                    page === totalPages ||
                    Math.abs(page - currentPage) <= 1
                  )
                  .map(page => (
                    page !== 1 && page !== totalPages ? (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`pagination-slide px-3 py-1 mx-1 rounded ${currentPage === page ? 'active' : ''}`}
                      >{page}</button>
                    ) : null
                  ))}
                {currentPage < totalPages - 2 && <span className='px-2'>...</span>}
                <button
                  onClick={() => setCurrentPage(totalPages)}
                  className={`pagination-slide px-3 py-1 mx-1 rounded ${currentPage === totalPages ? 'active' : ''}`}
                >{totalPages}</button>
              </>
            ) : (
              Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`pagination-slide px-3 py-1 mx-1 rounded ${currentPage === index + 1 ? 'active' : ''}`}
                >
                  {index + 1}
                </button>
              ))
            )}
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              aria-label='Next page'
              className={`pagination-slide px-3 py-1 mx-1 rounded ${currentPage === totalPages ? '' : ''}`}
            >
              Next
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

export default JobListing
