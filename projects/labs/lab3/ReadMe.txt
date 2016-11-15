Chris Valmas Lab 3

Part 0:
Created the folder, and Apache is up and running

Part 1:
I commented my code but basically at first I tried doing it without recursion because I found a function on stackoverflow but it used JQuery so I had to scrap that.

In the end I wound up using recursion and had to make sure I only included tags. I also had to update the information of the page which I did at the top with my var information and innerHTML

Part 2:
Put the onclick at the top right under the variables. It basically just uses alert() and says the tag name... nothing difficult this time

Part 3:

For this part I ran into some trouble because at first I was changing marginLeft instead of just using style.left. I had to make sure the div.style.position = "relative" which I was told by a classmate (the div wasn't moving at all before I did that). After he told me that I was able to figure out the way to get the Div back in place was to then reset the div.style.left to 0 px.  I also had to update the html quote classes and add onmouseover and onmouseout events.