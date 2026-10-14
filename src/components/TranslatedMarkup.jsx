import { Children, cloneElement, isValidElement } from 'react'
import { useTranslation } from 'react-i18next'

function translateText(text, t) {
  const normalized = text.replace(/\s+/g, ' ').trim()
  if (!normalized) return text

  // Case-study copy uses the English source phrase as its i18next key.
  const start = text.length - text.trimStart().length
  const end = text.length - text.trimEnd().length
  return `${text.slice(0, start)}${t(normalized, { defaultValue: normalized })}${text.slice(text.length - end)}`
}

function translateNode(node, t) {
  if (typeof node === 'string') return translateText(node, t)
  if (Array.isArray(node)) return Children.map(node, (child) => translateNode(child, t))
  if (!isValidElement(node)) return node

  const props = {}
  for (const attribute of ['alt', 'aria-label', 'title']) {
    if (typeof node.props[attribute] === 'string') {
      props[attribute] = translateText(node.props[attribute], t)
    }
  }

  return cloneElement(node, props, translateNode(node.props.children, t))
}

export default function TranslatedMarkup({ children }) {
  const { t } = useTranslation()
  return translateNode(children, t)
}
