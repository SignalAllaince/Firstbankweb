import Heading from "@/components/heading";
import Icon from "@/components/icon";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Rubik } from "next/font/google";
import {
  closeSnackbar,
  enqueueSnackbar,
  SnackbarKey,
  VariantType,
} from "notistack";
import React, { ReactNode } from "react";

const inter = Rubik({ subsets: ["cyrillic"], weight: ["300"] });

function useNotification() {
  const action = React.useCallback(
    (snackbarId: SnackbarKey): ReactNode => (
      <>
        <button
          onClick={() => {
            closeSnackbar(snackbarId);
          }}
        >
          <Icon IconComp={XMarkIcon} boxSize={4} />
        </button>
      </>
    ),
    []
  );
  const toast = React.useCallback(
    ({
      title,
      description,
      appearance,
    }: {
      title?: string;
      description?: string;
      appearance: VariantType;
    }) => {
      enqueueSnackbar(
        <div className={inter.className}>
          <div className="space-y-0 px-2 py-1">
            {title && <Heading size="h6">{title}</Heading>}
            <p className="text-[12px]">{description}</p>
          </div>
        </div>,
        {
          variant: appearance,
          action,
        }
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return { toast };
}

export default useNotification;
