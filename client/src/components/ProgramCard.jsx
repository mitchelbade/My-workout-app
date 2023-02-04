export default function ProgramCard({ program }) {

  return (
    <div className="program-card">
      <h3>Name: { program.name }</h3>
      <p>Description: { program.description }</p>
    </div>
  )
}