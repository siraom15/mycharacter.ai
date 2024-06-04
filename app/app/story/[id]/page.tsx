"use client";

import { useRouter } from 'next/router';

export default function StoryPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Story ID: {id}</h1>
      {/* Add your story details here */}
    </div>
  );
}
