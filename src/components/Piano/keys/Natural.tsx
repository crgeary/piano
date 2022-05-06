import { ComponentPropsWithoutRef, FC } from "react";
import cn from "classnames";

export type NaturalProps = ComponentPropsWithoutRef<"div"> & {
    isActive?: boolean;
};

const naturalWidth = 100 / 52;

export const Natural: FC<NaturalProps> = ({ isActive, ...props }) => (
    <div
        style={{ width: `${naturalWidth}%` }}
        className={cn(
            "flex items-end justify-center h-56 border-r border-gray-200 last:border-r-0",
            {
                "bg-white text-gray-300": !isActive,
                "bg-yellow-100 text-yellow-400": isActive,
            },
        )}
        {...props}
    >
        <span className="mb-1">{props.children}</span>
    </div>
);
