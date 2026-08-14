import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Format an ISO datetime (or Date) to a `datetime-local` input value in local time
export function toLocalDatetimeInput(value?: string | Date | null) {
  if (!value) return ""
  const d = typeof value === "string" ? new Date(value) : value
  const YYYY = d.getFullYear()
  const MM = String(d.getMonth() + 1).padStart(2, "0")
  const DD = String(d.getDate()).padStart(2, "0")
  const hh = String(d.getHours()).padStart(2, "0")
  const mm = String(d.getMinutes()).padStart(2, "0")
  return `${YYYY}-${MM}-${DD}T${hh}:${mm}`
}

// Parse a `datetime-local` input value (local time) to an ISO string in UTC
export function localInputToISOString(value: string) {
  // value expected format: YYYY-MM-DDTHH:mm
  const [datePart, timePart] = value.split("T")
  if (!datePart || !timePart) return new Date(value).toISOString()
  const [year, month, day] = datePart.split("-").map(Number)
  const [hour, minute] = timePart.split(":").map(Number)
  const d = new Date(year, month - 1, day, hour, minute)
  return d.toISOString()
}
