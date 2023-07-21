import { CustomNextPage } from '@/types/custom-next-page';
import { signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';

const Home: CustomNextPage = () => {
  const { data, status } = useSession();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {data?.user?.name || <Link href="/auth/signin">SignIn</Link>}
        {status === 'authenticated' && (
          <button className="ml-5" onClick={() => signOut()}>
            SignOut
          </button>
        )}
        <Link href="/secret" className="ml-5">
          SecretPage
        </Link>
      </main>
    </>
  );
};

export default Home;
