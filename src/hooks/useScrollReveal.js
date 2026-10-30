import { useEffect } from 'react'

// Observe each element once, including products added after a collection opens.
export default function useScrollReveal(rootRef) {
  useEffect(() => {
    const root = rootRef.current
    if (!root || !('IntersectionObserver' in window)) return

    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const selector = [
      '.about-photo-main', '.about-photo-detail', '.about-photos figcaption',
      '.about-heading', '.intro-text > p', '.brand-value', '.shop-heading',
      '.category-card', '.products-heading', '.product-card', '.empty-collection',
      '.footer-invitation', '.footer-brand', '.footer-links', '.footer-contact',
      '.footer-bottom',
    ].join(',')
    const seen = new Set()
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return
        target.classList.remove('reveal-pending')
        target.classList.add('reveal-enter')
        observer.unobserve(target)
      })
    }, { threshold: 0.08 })

    function scan() {
      root.querySelectorAll(selector).forEach((element) => {
        if (seen.has(element)) return
        seen.add(element)
        if (preference.matches) return
        element.classList.add('reveal-pending')
        observer.observe(element)
      })
      // Release references to products removed when switching collections.
      seen.forEach((element) => {
        if (!root.contains(element)) {
          observer.unobserve(element)
          seen.delete(element)
        }
      })
    }

    function showFocused(event) {
      const element = event.target.closest('.reveal-pending, .reveal-enter')
      if (!element) return
      element.classList.remove('reveal-pending', 'reveal-enter')
      observer.unobserve(element)
    }

    function respectPreference() {
      if (!preference.matches) return
      observer.disconnect()
      seen.forEach((element) => element.classList.remove('reveal-pending', 'reveal-enter'))
    }

    scan()
    const changes = new MutationObserver(scan)
    changes.observe(root, { childList: true, subtree: true })
    root.addEventListener('focusin', showFocused)
    preference.addEventListener('change', respectPreference)
    return () => {
      observer.disconnect()
      changes.disconnect()
      root.removeEventListener('focusin', showFocused)
      preference.removeEventListener('change', respectPreference)
      seen.forEach((element) => element.classList.remove('reveal-pending', 'reveal-enter'))
    }
  }, [rootRef])
}
