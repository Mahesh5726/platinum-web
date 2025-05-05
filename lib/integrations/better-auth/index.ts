import { createAuthClient } from "better-auth/react";
import { serverUrl } from "@/lib/environment";

export const betterAuthClient = createAuthClient({
 baseURL: serverUrl,
 basePath: "/authentications",
})