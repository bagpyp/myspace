'use client';

import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';

interface Props {
  targetUserId: string;
  isFollowing: boolean;
}

export default function FollowClient({
  targetUserId,
  isFollowing
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const isMutating = isFetching || isPending;

  const follow = async () => {
    setIsFetching(true);

    const res = await fetch('/api/follow', {
      method: 'POST',
      body: JSON.stringify({ targetUserId })
    });

    setIsFetching(false);

    console.log(res);

    startTransition(() => {
      // Refresh the current route:
      // - Makes a new request to the server for the route
      // - Re-fetches data requests and re-renders Server Components
      // - Sends the updated React Server Component payload to the client
      // - The client merges the payload without losing unaffected
      //   client-side React state or browser state
      router.refresh();
    });
  };

  const unfollow = async () => {
    setIsFetching(true);

    const res = await fetch(
      `/api/follow?targetUserId=${targetUserId}`,
      {
        method: 'DELETE'
      }
    );

    setIsFetching(false);
    startTransition(() => router.refresh());
  };

  return isFollowing ? (
    <button onClick={unfollow}>{'Unfollow'}</button>
  ) : (
    <button onClick={follow}>{'Follow'}</button>
  );
}
