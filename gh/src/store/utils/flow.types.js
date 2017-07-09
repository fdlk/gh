// @flow

export type State = {
  message: string,
  variants?: Variant[],
}

export type Node = {
  name: string,
  children?: [Node],
  size?: number
}

export type Variant = {
  "#CHROM": string,
  BAND: number,
  GENE: string,
  EXON: ?string,
  POS: number
}
