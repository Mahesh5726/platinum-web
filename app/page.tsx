"use client";

import { betterAuthClient } from "@/lib/integrations/better-auth";

const RootPage = () => {
  const { data } = betterAuthClient.useSession();
  return (
    <div>RootPage</div>
  )
}

export default RootPage