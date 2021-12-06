import { FC } from "react";

import './RxSelect.scss';

interface RxSelectProps {
  children?: React.ReactNode;
  onChange?: (e: any) => void;
  value?: string;
  defaultValue: string;
  options: Option[]
}

export type Option = {
  name: string;
  value: string;
}

const RxSelect: FC<RxSelectProps> = ({ defaultValue, options, value, onChange }: any): JSX.Element => {
  return (
    <select
      className="rx-select"
      value={value}
      onChange={ event => onChange(event.target.value)}
    >
      <option disabled value="">{defaultValue}</option>
      {
        options.map((option: Option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          )
        })
      }
    </select>
  );
}

export default RxSelect;