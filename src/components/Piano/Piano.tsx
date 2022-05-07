import { ComponentPropsWithoutRef, FC } from "react";
import { Keyboard } from "./Keyboard";

export type PianoProps = ComponentPropsWithoutRef<"div"> & {
    activeNotes?: string[];
};

export const Piano: FC<PianoProps> = ({ className, activeNotes, ...props }) => {
    return (
        <div className="w-full border-t-4 border-black">
            <Keyboard activeNotes={activeNotes} />
        </div>
    );
};
