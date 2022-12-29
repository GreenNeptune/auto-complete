import { FunctionComponent } from "react";
import { IEmployee } from "../../../models/employee";
import { AutoCompleteOptionItem } from "./auto-complete-option-item/AutoCompleteOptionItem";
import "./AutoCompleteOptions.scss";

interface IAutoCompleteOptions {
  options: IEmployee[];
  search: string;
  className?: string;
}

export const AutoCompleteOptions: FunctionComponent<IAutoCompleteOptions> = (
  props
) => {
  return (
    <div className="auto-complete-options-wrapper">
      <div className="auto-complete-options">
        {props.options.map((_option) => {
          return (
            <AutoCompleteOptionItem
              key={_option.id}
              id={_option.id}
              imageUrl={_option.imageUrl}
              workTitle={_option.workTitle}
              name={_option.name}
              search={props.search}
            />
          );
        })}
      </div>
    </div>
  );
};
