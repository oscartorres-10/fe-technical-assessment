import { LeftSidebar } from './components/LeftSidebar'
import { Content } from './components/Content'

export const App = () => {
  return (
    <div className='h-full flex'>
      <LeftSidebar />
      <div className='flex-1 flex flex-col'>
        <Content />
      </div>
    </div>
  )
}

export default App
