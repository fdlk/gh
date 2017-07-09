import molgenis

'''
Genomic location annotator.

Annotates the #CHROM/POS location of each variant with the name of the chromosomal band and optionally the id of an exon
it is located in.

This script expects three entities to be present:
gf_gh_Variant, gf_gh_Band and gf_gh_Exon

It downloads the variants, and for each row looks up the band and exon.
It updates the variants with this information.

Tested with python 3.
N.B. Make sure to actually read the script and update the string values (e.g. port number!) to match your situation
'''
session = molgenis.Session('http://localhost:8081/api/')
session.login('admin', 'admin')
pagesize = 1000
for page in range(0,1):
    variants = session.get('gf_gh_Variant', num=pagesize, start=page*pagesize)
    for variant in variants:
        query = '#CHROM=q={chrom};END=gt={pos};START=le={pos}'.format(chrom=variant['#CHROM'],
                                                                      pos=variant['POS'])
        band = session.getv2('gf_gh_Band', query)
        variant['BAND'] = band[0]['NAME']
        exon = session.getv2('gf_gh_Exon', query)
        if exon:
            variant['EXON'] = exon[0]['ID']
    session.update_all('gf_gh_Variant', variants)