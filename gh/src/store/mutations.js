// @flow
import type { State, Variant } from './utils/flow.types'

export const SET_VARIANTS = '__SET_VARIANTS__'

export default {
  [SET_VARIANTS] (state:State, variants: Variant[]) {
    state.variants = variants
  }
}
