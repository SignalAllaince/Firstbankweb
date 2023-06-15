import React from "react";

interface PaginationContextInterface {
  onNext: () => void;
  onPrev: () => void;
  currentPageNumber: number;
}
interface PaginationPropsInterface {
  children?: React.ReactNode;
  currentPageNumber: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  total: number;
}

const PaginationCtx = React.createContext<PaginationContextInterface>(
  {} as PaginationContextInterface
);

const PaginationContextProvider = ({
  children,
  setPage,
  currentPageNumber,
  total,
}: PaginationPropsInterface) => {
  const pageSize = 10;
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
    <PaginationCtx.Provider value={{ currentPageNumber, onNext, onPrev }}>
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
