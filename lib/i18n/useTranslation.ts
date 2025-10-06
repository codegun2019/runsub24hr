import { TEXT, getText } from "@/lib/config"
import { th, t as tFallback } from "./th"

export function useTranslation() {
  const translate = (key: string): string => {
    const valueFromConfig = getText(key)
    if (valueFromConfig !== key) return valueFromConfig
    return tFallback(key)
  }

  return {
    t: translate,
    locale: "th",
    dictionary: TEXT,
  }
}

