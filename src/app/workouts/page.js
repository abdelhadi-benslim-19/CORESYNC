import WorkoutCard from '@/components/WorkoutCard';

export default function WorkoutsPage() {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold mb-4">Gym Workouts</h1>
      <div className="grid gap-4">
        <WorkoutCard 
          title="Push Day"
          exercises={['Bench Press', 'Shoulder Press', 'Tricep Pushdown']}
        />
        {/* Additional Workout Cards */}
      </div>
    </div>
  );
}
