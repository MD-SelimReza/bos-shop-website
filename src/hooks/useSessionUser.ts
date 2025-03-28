import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

interface User {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  location?: string;
  image?: string;
}

export const useSessionUser = () => {
  const { data: session, status } = useSession();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      // Wait until session has finished loading
      if (status === "loading") return;

      // If there's no session user, stop loading
      if (!session?.user) {
        setUser(null);
        setLoading(false);
        return;
      }

      try {
        setLoading(true); // set loading true while fetching user data

        // Fetch user data from your API endpoint
        const res = await fetch("/api/user/me");
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Failed to fetch user");
        }

        setUser(data.user); // Set user data
        setError(null); // Reset error state
      } catch (err: unknown) {
        // Handle errors and reset user data if there's a problem
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unexpected error occurred");
        }
        setUser(null);
      } finally {
        // Ensure that loading is set to false after fetching user data
        setLoading(false);
      }
    };

    fetchUser();
  }, [session, status]); // Ensure this runs when session status or data changes

  return { user, loading, error };
};
