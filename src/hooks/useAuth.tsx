
import { useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export function useAuth(redirectTo?: string) {
  const navigate = useNavigate();
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_, session) => {
        setSession(session);
        setIsLoading(false);
        
        if (!session && redirectTo) {
          navigate(redirectTo);
          toast.error("You must be logged in to access this page");
        }
      }
    );

    // Check initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setIsLoading(false);
      
      if (!session && redirectTo) {
        navigate(redirectTo);
        toast.error("You must be logged in to access this page");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate, redirectTo]);

  return { session, isLoading };
}
