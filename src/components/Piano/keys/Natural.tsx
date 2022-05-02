import { ComponentPropsWithoutRef, FC } from "react";

export type NaturalProps = ComponentPropsWithoutRef<"div"> & {
    // ...
};

const naturalWidth = 100 / 52;

export const Natural: FC<NaturalProps> = (props) => (
    <div
        style={{ width: `${naturalWidth}%` }}
        className="flex items-end justify-center h-56 text-gray-300 bg-white border-r border-gray-200 last:border-r-0"
    >
        <span className="mb-1">{props.children}</span>
    </div>
);
