import React, { useRef, useState } from "react";
import cx from "classnames";
import VisuallyHidden from "@reach/visually-hidden";
import {
  FormInput,
  FormInputGroup,
  FormInputLabel
} from "$components/FormInput";

export default function SearchField({ className }) {
  let [value, setValue] = useState("");
  let inputRef = useRef(null);
  return (
    <div className={cx(className, "SearchField")}>
      <div role="search" className="SearchField__inner">
        <div className="SearchField__SearchIcon-wrapper">
          <SearchIcon className="SearchField__icon SearchField__SearchIcon" />
        </div>
        <FormInputGroup>
          <VisuallyHidden>
            <FormInputLabel>Search the site</FormInputLabel>
          </VisuallyHidden>
          <FormInput
            ref={inputRef}
            className="SearchField__FormInput"
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect="off"
            autoFocus
            placeholder="Search the site"
            required
            spellCheck
            value={value}
            onChange={event => setValue(event.target.value)}
          />
        </FormInputGroup>
        <button
          className="SearchField__CloseIcon-button"
          onClick={() => {
            setValue("");
            inputRef.current && inputRef.current.focus();
          }}
        >
          <CloseIcon className="SearchField__icon SearchField__CloseIcon" />
          <VisuallyHidden>Clear Search</VisuallyHidden>
        </button>
      </div>
    </div>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M19.71,18.29,16,14.61A9,9,0,1,0,14.61,16l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,19.71,18.29ZM2,9a7,7,0,1,1,12,4.93h0s0,0,0,0A7,7,0,0,1,2,9Z" />
    </svg>
  );
}

function CloseIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M8.41,7l5.3-5.29A1,1,0,1,0,12.29.29L7,5.59,1.71.29A1,1,0,0,0,.29,1.71L5.59,7,.29,12.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L7,8.41l5.29,5.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" />
    </svg>
  );
}
