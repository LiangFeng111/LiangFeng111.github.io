var posts=["2026/03/27/hello-world/","2026/03/26/测试/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };