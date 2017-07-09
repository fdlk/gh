import getters from 'store/getters'

describe('getters', () => {
  describe('tree', () => {
    it('should aggregate the variants in the state', () => {
      const state = {
        variants: [
          {'#CHROM': '3', BAND: '12.2', GENE: 'ABCD', EXON: 'a'},
          {'#CHROM': '2', BAND: '12.2', GENE: 'ABCD', EXON: 'b'},
          {'#CHROM': '3', BAND: '13.2', GENE: 'ABCD', EXON: 'c'},
          {'#CHROM': '3', BAND: '12.2', GENE: 'DCBA', EXON: 'd'},
          {'#CHROM': '3', BAND: '12.2', GENE: 'ABCD', EXON: 'a'}]
      }
      const result = getters.tree(state)
      const expected = {
        'name': 'variants',
        'children': [{
          'name': '2',
          'children': [
            {
              'name': '12.2',
              'children': [{
                'name': 'ABCD',
                'children': [
                  {'name': 'b', 'size': 1}]
              }]
            }]
        }, {
          'name': '3',
          'children': [
            {
              'name': '12.2',
              'children': [
                {
                  'name': 'ABCD',
                  'children': [
                    {'name': 'a', 'size': 2}]
                }, {
                  'name': 'DCBA',
                  'children': [
                    {'name': 'd', 'size': 1}]
                }]
            }, {
              'name': '13.2',
              'children': [
                {
                  'name': 'ABCD',
                  'children': [
                    {'name': 'c', 'size': 1}]
                }]
            }]
        }]
      }
      expect(result).to.deep.equal(expected)
    })
  })
})
