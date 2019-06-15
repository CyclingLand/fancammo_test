// Replace with your own values
const searchClient = algoliasearch(
  'XTBGGZ9GG7',
  '3dd80f1e420b39dcd2874916090df7d5' // search only API key, not admin API key
);

const search = instantsearch({
  indexName: 'contacts',
  searchClient,
  routing: true,
});

search.addWidget(
  instantsearch.widgets.configure({
    hitsPerPage: 10,
  })
);

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#search-box',
    placeholder: 'Search for contacts',
  })
);

search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: document.getElementById('hit-template').innerHTML,
      empty: `We didn't find any results for the search <em>"{{query}}"</em>`,
    },
  })
);

search.start();
