interface NameProps {
  emoji: string
  text: string
}

export const Name = ({ emoji, text }: NameProps) => (
  <div className='flex items-center space-x-2 hover:cursor-pointer'>
    <span className='w-[18px] h-[20px] inline-block'>{emoji}</span>
    <span>{text}</span>
  </div>
)
