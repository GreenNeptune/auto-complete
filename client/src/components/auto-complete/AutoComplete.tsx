import { FunctionComponent, useRef, useState } from "react";
import { IEmployee } from "../../models/employee";
import { AutoCompleteOptions } from "./auto-complete-options/AutoCompleteOptions";
import { SearchBar } from "./search-bar/SearchBar";
import { ReactComponent as SearchIcon } from "../../assets/search_icon.svg";
import { apiService } from "../../api/axios";
import "./AutoComplete.scss";

export const AutoComplete: FunctionComponent = () => {
  const [searchQ, setSearchQ] = useState<string>("");
  const [optionSearch, setOptionSearch] = useState("");
  const [options, setOptions] = useState<IEmployee[]>([]);
  const [isOptionsVisible, setIsOptionsVisible] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnFocus = () => {
    setIsOptionsVisible(true);
  };
  const handleOnBlur = () => {
    setIsOptionsVisible(false);
  };

  const getOptionsBySearchQuery = async (q: string) => {
    try {
      let resp = await apiService.get("/employees", { params: { q } });
      setOptionSearch(q);
      setOptions(resp.data);
      setIsOptionsVisible(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="auto-complete">
      <div className="row">
        <div className="col">
          <SearchBar
            ref={inputRef}
            setSearch={setSearchQ}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
          />
          {isOptionsVisible && options.length > 0 && (
            <AutoCompleteOptions options={options} search={optionSearch} />
          )}
        </div>
          <button
            onClick={() => {
              getOptionsBySearchQuery(searchQ);
            }}
          >
            <SearchIcon />
          </button>
      </div>
    </div>
  );
};
