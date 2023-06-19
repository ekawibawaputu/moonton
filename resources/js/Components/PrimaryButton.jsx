import PropsTypes from "prop-types";

PrimaryButton.propTypes = {
    type: PropsTypes.oneOf(["button", "submit", "reset"]),
    className: PropsTypes.string,
    variant: PropsTypes.oneOf([
        "primary",
        "warning",
        "danger",
        "light-outline",
        "white-outline",
    ]),
    disabled: PropsTypes.bool,
    children: PropsTypes.node,
};

export default function PrimaryButton({
    className = "",
    disabled,
    children,
    variant = "primary",
    ...props
}) {
    return (
        <button
            {...props}
            className={`rounded-2xl py-[13px] text-center w-full ${
                disabled && "opacity-30"
            } btn-${variant} ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
