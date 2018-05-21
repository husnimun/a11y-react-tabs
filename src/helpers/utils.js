// Determine if a tab node is disabled
export function isTabDisabled(node) {
  return node ? node.getAttribute('aria-disabled') === 'true' : false
}
