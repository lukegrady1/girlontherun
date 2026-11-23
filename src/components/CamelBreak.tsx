import { Fragment } from "react";

/*
  Tam's category names are camelCase ("PermanentStraightening"). On a phone
  the poster type can't fit them on one line, so offer a line-break point
  before each inner capital (and after hyphens) instead of letting the
  browser split mid-word.
*/
export function CamelBreak({ text }: { text: string }) {
  const parts = text.split(/(?<=[a-z])(?=[A-Z])|(?<=-)/);
  return (
    <>
      {parts.map((p, i) => (
        <Fragment key={i}>
          {i > 0 && <wbr />}
          {p}
        </Fragment>
      ))}
    </>
  );
}
