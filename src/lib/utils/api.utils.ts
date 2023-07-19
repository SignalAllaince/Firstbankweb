import { CustomMethod, SecureRequestProps } from "@/types/api.types";
import axios from "axios";
import { getSession } from "next-auth/react";
import { STOREID } from "../constants";

export const secureRequest = async ({
  url,
  method = "get",
  body = undefined,
  headers: requestHeader,
}: SecureRequestProps) => {
  const session = await getSession();
  //   const token = session?.accessToken;
  const token = session;
  const myToken = JSON.parse(localStorage.getItem(STOREID) as string) ?? "";
  const givenMethod = method.toLocaleLowerCase() as CustomMethod;

  const fbnHeader = {
    Authorization: `Bearer ${myToken}`,
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
