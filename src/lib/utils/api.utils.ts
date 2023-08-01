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
  const givenMethod = method.toLocaleLowerCase() as CustomMethod;
  console.log(session, "session from lib");

  const fbnHeader = {
    // @ts-expect-error
    Authorization: `Bearer ${session?.accessToken}`,
  };

  const headers = {
    "content-type": "application/json",
    ...fbnHeader,
    ...requestHeader,
  };

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
