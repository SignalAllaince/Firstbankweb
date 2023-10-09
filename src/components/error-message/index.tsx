import shirtImg from "../../../public/images/error.svg";
import Heading from "../heading";
import BlurImage from "../image";
import Section from "../section";

function ErrorMessage() {
  return (
    <Section className="my-4 flex w-full flex-col items-center justify-center space-y-4 py-4">
      <div className="max-w-xl">
        <BlurImage src={shirtImg} alt={"djsdsd"} />
      </div>
      <div className="flex flex-col items-center space-y-3 text-center">
        <Heading size="h4">Oops, something went wrong!</Heading>
        <p className="font-light">
          This may be due to a bad connection, go back and try again.
        </p>
      </div>
    </Section>
  );
}

export default ErrorMessage;
