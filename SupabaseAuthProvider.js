// SupabaseAuthProvider.js
import React, { useEffect, useState } from "react";
import { supabase } from "./lib/supabase_module"; // Import your Supabase client

const SupabaseAuthProvider = ({ children }) => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const sessionListener = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    // Fetch the initial session
    const fetchSession = async () => {
      const { data: session, error } = await supabase.auth.getSession();
      if (error) {
        console.error("Error fetching session:", error.message);
      } else {
        setSession(session);
      }
    };

    fetchSession();

    // Cleanup listener on unmount
    return () => {
      sessionListener.unsubscribe();
    };
  }, []);

  return <>{children}</>;
};

export { SupabaseAuthProvider };
