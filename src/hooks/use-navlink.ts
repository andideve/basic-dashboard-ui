import { useRouter } from 'next/router';
import { useCallback } from 'react';

export default function useNavlink() {
  const router = useRouter();
  const isActive = useCallback(
    (to: string, exact?: boolean) => {
      const url = {
        pathname: router.asPath.split('?')[0],
      };
      if (exact) return to === url.pathname;
      return new RegExp(`^${to}`).test(url.pathname);
    },
    [router.asPath],
  );

  return { isActive } as const;
}
