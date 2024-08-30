import DetailsCard from "./Card";
import "./style.scss";

const DetailsView = () => {
  return (
    <div class="details_view">
      {Array(10)
        .fill(null)
        .map((item) => {
          return (
            <DetailsCard
              key={item}
              link=""
              title="Students"
              subtitle={"summary"}
              count="2"
              className="details_View_box"
              otherClass="details_View_box_other"
            />
          );
        })}
    </div>
  );
};

export default DetailsView;
