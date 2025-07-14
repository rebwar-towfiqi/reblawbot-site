import * as React from 'react';

import { cn } from '@/lib/utils';

export type ButtonProps = {
  isLoading?: boolean;
  size?: 'base' | 'sm';
  children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  isLoading,
  size = 'base',
  children,
  className,
  disabled,
  ...rest
}: ButtonProps) {
  const sizeClasses =
    size === 'base'
      ? 'px-3 py-1.5 text-sm md:text-base'
      : size === 'sm'
      ? 'px-2 py-1 text-xs md:text-sm'
      : '';

  return (
    <button
      type='button'
      className={cn(
        'inline-flex items-center justify-center rounded',
        'focus-visible:ring-primary-500 focus:outline-none focus-visible:ring',
        'disabled:cursor-not-allowed disabled:bg-gray-200',
        'transition-colors duration-75',
        sizeClasses,
        className
      )}
      disabled={isLoading || disabled}
      {...rest}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
}
