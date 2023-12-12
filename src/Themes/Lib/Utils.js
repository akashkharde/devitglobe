"use client";
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

 function findInputError(errors, name) {
  const filtered = Object.keys(errors)
      .filter(key => key.includes(name))
      .reduce((cur, key) => {
          return Object.assign(cur, { error: errors[key] })
      }, {})
  return filtered
}

 const isFormInvalid = err => {
  if (Object.keys(err).length > 0) return true
  return false
}

export {cn, clamp, isFormInvalid , findInputError}