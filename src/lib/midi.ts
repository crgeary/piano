import axios from "axios";
import { parseMidi, MidiData } from "midi-file";

export const loadAndParseMidi = async (url: string): Promise<MidiData> => {
    const response = await axios.get(url, {
        responseType: "arraybuffer",
    });

    return parseMidi(response.data);
};
