export default function ExerciseCard({ exercise }) {
  
    return (
      <div className="exercise-card">
        <img src={ exercise.image } alt={ exercise.name } />
        <h3>Name: { exercise.name }</h3>
        <p>Description: { exercise.description }</p>
      </div>
    )
  }