import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const useAuth = (requireAuth: boolean = true) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;

    if (!session && requireAuth) {
      router.push("/auth/signin");
    }
  }, [session, status, requireAuth, router]);

  return { session, status };
};
