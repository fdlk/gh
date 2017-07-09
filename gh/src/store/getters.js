import {groupBy, prop, pipe, map, length, toPairs, zipObj} from 'ramda'
import type {State} from 'utils/flow.types'

const objectToNode = (keyname, valuename) => pipe(toPairs, map(zipObj([keyname, valuename])))
const processGeneList = pipe(groupBy(prop('EXON')), map(length), objectToNode('name', 'size'))
const processBandList = pipe(groupBy(prop('GENE')), map(processGeneList), objectToNode('name', 'children'))
const processChromList = pipe(groupBy(prop('BAND')), map(processBandList), objectToNode('name', 'children'))
const convert = pipe(groupBy(prop('#CHROM')), map(processChromList), objectToNode('name', 'children'))

export default {
  tree: (state:State) => state.variants.length && ({
    name: 'variants',
    children: convert(state.variants)
  })
}
