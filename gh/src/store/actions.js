import { get } from '@molgenis/molgenis-api-client'

import { SET_VARIANTS } from './mutations'

export const GET_VARIANTS = '__GET_VARIANTS__'
export const INITIALIZED = '__INITIALIZED__'

export default {
  [GET_VARIANTS] ({commit}) {
    get('/api/v2/gf_gh_Variant?num=10000')
      .then(response => {
        commit(SET_VARIANTS, response.items)
      }, error => {
        console.log(error)
      })
  },
  [INITIALIZED] ({dispatch}) {
    dispatch(GET_VARIANTS)
  }
}
