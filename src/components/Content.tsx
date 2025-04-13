import { useState, useEffect } from 'react'
import { ContentItem } from './ContentItem'
import { ApiResponse, Workflow } from '../utils/types'
import { Loading } from './Loading'
import { ErrorComponent } from './Error'
import { Header } from './Header'

export const Content = () => {
  const [data, setData] = useState<Workflow[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [sortQuery, setSortQuery] = useState<string>('')

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const body = {
          inputs: {},
        }
        const response = await fetch(
          `https://api.airops.com/public_api/airops_apps/${
            import.meta.env.VITE_WORKFLOW_ID
          }/execute`,
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
          }
        )

        if (!response.ok) {
          throw new Error('Error fetching the workflow data')
        }

        const workflowMockData: ApiResponse = await response.json()
        setData(workflowMockData.result)
      } catch (error) {
        console.log('🚀 > fetchData > error:', error)
        setError('Something went wrong while fetching your data :(')
      }
      setLoading(false)
    }

    fetchData()
  }, [])

  // Update the URL whenever sort or search queries change
  useEffect(() => {
    const url = new URL(window.location.href)
    if (searchQuery) url.searchParams.set('search', searchQuery)
    if (sortQuery) url.searchParams.set('sort_by', sortQuery)
    if (!searchQuery) url.searchParams.delete('search')
    if (!sortQuery) url.searchParams.delete('sort_by')
    window.history.replaceState({}, '', url.toString())
  }, [searchQuery, sortQuery])

  const filteredData = data
    .filter(
      (item) =>
        item.name.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.type.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((item1, item2) => {
      if (sortQuery === 'name') {
        return item1.name.text.localeCompare(item2.name.text)
      }
      if (sortQuery === 'date') {
        return item2.last_updated.localeCompare(item1.last_updated)
      }
      return 0
    })

  return (
    <div className='min-h-screen flex flex-col p-5'>
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        sortQuery={sortQuery}
        setSortQuery={setSortQuery}
      />
      <table className='w-full'>
        <thead>
          <tr>
            <th className='border-b border-gray-300 p-2 text-left font-semibold text-[14px] leading-[20px] tracking-normal'>
              Type
            </th>
            <th className='border-b border-gray-300 p-2 text-left font-semibold text-[14px] leading-[20px] tracking-normal'>
              Name
            </th>
            <th className='border-b border-gray-300 p-2 text-left font-semibold text-[14px] leading-[20px] tracking-normal'>
              Tags
            </th>
            <th className='border-b border-gray-300 p-2 text-left font-semibold text-[14px] leading-[20px] tracking-normal'>
              Last Updated
            </th>
            <th className='border-b border-gray-300 p-2 text-left font-semibold text-[14px] leading-[20px] tracking-normal'>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <tr>
              <td colSpan={5} className='pt-10'>
                <Loading />
              </td>
            </tr>
          )}
          {error && (
            <tr>
              <td colSpan={5} className='pt-10'>
                <ErrorComponent message={error} />
              </td>
            </tr>
          )}
          {filteredData.length > 0 &&
            filteredData.map((item, index) => (
              <ContentItem key={index} {...item} />
            ))}

          {filteredData.length === 0 && !loading && (
            <tr>
              <td colSpan={5} className='pt-10'>
                <p className='text-body-lg font-semibold flex flex-col items-center gap-4 text-center'>
                  No matching items for the current filters.
                </p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
