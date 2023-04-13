import React from "react";
import { AppearanceTypes, useToasts } from "react-toast-notifications";

function useNotification() {
  const { addToast } = useToasts();

  const toast = React.useCallback(
    ({
      title,
      description,
      appearance,
    }: {
      title?: string;
      description: string;
      appearance: AppearanceTypes;
    }) => {
      addToast(
        <div className="space-y-0 py-1">
          {title && <h1 className="text-md font-mono font-bold">{title}</h1>}
          <p className="text-[13px]">{description}</p>
        </div>,
        {
          appearance,
        }
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return { toast };
}

export default useNotification;
