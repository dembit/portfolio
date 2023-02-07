import React from "react";
import { useContextPages } from "../AnimationPages/ContextPages";
import Arrow from "../Arrow/Arrow";
type Props = {};

const SwitchPages = (props: Props) => {
  const { dataNavigation, setDirection } = useContextPages();
  if (!dataNavigation) {
    return <></>;
  }
  return (
    <>
      <Arrow
        callback={() => setDirection(-1)}
        type="left"
        {...dataNavigation.prev}
      />
      <Arrow
        callback={() => setDirection(1)}
        type="right"
        {...dataNavigation.next}
      />
    </>
  );
};

export default SwitchPages;
