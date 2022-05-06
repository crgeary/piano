import { ComponentPropsWithoutRef, FC } from "react";
import { Keybaord } from "./Keyboard";

export type PianoProps = ComponentPropsWithoutRef<"div"> & {
    activeNotes: string[];
};

export const Piano: FC<PianoProps> = ({ className, ...props }) => {
    return (
        <div className="border-t-4 border-black">
            <Keybaord activeNotes={props.activeNotes} />
        </div>
    );
};
