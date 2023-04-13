export function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

// import { ToastProps, ToastProvider } from "react-toast-notifications";

// const MyCustomToast = ({
//   appearance,
//   children,
//   transitionState,
// }: ToastProps) => {
//   console.log(transitionState);

//   return (
//     <div
//       className="mb-2 min-w-[400px]   rounded px-2 py-3"
//       style={{ background: appearance === "error" ? "red" : "green" }}
//     >
//       {children}
//     </div>
//   );
// };
