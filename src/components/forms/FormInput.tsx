import { useState } from "react";
import FormFeedback from "./FormFeedback";
import styled from "styled-components";
import classNames from "classnames";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

interface FormInputProps {
  name: string;
  type: string;
  placeholder?: string;
  label: string;
  onChange: any;
  onBlur: any;
  value: any;
  validation: any;
  options?: string[];
  disabled?: boolean;
  className?: string;
  min?: any;
  max?: any;
}

const FormInput = ({
  type,
  label,
  onChange,
  onBlur,
  value,
  placeholder,
  name,
  validation,
  options,
  disabled,
  className,
  min,
  max,
}: FormInputProps) => {
  if (type === "text") {
    return (
      <div className="mb-4 w-full">
        <label htmlFor={name} className="block text-sm font-medium text-white">
          {label}
        </label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          disabled={disabled}
          className={classNames(
            "block border-[1px] rounded-md px-4 py-3 text-xs mt-2 w-full outline-none border-[lightgray] text-gray-300 font-medium bg-[var(--input-bg)] cursor-pointer",
            className
          )}
        />
        {validation.touched[name] && validation.errors[name] ? (
          <FormFeedback type="invalid">{validation.errors[name]}</FormFeedback>
        ) : null}
      </div>
    );
  }
  if (type === "textarea") {
    return (
      <div className="mb-4 w-full">
        <label htmlFor={name} className="block text-sm font-medium text-white">
          {label}
        </label>
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          disabled={disabled}
          className={classNames(
            className,
            "block border-[1px] rounded-md px-4 py-3 text-xs mt-2 w-full outline-none border-[lightgray] text-gray-300 font-medium bg-[var(--input-bg)] resize-y min-h-32 cursor-pointer"
          )}
        />
        {validation.touched[name] && validation.errors[name] ? (
          <FormFeedback type="invalid">{validation.errors[name]}</FormFeedback>
        ) : null}
      </div>
    );
  }

  if (type === "select") {
    return (
      <div className="mb-4 w-full">
        <label htmlFor={name} className="block text-sm font-medium text-white">
          {label}
        </label>
        <div className="relative flex items-center w-full">
          <SelectInput
            name={name}
            value={value}
            onBlur={onBlur}
            onChange={onChange}
            disabled={disabled}
            className={classNames(
              "block border-[1px] rounded-md px-4 py-3 text-xs mt-2 w-full outline-none border-[lightgray] text-gray-800 font-medium bg-[var(--input-bg)] cursor-pointer relative",
              className
            )}
          >
            <option value={""}>{placeholder}</option>
            {options &&
              options.map((opt) => (
                <option value={opt} className="px-4 py-2">
                  {opt.toUpperCase()}
                </option>
              ))}
          </SelectInput>

          <i className="fi fi-sr-caret-down absolute right-2 top-5 z-100"></i>
        </div>
        {validation.touched[name] && validation.errors[name] ? (
          <FormFeedback type="invalid">{validation.errors[name]}</FormFeedback>
        ) : null}
      </div>
    );
  }

  if (type === "password")
    return (
      <PasswordInput
        {...{
          type,
          label,
          onChange,
          onBlur,
          value,
          placeholder,
          name,
          validation,
          disabled,
          className,
        }}
      />
    );

  if (type === "date") {
    return (
      <div className="mb-4 w-full">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-white mb-2"
        >
          {label}
        </label>
        {/* <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          disabled={disabled}
          className={classNames(
            "block border-[1px] rounded-md px-4 py-3 text-xs mt-2 w-full outline-none border-[lightgray] text-gray-500 font-medium bg-[var(--input-bg)] cursor-pointer",
            className
          )}
          min={min}
          max={max}
        /> */}
        <DatePicker
          value={dayjs(value)}
          onChange={(newValue) => validation.setFieldValue(name, newValue)}
          onClose={onBlur}
          name={name}
          disabled={disabled}
          minDate={dayjs(min)}
          maxDate={dayjs(max)}
        />
        {validation.touched[name] && validation.errors[name] ? (
          <FormFeedback type="invalid">{validation.errors[name]}</FormFeedback>
        ) : null}
      </div>
    );
  }

  return (
    <div className="mb-4 w-full">
      <label htmlFor={name} className="block text-sm font-medium text-white">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        disabled={disabled}
        className={classNames(
          "block border-[1px] rounded-md px-4 py-3 text-xs mt-2 w-full outline-none border-[lightgray] text-gray-500 font-medium bg-[var(--input-bg)] cursor-pointer",
          className
        )}
        min={min}
        max={max}
      />
      {validation.touched[name] && validation.errors[name] ? (
        <FormFeedback type="invalid">{validation.errors[name]}</FormFeedback>
      ) : null}
    </div>
  );
};

const PasswordInput = ({
  label,
  name,
  onBlur,
  onChange,
  value,
  type,
  placeholder,
  validation,
  disabled,
  className,
}: FormInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="mb-4 w-full">
      <label htmlFor={name} className="block text-sm font-medium text-white">
        {label}
      </label>
      <div className="relative flex items-center w-full">
        <input
          type={showPassword ? "text" : "password"}
          name={name}
          placeholder={placeholder}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          disabled={disabled}
          className={classNames(
            "block border-[1px] rounded-md px-4 py-3 text-xs mt-2 w-full outline-none border-[lightgray] text-gray-500 font-medium bg-[var(--input-bg)] cursor-pointer",
            className
          )}
        />
        <button
          onClick={() => setShowPassword(!showPassword)}
          type="button"
          className="absolute right-2 top-5"
        >
          {showPassword ? (
            <i className="fi fi-sr-eye flex text-white"></i>
          ) : (
            <i className="fi fi-sr-eye-crossed flex text-white"></i>
          )}
        </button>
      </div>
      {validation.touched[name] && validation.errors[name] ? (
        <FormFeedback type="invalid">{validation.errors[name]}</FormFeedback>
      ) : null}
    </div>
  );
};

const SelectInput = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

export default FormInput;
