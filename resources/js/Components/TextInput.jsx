import { forwardRef, useEffect, useRef } from "react";
import PropTypes from "prop-types";

forwardRef.propTypes = {
    type: PropTypes.oneOf(["text", "email", "password", "number", "file"]),
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    variant: PropTypes.oneOf(["primary", "error", "primary-outline"]),
    autoComplete: PropTypes.string,
    required: PropTypes.boolean,
    isFocused: PropTypes.boolean,
    handleChange: PropTypes.func,
    placeholder: PropTypes.string,
    isError: PropTypes.boolean,
};

export default forwardRef(function TextInput(
    {
        type = "text",
        className = "",
        isFocused = false,
        variant = "primary",
        ...props
    },
    ref,
    defaultValue,
    isError
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                {...props}
                defaultValue={defaultValue}
                type={type}
                className={`rounded-2xl bg-form-bg py-[13px] px-7 w-full input-${variant} ${
                    isError && "input-error"
                } ${className}`}
                ref={input}
            />
        </div>
    );
});
