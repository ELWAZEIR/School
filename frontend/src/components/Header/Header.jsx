import React from 'react'

function Header() {
  return (
    <div className="bg-[#06213F] py-4">
    <div className="container mx-auto flex justify-between items-center py-4 px-4">
      <div>
        <h1 className="text-2xl font-bold">Cairo Internationl School</h1>
        
      </div>
      <form className="flex items-center">
        <input
          type="text"
          placeholder="Search Here"
          className="px-4 py-2 rounded-l-lg focus:outline-none text-black"
        />
        <button
          type="submit"
          className="bg-[#55ABDA] px-4 py-2 rounded-r-lg hover:bg-[#3B8DBF] transition-colors"
        >
          Search
        </button>
      </form>
    </div>
  </div>
  )
}

export default Header