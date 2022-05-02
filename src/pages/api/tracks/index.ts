import { NextApiHandler } from "next";
import { wrapper } from "../../../lib/api";
import { getTimelineData } from "../../../lib/github";

const handler: NextApiHandler = async (_, res) => {
  const data = await getTimelineData();
  res.json({
    data: data.tracks
      .sort((a, b) => a.date.getTime() - b.date.getTime())
      .map((track) => {
        return {
          id: Buffer.from(track.url, "utf-8").toString("base64"),
          ...track,
        };
      }),
  });
};

export default wrapper(handler);
