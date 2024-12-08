---
layout: en/archive/blog/blog.njk
title: Slow sunday, NOT
archiveurl: https://web.archive.org/web/20080703022241/http://blog.plurk.com/2008/06/02/slow-sunday-not/
date: 2008-06-02
author: amix
---
You can rest easy knowing that every facet of Plurk is built with scaling in mind from day one.  Course, there will always be incidental hiccups along the way (it’s the nature of any experiment).  Today was one of those days.  See Exhibit A, below:

Exhibit A - Not what an NHL regulated hockey stick should look like.

![Chart of the number of active users suddenly spiking](media/archive/blog/2008/6/sunday/plurk_user_explosion.png)

Here’s the 411. There we were merrily minding our own business when we were descended upon by a swarm of A-list twittigentsia.  (We will withhold naming names *[cough](http://www.plurk.com/user/leolaporte)*) Couple this freak and unexpected publicity with our largely running the service off the backs of a non-production ready dev server and you have a huge performance issue.

Course we had to solve this and solve it fast we did. Now we’ve been able to sweep most of the little bugs underneath the rug and put back on our happy faces till the next probable stress test. (Again, no [names](http://scobleizer.com/) will be [named](http://www.techcrunch.com/)) Here is a quick and general rundown of what we did:

- We moved from our beta tested development server to real web boxes that can handle a much much larger load
- We implemented lazy loading of almost everything so it didn’t matter that Leo Laporte had 300+ friends on Plurk
- We added more caching
- We moved profile pictures to Amazon S3

Now Plurk is again running smoothly, but we are feverishly working round the clock to ensure that Plurk stays peppy and fun even with tonnes more users.  As always, please do [get in touch with us](http://www.plurk.com/contact) (w/ browser + version & OS details) if you run into any other glaring issues.