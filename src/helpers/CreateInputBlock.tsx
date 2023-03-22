import React from 'react';
import { forwardRef, LegacyRef } from 'react';

type inputType = 'text' | 'date' | 'textarea' | 'checkbox' | 'radio' | 'file' | 'select';

type InputBlockProps = {
  id: string;
  labelTitle: string;
  typeInput: inputType;
  textErrorInput?: string | null;
  name?: string;
  required?: boolean;
  value?: string | null;
  accept?: string;
  optionForSelect?: string[];
  defaultChecked?: boolean;
  defaultValue?: string;
};

const CreateInputBlock = forwardRef(
  (props: InputBlockProps, ref: LegacyRef<HTMLInputElement | HTMLSelectElement> | undefined) => {
    if (props.typeInput === 'select') {
      return (
        <label>
          {props.labelTitle} :
          <select
            required={props.required || false}
            id={props.id}
            name={props.name || props.labelTitle.toLowerCase()}
            ref={ref as LegacyRef<HTMLSelectElement> | undefined}
            value={props.value || undefined}
          >
            {props.optionForSelect?.map((nameOption, index) => {
              return <option key={index}>{nameOption}</option>;
            })}
          </select>
          <div className="text-error">{props.textErrorInput}</div>
        </label>
      );
    } else {
      return (
        <label>
          {props.labelTitle}
          <input
            required={props.required || false}
            id={props.id}
            type={props.typeInput}
            name={props.name || props.labelTitle.toLowerCase()}
            ref={ref as LegacyRef<HTMLInputElement> | undefined}
            value={props.value || undefined}
            accept={props.accept || undefined}
            defaultChecked={props.defaultChecked || false}
            defaultValue={props.defaultValue}
          />
          <div className="text-error">{props.textErrorInput}</div>
        </label>
      );
    }
  }
);
export default CreateInputBlock;
