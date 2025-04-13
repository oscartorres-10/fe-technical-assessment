interface ErrorProps {
  message: string
}

// Adding the "Component" word at the end to avoid conflict with Error keyword in `throw new Error(...)`.
export const ErrorComponent = ({ message }: ErrorProps) => (
  <div className='flex flex-col justify-center items-center h-full text-red-500 font-medium'>
    <p>{message}</p>
    <button
      onClick={() => window.location.reload()}
      className='mt-4 px-4 py-2 text-black rounded border hover:bg-gray-100'>
      Give it another shot
    </button>
  </div>
)
