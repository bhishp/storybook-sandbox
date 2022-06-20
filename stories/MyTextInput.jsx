import React from 'react';
import { useField } from 'formik';

const style = {
  label: {
    display: 'block',
    fontWeight: 'bold'
  },
  field: {
    display: 'block'
  },
  error: {
    display: 'block',
    color: '#ff4d4d'
  }
};

export const MyTextInput = (props) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <label style={style.label} htmlFor={props.id || props.name}>
        {props.label}
      </label>
      <input style={style.field} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div style={style.error}>{meta.error}</div>
      ) : null}
    </>
  );
};
