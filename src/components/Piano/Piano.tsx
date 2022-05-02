import { ComponentPropsWithoutRef, FC } from "react";
import cn from "classnames";
import { Natural } from "./keys/Natural";
import { Sharp } from "./keys/Sharp";

const naturalKeyCount = 52;
const notes = ["A", "B", "C", "D", "E", "F", "G"];
const sharps = ["A", "C", "D", "F", "G"];

export type PianoProps = ComponentPropsWithoutRef<"div"> & {
    // ...
};

export const Piano: FC<PianoProps> = ({ className, ...props }) => (
    <div
        data-name="keys"
        className={cn("flex w-full border-t-4 border-black", className)}
        {...props}
    >
        {Array.from({ length: naturalKeyCount }).map((_, i) => (
            <>
                <Natural>{notes[i % notes.length]}</Natural>
                {sharps.includes(notes[i % notes.length]) && i !== naturalKeyCount - 1 && <Sharp />}
            </>
        ))}
    </div>
);
