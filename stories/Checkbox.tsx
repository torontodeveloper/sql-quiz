import React, { useEffect, useState } from "react";

import "./button.css";

export interface CheckboxProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: "small" | "medium" | "large";
  /** Button contents */
  label: string;
  /** Optional click handler */
  onChange?: () => void;
  checked: boolean;
}

/** Primary UI component for user interaction */
export const Checkbox = ({
  primary = false,
  size = "medium",
  label,
  checked = false,
  ...props
}: CheckboxProps) => {
  const [localcheck, setLocalchecked] = useState(checked);
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  useEffect(() => {
    setLocalchecked(false);
    return () => {
      setLocalchecked(false);
    };
  }, [localcheck]);
  return (
    <>
      <input
        type="checkbox"
        id="scales"
        name="scales"
        checked={localcheck}
        className={["storybook-button", `storybook-button--${size}`, mode].join(
          " "
        )}
        {...props}
      />
      <label htmlFor="scales">{label}</label>
    </>
  );
};
