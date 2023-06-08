import { CustomMethod, SecureRequestProps } from "@/types/api.types";
import axios from "axios";
import { getSession } from "next-auth/react";

export const secureRequest = async ({
  url,
  method = "get",
  body = undefined,
  headers: requestHeader,
}: SecureRequestProps) => {
  const session = await getSession();
  //   const token = session?.accessToken;
  const token = session;
  const givenMethod = method.toLocaleLowerCase() as CustomMethod;
  const myToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6InN1cGVyYWRtaW5AYnJhbmRzaG9wLmNvbSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6Ik5BIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoic3VwZXJhZG1pbkBicmFuZHNob3AuY29tIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6IlN1cGVyQWRtaW4iLCJleHAiOjE2ODY4NTAxODQsImlzcyI6Imh0dHBzOi8vYnJhbmRzaG9wYXBpLmF6dXJld2Vic2l0ZXMubmV0IiwiYXVkIjoiaHR0cHM6Ly9icmFuZHNob3BhcGkuYXp1cmV3ZWJzaXRlcy5uZXQifQ.MbH3xJ7tbNrdN_h9e9hBon9MVsa5QJjSVc7ZaQkoGAw";

  const creathorHeader = {
    Authorization: `Bearer ${myToken}`,
  };

  const headers = { ...creathorHeader, ...requestHeader };

  if (givenMethod === "get" || givenMethod === "delete") {
    //dont include body in GET request request will fail
    return axios[givenMethod](url, {
      params: {
        ...body,
      },
      headers,
    });
  }
  return axios[givenMethod](url, body, { headers });
};
