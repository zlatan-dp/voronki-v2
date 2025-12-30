import BlockWrap from "../../../components/blockWrap/blockWrap";
import SectionTitle from "../../../components/sectionTitle/sectionTitle";

import TextResults from "./TextResults/TextResults";

export default function EnergySnapshot() {
  return (
    <BlockWrap>
      <SectionTitle ta={"center"}>Your Energy Snapshot</SectionTitle>
      <TextResults />
    </BlockWrap>
  );
}
