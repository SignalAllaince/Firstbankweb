import React from "react";

interface PaginationContextInterface {
  onNext: () => void;
  onPrev: () => void;
  currentPageNumber: number;
  totalPages: number;
}
interface PaginationPropsInterface {
  children?: React.ReactNode;
  currentPageNumber: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  total: number;
  pageSize?: number;
}

const PaginationCtx = React.createContext<PaginationContextInterface>(
  {} as PaginationContextInterface
);

const PaginationContextProvider = ({
  children,
  setPage,
  currentPageNumber,
  total,
  pageSize = 10,
}: PaginationPropsInterface) => {
  const totalPages = Math.ceil(total / pageSize);

  const onNext = () => {
    if (totalPages === currentPageNumber) return;
    setPage((prev) => prev + 1);
  };

  const onPrev = () => {
    if (currentPageNumber === 1) return;
    setPage((prev) => prev - 1);
  };

  return (
    <PaginationCtx.Provider
      value={{ currentPageNumber, onNext, onPrev, totalPages }}
    >
      {children}
    </PaginationCtx.Provider>
  );
};

export const usePagination = () => {
  const context = React.useContext(PaginationCtx);

  if (context === null) {
    throw new Error("usePagination must be used within a Pagination Provider");
  }
  return context;
};

export default PaginationContextProvider;
