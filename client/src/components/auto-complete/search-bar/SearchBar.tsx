import { forwardRef } from "react";
import "./SearchBar.scss";

export interface IProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  onFocus: () => void;
  onBlur:() => void
}

export const SearchBar = forwardRef((props: IProps, ref:React.Ref<HTMLInputElement> | null) => (
  <div className="auto-complete__search-box">
    <input
      ref={ref}
      onBlur={props.onBlur}
      onChange={(e) => props.setSearch(e.target.value)}
      onFocus={props.onFocus}
      type="text"
      placeholder="search..."
    />
  </div>
));
