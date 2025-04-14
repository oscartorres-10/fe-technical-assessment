import { Nav } from './Nav'
import plusSvg from '../assets/plus.svg'

export const LeftSidebar = () => {
  return (
    <aside className='flex flex-col w-64 p-4 border-r border-gray-300 gap-2'>
      <div className='ml-4 flex items-center space-x-2'>
        <img
          className='w-9 h-9 bg-purple-300 rounded-md'
          src='https://avatars.githubusercontent.com/u/38195378?v=4'></img>
        <h1 className='font-semibold text-[14px] leading-[20px]'>AirOps</h1>
      </div>
      <button className='px-4 py-2 bg-white border border-gray-300 rounded-md shadow-xs text-[13px] leading-[20px] font-semibold text-black hover:bg-gray-50 w-full flex items-center justify-center space-x-2'>
        <span>New</span>
        <img src={plusSvg} alt='Add Icon' className='w-3 h-3' />
      </button>
      <Nav />
    </aside>
  )
}
