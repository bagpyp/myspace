'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export function SignInButton() {
  const { data: session, status } = useSession();
  console.log('session:', session, 'status:', status);

  if (status === 'loading') {
    return <>...</>;
  }

  if (status === 'authenticated') {
    return (
      <>
        <SignOutButton />
        &nbsp;
        <Link href={`/dashboard`}>
          <Image
            src={session?.user?.image ?? '/meme-man.webp'}
            width={32}
            height={32}
            alt={'Your Name'}
          />
        </Link>
      </>
    );
  }

  return <button onClick={() => signIn()}>Sign Up/In</button>;
}

export function SignOutButton() {
  return (
    <button
      onClick={() => {
        signOut().then((r) => console.log(r));
      }}
    >
      Sign Out
    </button>
  );
}
