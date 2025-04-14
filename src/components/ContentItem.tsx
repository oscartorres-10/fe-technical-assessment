import { Workflow } from '../utils/types'
import { Tag } from './Tag'
import { Name } from './Name'
import pencilSvg from '../assets/pencil.svg'
import trashSvg from '../assets/trash.svg'

const formatRelativeDate = (date: Date) => {
  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)

  const intervals = [
    { unit: 'year', seconds: 31536000 },
    { unit: 'month', seconds: 2592000 },
    { unit: 'week', seconds: 604800 },
    { unit: 'day', seconds: 86400 },
    { unit: 'hour', seconds: 3600 },
    { unit: 'minute', seconds: 60 },
    { unit: 'second', seconds: 1 },
  ]

  for (const interval of intervals) {
    const count = Math.floor(diffInSeconds / interval.seconds)
    if (Math.abs(count) > 0) {
      const relativeTime = new Intl.RelativeTimeFormat('en', {
        numeric: 'auto',
      }).format(-count, interval.unit as Intl.RelativeTimeFormatUnit)
      return relativeTime.charAt(0).toUpperCase() + relativeTime.slice(1)
    }
  }

  return 'Just now'
}

export const ContentItem = ({ type, name, tags, last_updated }: Workflow) => (
  <tr>
    <td className='border-b border-gray-200 px-2 py-5 text-[#808593] font-light text-[13px] leading-[20px]'>
      {type}
    </td>
    <td className='border-b border-gray-200 px-2 py-5 font-medium text-[14px] leading-[20px] tracking-normal'>
      <Name emoji={name.emoji} text={name.text} />
    </td>
    <td className='border-b border-gray-200 px-2 py-5 font-medium text-[14px] leading-[20px] tracking-normal'>
      <Tag tags={tags} />
    </td>
    <td className='border-b border-gray-200 px-2 py-5 text-[#808593] font-light text-[13px] leading-[20px]'>
      {formatRelativeDate(new Date(last_updated))}
    </td>
    <td className='border-b border-gray-200 px-2 py-5 font-medium text-[14px] leading-[20px] tracking-normal text-center w-[88px]'>
      <div className='flex gap-2 justify-start'>
        <button className='flex items-center'>
          <img src={pencilSvg} alt='Edit' className='w-6 h-6' />
        </button>
        <button className='flex items-center'>
          <img src={trashSvg} alt='Delete' className='w-6 h-6' />
        </button>
      </div>
    </td>
  </tr>
)
