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
  const creathorHeader = {
    Authorization: `Bearer ${token}`,
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
