var posts=["posts/177574ba.html","posts/317691eb.html","posts/4ddc09ad.html","posts/eaa26695.html","posts/9b535f5.html","posts/e64a4f6e.html","posts/697f9beb.html","posts/83608bf2.html","posts/912fd7bd.html","posts/d87f7e0c.html","posts/dfb8a81f.html","posts/e93280fa.html","posts/b8cf1317.html","posts/eb17b0ec.html","posts/a3410e7c.html","posts/9520183a.html","posts/f78c5a0d.html","posts/4a17b156.html","posts/5f9e518d.html","posts/10200aa1.html","posts/bf9aa7dd.html"];function toRandomPost(){pjax.loadUrl("/"+posts[Math.floor(Math.random()*posts.length)])}