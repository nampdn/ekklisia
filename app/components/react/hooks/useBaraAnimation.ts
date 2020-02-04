import { useRef, useEffect } from 'react'
import { useBaraContext } from '../context'

/**
 * Hook to use animated Value reference bind across component in Bara Application.
 * @param key which animation key
 * @param defaultValue default value if not yet bind
 * @param refKey which reference key to select from the animation key
 */
export const useBaraAnimation = (
  key: string,
  defaultValue: any | null,
  finder: (data: any) => boolean,
) => {
  if (!finder)
    throw new Error(
      `Please specify the animation filter because we organize each animation ref into a list.`,
    )
  const context = useBaraContext()
  const animationRef = useRef(defaultValue)

  useEffect(() => {
    if (key in context.animation) {
      const animRef = context.animation[key].find(finder)
      if (animRef) {
        animationRef.current = animRef.value
      }
    }
  }, [])

  return animationRef.current
}
