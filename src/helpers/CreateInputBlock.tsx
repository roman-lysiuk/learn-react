import React, { forwardRef, LegacyRef } from 'react';

type inputType = 'text' | 'date' | 'textarea' | 'checkbox' | 'radio';

type InputBlockProps = {
  labelTitle: string;
  typeInput: inputType;
  name?: string;
  textErrorInput: string | null;
  id: string;
  required?: boolean;
};

const CreateInputBlock = forwardRef(
  (props: InputBlockProps, ref: LegacyRef<HTMLInputElement> | undefined) => {
    return (
      <label>
        {props.labelTitle} :
        <input
          required={props.required || false}
          id={props.id}
          type={props.typeInput}
          name={props.name || props.labelTitle}
          ref={ref}
        />
        <div className="text-error">{props.textErrorInput}</div>
      </label>
    );
  }
);

export default CreateInputBlock;
