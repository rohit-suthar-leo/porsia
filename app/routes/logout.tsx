import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { logout } from "~/services/session.server";

export const action: ActionFunction = async ({ request }) => {
  const logoutData = await logout(request);
  return redirect("/login", { headers: logoutData.headers });
};

export const loader: LoaderFunction = async ({ request }) => {
  const logoutData = await logout(request);
  return redirect("/login", { headers: logoutData.headers });
};
