import {reques} from './reques'

export function getsellerdata(){
  return reques({
    url: 'seller'
  })
}