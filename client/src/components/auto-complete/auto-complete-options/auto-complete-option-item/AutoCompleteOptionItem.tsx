import { FunctionComponent } from "react";
import { IEmployee } from "../../../../models/employee";
import { TextWithSearchHighlight } from "../../../text-with-search-highlight/TextWithSearchHighlight";
import "./AutoCompleteOptionItem.scss";

interface IAutoCompleteOptionItem extends IEmployee {
  search: string;
}

export const AutoCompleteOptionItem: FunctionComponent<
  IAutoCompleteOptionItem
> = (props) => {
  return (
    <li key={props.id} className="auto-complete__options_item">
      <div className="col">
        <img src={props.imageUrl} alt="" />
      </div>
      <div className="col">
        <div className="auto-complete__options_item-title">
          <TextWithSearchHighlight text={props.name} search={props.search} />
        </div>
        <TextWithSearchHighlight text={props.workTitle} search={props.search} />
      </div>
    </li>
  );
};
