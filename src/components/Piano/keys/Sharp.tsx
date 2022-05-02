import { ComponentPropsWithoutRef, FC } from "react";

export type SharpProps = ComponentPropsWithoutRef<"div"> & {
    // ...
};

const sharpWidth = 1.12111292962;

export const Sharp: FC<SharpProps> = (props) => (
    <div
        style={{
            width: `${sharpWidth}%`,
            marginLeft: `${sharpWidth / -2}%`,
            marginRight: `${sharpWidth / -2}%`,
        }}
        className="relative h-32 bg-black"
    ></div>
);
