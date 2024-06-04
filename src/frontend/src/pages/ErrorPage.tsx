import ErrorComponent from "../components/common/ErrorComponent";
import { ErrorPageType } from "../types/commonTypes";

function ErrorPage(props: ErrorPageType) {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <ErrorComponent type={props.type} />
    </div>
  );
}

export default ErrorPage;
