Here’s my overwrought blog. 

It pulls Markdown content from a [GraphQL API](https://api.hal.codes/graphql?query=%7B%0A%20%20blogPosts%20%7B%0A%20%20%20%20nodes%20%7B%0A%20%20%20%20%20%20title%0A%20%20%20%20%20%20kicker%0A%20%20%20%20%20%20meta%20%7B%0A%20%20%20%20%20%20%20%20published%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20body%20%7B%0A%20%20%20%20%20%20%20%20markdown%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20slug%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D) and uses Gatsby to render it into a static site. It’s hosted on 

![screenshot of blog.hal.codes](screenshot.png)
