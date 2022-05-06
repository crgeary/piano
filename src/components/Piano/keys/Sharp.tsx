import { ComponentPropsWithoutRef, FC } from "react";
import cn from "classnames";

export type SharpProps = ComponentPropsWithoutRef<"div"> & {
    isActive?: boolean;
};

const sharpWidth = 1.12111292962;

export const Sharp: FC<SharpProps> = ({ isActive, ...props }) => (
    <div
        style={{
            width: `${sharpWidth}%`,
            marginLeft: `${sharpWidth / -2}%`,
            marginRight: `${sharpWidth / -2}%`,
        }}
        className={cn("relative h-32", {
            "bg-black": !isActive,
            "bg-yellow-700": isActive,
        })}
        {...props}
    >
        {props.children}
    </div>
);
