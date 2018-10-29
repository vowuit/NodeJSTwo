

let RSSParser = require('rss-parser');
let parser = new RSSParser();

parser.parseURL('https://www.reddit.com/.rss', function(err, feed) {
	console.log(feed.title);
	
	feed.items.forEach(function(entry) {
		console.log(entry.title);
	});
});

