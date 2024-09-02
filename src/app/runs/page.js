import RunTracker from '@/components/RunTracker';

export default function RunsPage() {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold mb-4">Running Tracker</h1>
      <RunTracker />
    </div>
  );
}
