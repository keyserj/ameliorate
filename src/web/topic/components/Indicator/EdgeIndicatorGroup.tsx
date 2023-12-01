import { Box } from "@mui/material";

import { Edge } from "../../utils/graph";
import { Score } from "../Score/Score";
import { DetailsIndicator } from "./DetailsIndicator";

export const EdgeIndicatorGroup = ({ edge }: { edge: Edge }) => {
  return (
    <Box display="flex">
      <DetailsIndicator graphPart={edge} />
      <Score graphPartId={edge.id} />
    </Box>
  );
};
