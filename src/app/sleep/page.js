import SleepTracker from '@/components/SleepTracker';

export default function SleepPage() {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold mb-4">Sleep Tracking</h1>
      <SleepTracker />
    </div>
  );
}
