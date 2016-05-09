var url = "https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json";
url += '?' + $.param({
  'api-key': "c272b43bf0ba4faa9817ba9eb353c6b4"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});
