import { useState } from 'react';
import { Button } from '@/components/ui/button';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <main className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold">Hello Vite + React + Tailwind CSS</h1>
      <p className="text-lg text-gray-500">Edit App.tsx and save to test HMR updates.</p>
      <p className="text-lg">count: {count}</p>
      <Button onClick={() => setCount((count) => count + 1)}>count++</Button>
    </main>
  );
};

export default App;
