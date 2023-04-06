import React, { type ButtonHTMLAttributes, type ReactElement } from 'react'
import classNames from 'classnames'

const defaultProps = {
  variant: 'basic',
  size: 'medium',
  type: 'button',
  href: undefined
}

type Props = {
  variant?: 'primary' | 'secondary' | 'basic'
  size?: 'small' | 'medium' | 'large'
  type?: 'button' | 'submit' | 'reset'
  /** Optional: if set then renders a `<a>` tag styled as a button */
  href?: string | undefined
} & Omit<typeof defaultProps, 'href'> &
ButtonHTMLAttributes<HTMLButtonElement>

const Button = (props: Props): ReactElement => {
  const {
    variant,
    size,
    type,
    href,
    children,
    className,
    disabled,
    ...restProps
  } = props
  const buttonType = {
    primary: 'bg-blue-700 hover:bg-blue-500 text-white rounded',
    secondary: 'bg-gray-200 hover:bg-gray-300 rounded',
    basic: 'bg-white hover:text-gray-700 focus:text-gray-700'
  }
  const buttonSize = {
    small: 'py-1 px-2 text-xs',
    medium: 'py-2 px-4',
    large: 'py-3 px-6 text-lg'
  }
  const style: string = buttonSize[size] + ' ' + buttonType[variant]

  return (
    <>
      {(href !== '')
        ? (
          <a href={href} className={classNames(style, className)}>
            {children}
          </a>
          )
        : (
          <button
            type={type}
            className={classNames(style, className, {
              'cursor-not-allowed': disabled
            })}
            disabled={disabled}
            {...restProps}
          >
            {children}
          </button>
          )}
    </>
  )
}

Button.defaultProps = defaultProps

export default Button
