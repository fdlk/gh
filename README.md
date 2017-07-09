# Genomic hierarchy

>Google friday project to aggregate genomic variants in
a hierarchy based on their genomic location.

Idea courtesy of Joeri vd Velde.
See https://docs.google.com/presentation/d/1RG0WWdNQaJ30nORVaZbsMASmujpUn_GhOWxb-Gq5Vk0/edit#slide=id.g23221571e9_0_0

To reproduce / use with your own data:
1. Upload metadata in EMX (see data dir)
2. Upload data in tsv
3. Annotate variant data using python script gh.py 
4. Build and start the gh app to create a tree that aggregates the variants by genomic location (see app dir)

For now, the next step is to copy the generated tree JSON to
a github gist to plot in d3. But of course it's nicer to generate the plot in the gh app.

Check out [the intermediate result](https://bl.ocks.org/fdlk/076469462d00ba39960f854df9acda56) which renders 
the underlying [gist](https://gist.github.com/fdlk/076469462d00ba39960f854df9acda56) with the data.
