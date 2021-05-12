import React, { useState } from 'react'
import styles from './library.module.scss';

const combineStrings = (...args) => args.filter(arg => !!arg).join(" ")

export const SolidButton = ({ className, children, onClick }) => (
  <div
    className={combineStrings(styles.solidButton, props.className)}
    onClick={onClick}
  >
    {children}
  </div>
)

export const StyledInput = ({
  value,
  name,
  placeholder,
  onChange,
  error,
  className,
  label,
  children
}) => (
  <div className={combineStrings(styles.solidInput, className)}>
    {label && 
      <label>{label}</label>
    }
    <input
      className={combineStrings(styles.input, error && styles.error)}
      type="message"
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
    {error &&
      <div className={styles.errorText}>{error}</div>
    }
    {children}
  </div>
)

export const StyledTextarea = ({
  value,
  name,
  placeholder,
  onChange,
  error,
  className,
  label,
  children
}) => (
  <div className={combineStrings(styles.solidInput, className)}>
    {label && 
      <label>{label}</label>
    }
    <textarea
      className={combineStrings(styles.input, error && styles.error)}
      type="message"
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
    {error &&
      <div className={styles.errorText}>{error}</div>
    }
    {children}
  </div>
)

export const SolidInput = ({
  label,
  type,
  value,
  name,
  placeholder,
  onChange,
  error,
  className,
  children
}) => {
  return (
    <div className={combineStrings(styles.solidInput, className)}>
      <label>{label}</label>
      <input
        className={combineStrings(styles.input, error && styles.error)}
        type={type || "text"}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error &&
        <div className={styles.errorText}>{error}</div>
      }
      {children}
    </div>
  )
}
