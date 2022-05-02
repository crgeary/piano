import { NextApiHandler } from "next";
import { HttpError, wrapper } from "../../../lib/api";
import { getTimelineData, getTrack } from "../../../lib/github";
import { midiBase64ToTonejs } from "../../../lib/midi";

const handler: NextApiHandler = async (req, res) => {
  const { id } = req.query;
  const data = await getTimelineData();

  const track = data.tracks.find(
    (t) => t.url === Buffer.from(`${id}`, "base64").toString()
  );

  if (!track) {
    throw new HttpError(404, "Track not found");
  }

  const file = await getTrack(track.url);

  if (!file) {
    throw new HttpError(404, "Track not found");
  }

  const midi = midiBase64ToTonejs(file.content);

  res.json({
    data: {
      id: `${id}`,
      ...track,
      size: file.size,
      content: file.content,
      ...(midi ? midi.toJSON() : {}),
    },
  });
};

export default wrapper(handler);
