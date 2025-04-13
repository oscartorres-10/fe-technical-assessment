interface HeaderProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
  sortQuery: string
  setSortQuery: (query: string) => void
}

export const Header = ({
  searchQuery,
  setSearchQuery,
  sortQuery,
  setSortQuery,
}: HeaderProps) => {
  return (
    <header className='flex items-center justify-between border-b-[0.5px] border-gray-300 h-20'>
      <h1 className='font-bold text-[30px] leading-[36px] tracking-[-0.02em]'>
        Workflows
      </h1>
      <div className='flex items-center gap-2'>
        <div className='relative'>
          <select
            className='appearance-none h-[32px] pl-3 pr-5 border-gray-300 border-[0.5px] rounded-[6px] text-[13px] font-[600] leading-[20px] tracking-[0%] text-gray-700'
            value={sortQuery}
            onChange={(e) => {
              setSortQuery(e.target.value)
            }}>
            <option value=''>Sort</option>
            <option value='name'>Name</option>
            <option value='date'>Date</option>
          </select>
          <img
            src='src/assets/arrow_drop_down.svg'
            alt='Dropdown Arrow'
            className='absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none'
          />
        </div>
        <div className='flex items-center h-[32px] border border-gray-300 rounded-[6px] shadow-sm px-[12px] w-full bg-white'>
          <img
            src='src/assets/search.svg'
            alt='Search Icon'
            className='w-4 h-4 text-gray-500 mr-2'
          />
          <input
            type='text'
            placeholder='Search workflows'
            className='flex-1 text-gray-700 outline-none bg-transparent placeholder:text-[14px] placeholder:font-[400] placeholder:leading-[20px]'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
    </header>
  )
}
