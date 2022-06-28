import { ReactNode, useEffect } from "react";
import { useRouter } from "next/router";

import useAuth from "../hooks/useAuth";
import { PATH_DASHBOARD } from "../utils/routes";

type Props = {
  children: ReactNode;
};

export default function PublicGuard({ children }: Props) {
  const { push } = useRouter();

  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      push(PATH_DASHBOARD.root);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  return <>{children}</>;
}
