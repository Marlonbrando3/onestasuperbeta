import React from 'react'

export default function Applychanges({apply, setApply, handleChangeFrom, handleChangeTo, newSearch, setNewSearch}) {

  const handleChange = () => {
    setNewSearch(true)
    setApply(false)
  }

  return (
    <div className={apply ? 'z-40 border-4 border-red-600 bg-white rounded-xl fixed flex justify-center items-center inset-x-1 lg:inset-x-1/3 lg:top-24 lg:bottom-auto bottom-1 transition-all duration-200' : 'z-40 border-4 border-red-600 bg-white rounded-xl fixed flex justify-center items-center inset-x-1/3 -top-60 transition-all duration-200'}>
          <div className='px-2'>Po wprowadzeniu wszystkich kryterów</div>
              <div onClick={handleChange} className='px-2 py-1 my-2 bg-green-600 text-white text-center rounded-md cursor-pointer'>Zatwierdź</div>
    </div>
  )
}
