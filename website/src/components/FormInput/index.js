import React, { createContext, forwardRef, useContext } from "react";
import { useId } from "@reach/auto-id";
import cx from "classnames";
import "./styles.scss";

const FormInputLabelContext = createContext({
  id: null,
  name: null,
  value: null
});

export const FormInput = forwardRef(function FormInput(
  { className, type = "text", ...props },
  ref
) {
  const { id, name, value } = useContext(FormInputLabelContext);
  return (
    <input
      {...props}
      ref={ref}
      className={cx(className, "FormInput")}
      type={type}
      id={id ?? props.id}
      name={name ?? props.name}
      value={value ?? props.value}
    />
  );
});

export const FormInputLabel = forwardRef(function FormInput(
  { className, type = "text", ...props },
  ref
) {
  const { id } = useContext(FormInputLabelContext);
  return (
    <label
      {...props}
      ref={ref}
      className={cx(className, "FormInputLabel")}
      type={type}
      htmlFor={id ?? props.htmlFor}
    />
  );
});

export function FormInputGroup({ children, id: idProp, name, value }) {
  const genId = useId(idProp);
  const id = idProp || `form-input--${genId}`;
  return (
    <FormInputLabelContext.Provider value={{ id, name, value }}>
      {children}
    </FormInputLabelContext.Provider>
  );
}

FormInput.displayName = "FormInput";
FormInputLabel.displayName = "FormInputLabel";
FormInputGroup.displayName = "FormInputGroup";

export default FormInput;
