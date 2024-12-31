import { FC } from 'react';
import './select.css';

export type OptionProps = {
  /** value */
  value: string;
  /** label */
  label: string;
};

export type SelectProps = {
  /** className */
  className?: string;
  /** options */
  options?: OptionProps[];
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export const Select: FC<SelectProps> = (props) => {
  const { options, ...rest } = props;
  return (
    <select className="select" {...rest}>
      {options?.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
