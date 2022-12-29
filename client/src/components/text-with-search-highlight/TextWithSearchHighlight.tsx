import { nanoid } from "nanoid";
import { FunctionComponent, ReactElement } from "react";
import { getIndicesOf } from "../../utils/search";

export interface IProps {}

export interface ITextWithSearchHighlight {
  text: string;
  search: string;
}
export interface ISpan {
  title: string;
}

export const Span: FunctionComponent<ISpan> = (props) => {
  return <span>{props.title}</span>;
};

const BoldText: FunctionComponent<ISpan> = (props) => {
  return <b>{props.title}</b>;
};

export const TextWithSearchHighlight: FunctionComponent<
  ITextWithSearchHighlight
> = (props) => {
  const trimmedText = props.text.trim();
  const matchSearchedWordsIndList = getIndicesOf(props.search, trimmedText);

  const result: ReactElement[] = [];
  let start = 0;

  if (matchSearchedWordsIndList.length === 0) {
    return <span>{props.text}</span>;
  }
  matchSearchedWordsIndList.forEach((ind) => {
    if (ind - props.search.length === start) {
      result.push(
        <BoldText key={nanoid()} title={trimmedText.substring(start, ind)} />
      );
    }
    if (ind - props.search.length > start) {
      result.push(
        <Span
          key={nanoid()}
          title={trimmedText.substring(start, ind - props.search.length)}
        />
      );
      result.push(
        <BoldText
          key={nanoid()}
          title={trimmedText.substring(ind - props.search.length, ind)}
        />
      );
    }
    start = ind;
  });
  if (start < trimmedText.length) {
    result.push(
      <Span
        key={nanoid()}
        title={trimmedText.substring(start, trimmedText.length)}
      />
    );
  }

  return <span>{result}</span>;
};
