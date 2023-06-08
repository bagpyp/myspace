import UserCard from '@/components/UserCard/UserCard';
import styles from './page.module.css';
import { prisma } from '@/lib/prisma';

export default async function Users() {
  // no need to call api route, can directly access
  // server component.  WTF is this, PHP?
  const users = await prisma.user.findMany();

  return (
    <div className={styles.grid}>
      {users.map((user) => {
        return <UserCard key={user.id} {...user} />;
      })}
    </div>
  );
}
