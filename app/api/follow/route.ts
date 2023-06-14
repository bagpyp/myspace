import { NextRequest } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  const currentUserEmail = session?.user?.email!;

  const { targetId } = await req.json();

  const currentUserId = await prisma.user
    .findUnique({ where: { email: currentUserEmail } })
    .then((user) => {
      return user?.id!;
    });

  // @ts-ignore TODO: npx prisma migrate dev when not on plane
  const record = prisma.follows.create({
    data: {
      followerId: currentUserId,
      followingId: targetId
    }
  });
}
export async function DELETE(req: NextRequest) {}