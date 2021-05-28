---
title: Keeping up with the (J)one(S).
author: nadya
date: 2021-05-28 12:00
template: article.pug
---

I've recently decided to update my personal website after it has sat without change for nearly three years. In the process I've discovered that if you are not constantly on top of keeping the underlying technologies up-to-date that you are almost better off burning everything to the ground and starting from scratch.

<span class="more"></span>

I wanted to remove Gulp as a build dependency, so I looked at the modern "winners" in this area such as <a href="https://webpack.js.org/" rel="external noreferrer">WebPack</a> and <a href="https://parceljs.org/" rel="external noreferrer">Parcel</a> and even trying to use <code>NPM scripts</code> as a replacement. Maybe I didn't read the documentation for WebPack and Parcel closely enough but I couldn't get either to do what I needed it to do and the setup and configuration needed was far more complex than Gulp for my needs. The tools seem designed more in mind for JS Framework SPA's than they are for braindead asset generating.

And so I went back to Gulp... Though I am no longer running Node V10 and am using Node V16 and Node V12 introduced a bunch of breaking changes apparently as any up-to-date package requires Node V12+ and Gulp also changed quite a bit going from V3 to V4 and some fo the packages I used were no longer maintained and the list goes on and on. With a bit of Googling around for packages I found the tools I needed.

Then I decide I wanted a blog. But to easily manage a blog I needed a static-site generator. But I also need this generator to be unobtrusive with my existing build setup. I've used <a href="https://hexo.io/" rel="external noreferrer">Hexo.io</a> a while back for some work-related things. I may end up going back to it for the benefit of blog categories and tags but Hexo setup is a lot more involved than I wanted to get my blog up and running. In the end I went with <a href="http://wintersmith.io/" rel="external noreferrer">Wintersmith.io</a>. With almost no configuration needed this blog was up-and-running.
