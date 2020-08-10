# [WIP] Future Imperfect - Ghost theme  

This theme is originally created by [@ajlkn](https://twitter.com/ajlkn) for [HTML5 UP](https://html5up.net/), and ported to [Ghost](https://ghost.org/).

Demo: [https://blog.lss233.com](https://blog.lss233.com)
![](https://html5up.net/uploads/images/future-imperfect.jpg)
# Settings
This theme contains some personal information.
## Disqus
Located in `post.hbs`, around line `67`, change the `s.src` value to your own value.

## User feeds
Located in `partials/user-feeds.hbs`, around line `121` to `125`, you will see:
```
			server: 'https://lss233.com/feeds.php',
			twitter: 'lss233_',
			instagram: 'lss233_',
			github: 'lss233',
			ncm: '317570664'
```
The `server` point to my service, which is a simple php file that fetchs the RSS infomation.
You can that address so far.
Change those values to your username. If you don't have one, just delete it.
The `ncm` is a `Netease Cloud Music` user id.

# Known Issues   
1. The theme is still working in progress, I haven't finish these pages:
  * `author.hbs`
  * `tags.hbs`
  The pages above are using one of my another theme [Alpha](https://github.com/lss233/Ghost-Alpha) so far.
2. Site logo cannot show up as expect.

# Copyright & License

Copyright (c) 2013-2019 [HTML5 UP](https://htmlup.net) & [Lss233](https://lss233.com) - This theme is licensed under both the [MIT and Creative Commons Attribution 3.0](LICENSE). Please note that the terms of the Creative Commons license require that you maintain the footer attribution to freely use this theme.