import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

import Logout from '@/components/auth/logout';
import authOptions from '@/libs/auth-options';

const LogoutPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/');
  } else {
    return <Logout />;
  }
};

export default LogoutPage;
