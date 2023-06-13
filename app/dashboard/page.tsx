import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/api/auth/signin');
  }

  const currentUserEmail = session?.user?.email!;
  const user = prisma.user.findUnique({
    where: {
      email: currentUserEmail
    }
  });

  return (
    <>
      <h2>Dashboard</h2>
      <ProfileForm user={user} />
    </>
  );
}
