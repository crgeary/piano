import axios from "axios";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { ExtendedTrackDto, TrackDto } from "../types/api";

export class HttpError extends Error {
    constructor(public code: number, message?: string) {
        super(message);
    }
}

export const wrapper = (cb: NextApiHandler) => {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            return await cb(req, res);
        } catch (err) {
            if (err instanceof HttpError) {
                return res.status(err.code).json({
                    message: err.message,
                });
            }
            return res.status(500).json({
                error: {
                    message: err instanceof Error ? err.message : err,
                },
            });
        }
    };
};

export const getTracks = async () => {
    return (await axios.get<{ data: TrackDto[] }>("/api/tracks")).data;
};

export const getTrack = async (id: string) => {
    return (await axios.get<{ data: ExtendedTrackDto }>(`/api/tracks/${id}`)).data;
};
