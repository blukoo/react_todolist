//react
import { forwardRef, ChangeEventHandler, RefObject } from "react";
export type PropsType = {
  value: string | boolean | number;
  id?: string;
  onChange?: ChangeEventHandler;
  style?: any;
  placeholder?: string;
  label?: string;
  className?: string;
  name?: string;
  checked?: boolean;
  multi?: boolean;
};

const CheckBox = forwardRef(
  (props: PropsType, ref: RefObject<HTMLInputElement>) => {
    //props
    const {
      value = "",
      id = "",
      onChange,
      style,
      placeholder,
      label,
      className,
      name,
      checked,
      multi
    } = props;
    return (
      <span className="input_wrap">
        <input
          id={id}
          // @ts-ignore
          value={value}
          onChange={onChange}
          style={style}
          type={multi ? "checkbox" : "radio"}
          placeholder={placeholder}
          ref={ref}
          className={className}
          name={name || id}
          checked={checked}
        />
      </span>
    );
  }
);
CheckBox.displayName = "CheckBox";
export default CheckBox;