import { NextApiHandler } from "next";

import { wrapper } from "../../../lib/api";
import { getTimelineData } from "../../../lib/github";

const handler: NextApiHandler = async (req, res) => {
  const { id } = req.query;
  const data = await getTimelineData();

  const track = data.tracks.find(
    (t) => t.url === Buffer.from(`${id}`, "base64").toString()
  );

  if (!track) {
    throw Error("Not Found");
  }

  res.json({
    data: {
      id: `${id}`,
      ...track,
    },
  });
};

export default wrapper(handler);
