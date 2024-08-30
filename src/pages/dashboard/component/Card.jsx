import { AppHeading } from "../../../components/heading/Heading";
import { AppButton } from "../../../components/button/AppButton";

function DetailsCard({ className, subtitle, otherClass, title, count = 0 }) {
  return (
    <div className={className}>
      <AppHeading title={title} subtitle={subtitle} />
      <AppHeading title={count} className={otherClass} />
    </div>
  );
}

export default DetailsCard;
