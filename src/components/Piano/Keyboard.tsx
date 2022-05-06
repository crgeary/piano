import { ComponentPropsWithoutRef, FC } from "react";
import cn from "classnames";
import { Natural } from "./keys/Natural";
import { Sharp } from "./keys/Sharp";

const naturalKeyCount = 52;
const notes = ["A", "B", "C", "D", "E", "F", "G"];
const sharps = ["A", "C", "D", "F", "G"];

export type KeybaordProps = ComponentPropsWithoutRef<"div"> & {
    activeNotes: string[];
};

export const Keybaord: FC<KeybaordProps> = ({ className, ...props }) => {
    let octave = 0;
    return (
        <div className={cn("flex w-full", className)} {...props}>
            {Array.from({ length: naturalKeyCount }).map((_, i) => {
                const note = notes[i % notes.length];
                if (note === "C") {
                    octave += 1;
                }
                return (
                    <>
                        <Natural isActive={props.activeNotes.includes(`${note}${octave}`)}>
                            {note}
                        </Natural>
                        {sharps.includes(note) && i !== naturalKeyCount - 1 && (
                            <Sharp
                                isActive={props.activeNotes.includes(
                                    `${notes[(i + 1) % notes.length]}b${octave}`,
                                )}
                            />
                        )}
                    </>
                );
            })}
        </div>
    );
};
