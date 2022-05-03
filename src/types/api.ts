import { MidiData } from "midi-file";

export type TrackDto = {
    id: string;
    date: string;
    url: string;
};

export type ExtendedTrackDto = TrackDto & {
    midi?: MidiData;
};
