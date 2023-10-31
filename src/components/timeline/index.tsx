import Badge from "../badge";
import Icon from "../icon";

function TimeLine({
  badge,
  text,
  isCompleted = true,
}: {
  badge: string;
  text: string;
  isCompleted?: boolean;
}) {
  return (
    <div
      className={`relative space-y-2 ${
        isCompleted ? "opacity-100" : "opacity-30"
      }`}
    >
      <div className="flex items-center gap-4">
        {/* @ts-expect-error */}
        <Icon IconComp={TimelIneIcon} />
        <Badge variant="PendingPayment">{badge}</Badge>
      </div>
      <div
        className={`ml-3 min-h-[60px] border-l border-dashed ${
          isCompleted ? "border-black" : "border-transparent"
        } pb-2 pl-6 pt-2 text-sm font-light`}
      >
        <p>{text}</p>
      </div>
    </div>
  );
}

const TimelIneIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_219_6984)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3 23.25V3C3 2.20435 3.31607 1.44129 3.87868 0.87868C4.44129 0.316071 5.20435 0 6 0L18 0C18.7956 0 19.5587 0.316071 20.1213 0.87868C20.6839 1.44129 21 2.20435 21 3V23.25C21.0001 23.3802 20.9663 23.5083 20.9019 23.6215C20.8375 23.7347 20.7447 23.8291 20.6327 23.8956C20.5207 23.962 20.3933 23.9982 20.263 24.0004C20.1328 24.0027 20.0043 23.971 19.89 23.9085L12 19.6035L4.11 23.9085C3.99574 23.971 3.86718 24.0027 3.73696 24.0004C3.60674 23.9982 3.47935 23.962 3.36734 23.8956C3.25532 23.8291 3.16255 23.7347 3.09814 23.6215C3.03373 23.5083 2.9999 23.3802 3 23.25ZM16.281 8.781C16.4218 8.64017 16.5009 8.44916 16.5009 8.25C16.5009 8.05084 16.4218 7.85983 16.281 7.719C16.1402 7.57817 15.9492 7.49905 15.75 7.49905C15.5508 7.49905 15.3598 7.57817 15.219 7.719L11.25 11.6895L9.531 9.969C9.46127 9.89927 9.37848 9.84395 9.28738 9.80622C9.19627 9.76848 9.09862 9.74905 9 9.74905C8.90138 9.74905 8.80373 9.76848 8.71263 9.80622C8.62152 9.84395 8.53873 9.89927 8.469 9.969C8.39927 10.0387 8.34395 10.1215 8.30622 10.2126C8.26848 10.3037 8.24905 10.4014 8.24905 10.5C8.24905 10.5986 8.26848 10.6963 8.30622 10.7874C8.34395 10.8785 8.39927 10.9613 8.469 11.031L10.719 13.281C10.7887 13.3508 10.8714 13.4063 10.9625 13.4441C11.0537 13.4819 11.1513 13.5013 11.25 13.5013C11.3487 13.5013 11.4463 13.4819 11.5375 13.4441C11.6286 13.4063 11.7113 13.3508 11.781 13.281L16.281 8.781Z"
        fill="#142633"
      />
    </g>
    <defs>
      <clipPath id="clip0_219_6984">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default TimeLine;
