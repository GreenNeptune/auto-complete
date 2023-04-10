import { forwardRef } from "react";
import { debounce } from "../../../utils/debounce";
import "./SearchBar.scss";

const delayTime = 400; // time in milliseconds 
export interface IProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  onFocus: () => void;
  onBlur: () => void;
  onChange:(inputValue:string) => void
}

export const SearchBar = forwardRef((props: IProps, ref: React.Ref<HTMLInputElement> | null) => (
  <div className="auto-complete__search-box">
    <input
      ref={ref}
      onBlur={props.onBlur}
      onChange={debounce((e) => props.onChange(e.target.value), delayTime)}
      onFocus={props.onFocus}
      type="text"
      placeholder="search..."
    />
  </div>
));
