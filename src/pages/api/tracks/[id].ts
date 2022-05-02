import { NextApiHandler } from "next";
import { Midi } from "@tonejs/midi";
import { HttpError, wrapper } from "../../../lib/api";
import { getTimelineData, getTrack } from "../../../lib/github";

const handler: NextApiHandler = async (req, res) => {
    const { id } = req.query;
    const data = await getTimelineData();

    const track = data.tracks.find((t) => t.url === Buffer.from(`${id}`, "base64").toString());

    if (!track) {
        throw new HttpError(404, "Track not found");
    }

    const file = await getTrack(track.url);

    if (!file) {
        throw new HttpError(404, "Track not found");
    }

    const midi = await Midi.fromUrl(file.url);

    res.json({
        data: {
            id: `${id}`,
            ...track,
            url: file.url,
            ...(midi ? { tonejs: midi.toJSON() } : {}),
        },
    });
};

export default wrapper(handler);
