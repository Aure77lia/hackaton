import Image from 'next/image'
import { Hero,Presentation,BusinessPlan } from '../../sections'

export default function Home() {
  return (
    <main>
      <Hero />
      <Presentation />
      <BusinessPlan />
    </main>
  )
}
