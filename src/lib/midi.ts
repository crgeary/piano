import { Midi } from "@tonejs/midi";
import { decode } from "base64-arraybuffer";

export const midiBase64ToTonejs = (encodedString: string) => {
  try {
    const midiArrayBuffer = decode(encodedString);
    return new Midi(midiArrayBuffer);
  } catch (err) {
    return null;
  }
};
