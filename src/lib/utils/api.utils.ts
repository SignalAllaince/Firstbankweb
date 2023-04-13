import axios from "axios";
import { getSession } from "next-auth/react";
import { SecureRequestProps } from "types/action";

export const secureRequest = async ({
  url,
  method = "get",
  body = undefined,
  headers: requestHeader,
}: SecureRequestProps) => {
  const session = await getSession();
  const token = session?.accessToken;

  const creathorHeader = {
    Authorization: `Bearer ${token}`,
  };

  const headers = { ...creathorHeader, ...requestHeader };

  if (
    method.toLocaleLowerCase() === "get" ||
    method.toLocaleLowerCase() === "delete"
  ) {
    //dont include body in GET request request will fail
    return axios[method](url, {
      params: {
        ...body,
      },
      headers,
    });
  }
  return axios[method](url, body, { headers });
};
