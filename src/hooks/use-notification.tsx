import Icon from "@/components/icon";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  closeSnackbar,
  enqueueSnackbar,
  SnackbarKey,
  VariantType,
} from "notistack";
import React, { ReactNode } from "react";

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
      description: string;
      appearance: VariantType;
    }) => {
      enqueueSnackbar(
        <div className="space-y-0 p-1">
          {title && <h1 className="text-md font-mono font-bold">{title}</h1>}
          <p className="text-[12px]">{description}</p>
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
