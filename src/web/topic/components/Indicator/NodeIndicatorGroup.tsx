import { Box } from "@mui/material";

import { Node, ProblemNode } from "../../utils/graph";
import { CriteriaTableIndicator } from "../Indicator/CriteriaTableIndicator";
import { Score } from "../Score/Score";
import { DetailsIndicator } from "./DetailsIndicator";

const isProblem = (node: Node): node is ProblemNode => node.type === "problem";

export const NodeIndicatorGroup = ({ node }: { node: Node }) => {
  return (
    <Box display="flex" margin="2px">
      {isProblem(node) && <CriteriaTableIndicator node={node} />}
      <DetailsIndicator graphPart={node} />
      <Score graphPartId={node.id} />
    </Box>
  );
};
