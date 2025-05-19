import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Success() {
  const router = useRouter();

  useEffect(() => {
    // Redirect back to home page after 5 seconds
    const timer = setTimeout(() => {
      router.push('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md w-full">
        <svg
          className="w-16 h-16 text-green-500 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Thank You!
        </h1>
        <p className="text-gray-600 mb-8">
          Your message has been received. We'll get back to you soon.
        </p>
        <p className="text-sm text-gray-500">
          You'll be redirected back to the homepage in a few seconds...
        </p>
      </div>
    </div>
  );
}
