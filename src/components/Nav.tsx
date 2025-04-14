import databaseSvg from '../assets/database.svg'
import barChartSvg from '../assets/bar-chart.svg'
import settingsSvg from '../assets/settings.svg'

enum NavOptions {
  DataName = 'Data Name',
  Monitoring = 'Monitoring',
  Settings = 'Settings',
}

const NavItem = ({
  imgSrc,
  imgAlt,
  name,
}: {
  imgSrc: string
  imgAlt: string
  name: string
}) => (
  <button className='flex items-center space-x-2 text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer p-2 w-full'>
    <img src={imgSrc} alt={imgAlt} className='w-[11px] h-[11px]' />
    <span className='font-medium text-[12px] leading-[20px] tracking-normal'>
      {name}
    </span>
  </button>
)

export const Nav = () => {
  return (
    <nav>
      <NavItem
        imgSrc={databaseSvg}
        imgAlt='Storage Icon'
        name={NavOptions.DataName}
      />
      <NavItem
        imgSrc={barChartSvg}
        imgAlt='Bar Chart Icon'
        name={NavOptions.Monitoring}
      />
      <NavItem
        imgSrc={settingsSvg}
        imgAlt='Settings Icon'
        name={NavOptions.Settings}
      />
    </nav>
  )
}
