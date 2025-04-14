import * as types from '../utils/types'
import plusSvg from '../assets/plus.svg'

interface TagProps {
  tags: types.Tag[]
}

export const Tag = ({ tags = [] }: TagProps) => {
  return (
    <>
      {tags.length === 0 && (
        <button className='flex items-center space-x-1 px-3 py-1 border border-gray-200 rounded-full text-[#808593] text-sm font-medium hover:bg-gray-100'>
          <img src={plusSvg} alt='Add Tag' className='w-2.5 h-2.5' />
          <span>Add Tag</span>
        </button>
      )}

      {tags.length > 0 && (
        <div className='flex items-center space-x-1 px-3 py-1 border border-gray-200 rounded-full text-sm font-medium gap-2 w-fit max-w-40'>
          {tags.length === 1 && (
            <>
              <span
                className='w-2 h-2 rounded-sm'
                style={{ backgroundColor: tags[0].color }}></span>
              <span>{tags[0].text}</span>
            </>
          )}

          {tags.length > 1 && (
            <>
              <div className='flex gap-2'>
                {tags.map((t, index) => (
                  <span
                    key={index}
                    className='w-2 h-2 rounded-sm'
                    style={{ backgroundColor: t.color }}></span>
                ))}
              </div>
              <span>{tags.length} tags</span>
            </>
          )}
        </div>
      )}
    </>
  )
}
