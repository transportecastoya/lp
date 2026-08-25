import React from 'react'
import { useInView } from '../hooks/useInView'
import { useCountUp } from '../hooks/useCountUp'

const stats = [
  { label: 'Pedidos', value: 8421 },
  { label: 'Clientes', value: 4120 },
  { label: 'Años', value: 6 },
  { label: 'Platos', value: 48 },
]

function StatCard({ label, value, active }: { label: string; value: number; active: boolean }) {
  const count = useCountUp(value, 1500, active)
  return (
    <div className="bg-white/5 p-4 rounded-lg text-center">
      <div className="text-3xl font-bold text-pm-yellow">{count}</div>
      <div className="text-sm text-gray-300 mt-1">{label}</div>
    </div>
  )
}

export default function Stats() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-12 bg-gradient-to-b from-black/0 to-black/20">
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {stats.map((s) => (
          <StatCard key={s.label} label={s.label} value={s.value} active={inView} />
        ))}
      </div>
    </section>
  )
}
