import styled from "styled-components";

interface FormGroupProps {
  type: "textarea" | "text";
  name: string;
  placeholder?: string;
  label?: string;
  onChange: (e: any) => void;
  value: string | number | undefined;
  shouldResize?: "vertical" | "horizontal";
  labelStyle?: object;
  inputStyle?: object;
  maxLength?: number;
  disabled?: boolean;
}

export const FormGroupComponent = ({
  type,
  name,
  placeholder,
  label,
  onChange,
  value,
  shouldResize,
  labelStyle,
  inputStyle,
  maxLength,
  disabled,
  ...rest
}: FormGroupProps) => {
  if (type === "textarea") {
    return (
      <FormGroup {...rest}>
        {label && <Label className="text-white">{label}</Label>}
        <TextArea
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          value={value}
          style={{ resize: shouldResize || "none", ...inputStyle }}
        />
      </FormGroup>
    );
  }

  return (
    <FormGroup {...rest}>
      {label && <Label className="text-white">{label}</Label>}
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        maxLength={maxLength}
        disabled={disabled ? disabled : false}
        className="font-medium"
      />
    </FormGroup>
  );
};

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 0.4rem;
`;

export const Label = styled.label`
  display: block;
  font-weight: 600;
  cursor: pointer;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  background: transparent;
  padding: 1rem 0rem 0.8rem;
  width: 100%;
  display: block;
  cursor: pointer;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.4);
  transition: 0.5s ease;
  color: white;

  &::placeholder {
    color: #f2f2f2;
    opacity: 1;
  }

  &::-ms-input-placeholder {
    color: #f2f2f2;
    opacity: 1;
  }

  &:focus {
    border-bottom-color: white;
  }
`;

const TextArea = styled.textarea`
  font-family: var(--mont);
  border: none;
  outline: none;
  background: #f1f1f1;
  padding: 1rem;
  width: 100%;
  display: block;
  resize: none;
  min-height: 250px;
  cursor: pointer;
  color: white;

  &::placeholder {
    color: #f2f2f2;
    opacity: 1;
  }

  &::-ms-input-placeholder {
    color: #f2f2f2;
    opacity: 1;
  }

  &::-webkit-input-placeholder {
    color: #f2f2f2;
    opacity: 1;
  }
`;
