import { useGetStats } from '@/hooks/useGetStats'
import StatsList from './statsList'

const Stats = () => {
  const { data } = useGetStats()
  return (
    <div className="w-full bg-[#0c0b11] flex flex-col p-16 lg:px-36">
      <h1 className="text-4xl">Statistics</h1>
      <StatsList data={data} />
    </div>
  )
}

export default Stats
