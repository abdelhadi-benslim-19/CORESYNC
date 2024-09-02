import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to CoreSync</h1>
      <div className="flex space-x-4">
        <Link href="/workouts" className="btn">Workouts</Link>
        <Link href="/runs" className="btn">Running</Link>
        <Link href="/sleep" className="btn">Sleep Tracking</Link>
      </div>
    </div>
  );
}
