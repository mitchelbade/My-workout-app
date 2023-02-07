import { useContext } from 'react'
import ProgramCard from '../components/ProgramCard'
import { ProgramContext } from '../context/programContext'

export default function Programs() {
  const { programs } = useContext(ProgramContext)

  const programCard = programs?.map((program) => <ProgramCard key={program.id} program={program} />)

  return (
    <div>
      { programCard }
    </div>
  )
}