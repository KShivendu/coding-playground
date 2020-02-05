https://repl.it/data/t/ping - is being used to ping 

https://repl.it/data/repls/a2b58ec5-92d2-4606-9597-aa0e5fe48512/gen_repl_token - It returns a token and 
in expect-ct header of response it gives report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"
also it sends:

captcha: "<some very long string>"
polygott: false
flags: {}
format: "pbuf"

The recieved token can be later used to have a constant connection to the server



https://repl.it/data/repls/new - A POST request to this URL with request payload {language: "java_swing"} along with cookies
id: "a2b58ec5-92d2-4606-9597-aa0e5fe48512"
user_id: null
title: "LazyWeeEditor"
description: null
is_project: false
is_private: false
time_created: "2020-01-31T16:53:10.005Z"
time_updated: "2020-01-31T16:53:09.998Z"
views: 0
content_length: 0
origin_id: null
slug: "LazyWeeEditor"
config: {isVnc: true}
is_renamed: false
folder_id: null
url: "/repls/LazyWeeEditor"
language: "java_swing"
fileNames: ["Main.java"]
is_owner: true
show_chat: false
but you can't post it from any other place, I tried from curl and even fetch() from the URL https://repl.it/data/repls/new itself
Note that the recieved id itself is used to post to data/repls to recieve the token

I am not sure how but I am seeing two different tokens generated from different POST requests, maybe I messed up with something


A GET request to https://repl.it/data/languages/java_swing/examples , this one clearly gives you example codes as JSON

GET request to https://repl.it/data/banners/latest , gives "null" - don't know why.


https://repl.it/graphql , POST request with following text:
operationName: "Pricing"
variables: {}
query: "query Pricing {↵  currentUser {↵    id↵    username↵    isHacker↵    __typename↵  }↵}↵"

returns  
{data: {currentUser: null}}
 

https://api.segment.io/v1/t for some analysis

weirdly , image of only the topmost bar(which contains - close,maximize and minimize) button is being loaded as base64 JPEG every time,
I tried to move the window anywhere in the format data:
image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD......

similarly, even pointer image was generated once


The constant ping url looks like

wss://eval.repl.it/wsv2/ZXlKamNtVmhkR1ZrSWpveE5UZ3dORGt3T0RBMk16STBMQ0p6WVd4MElqb2ljMjU1T1RObk5tRnRheUlzSW01bGRDSTZkSEoxWlN3aWJXVnRJam8xTXpZNE56QTVNVElzSW5Sb2NtVmhaQ0k2TUM0MUxDSnphR0Z5WlNJNk1DNDFMQ0prYVhOcklqb3hNRGN6TnpReE9ESTBMQ0pwWkNJNkltRXlZalU0WldNMUxUa3laREl0TkRZd05pMDVOVGszTFdGaE1HVTFabVUwT0RVeE1pSXNJbkJoZEdnaU9pSk1ZWHA1VjJWbFJXUnBkRzl5SWl3aWIzZHVaWElpT25SeWRXVXNJbXhoYm1kMVlXZGxJam9pYW1GMllWOXpkMmx1WnlJc0luVnpaWElpT2lKbWFYWmxMVzVwYm1VaUxDSmlkV05yWlhRaU9pSnlaWEJzYVhRdGNtVndiSE1pTENKd2RXeHNSbWxzWlhNaU9uUnlkV1VzSW5CdmJIbG5iM1IwSWpwbVlXeHpaU3dpWVhSMFlXTm9JanAwY25WbExDSm1iM0p0WVhRaU9pSndZblZtSWl3aVpteGhaM01pT250OWZRPT06RGN6dGlTb2cxeVh2WDNESktTV0FDNTJVM3ZMd0JCWjZ4UHZnT282b3RScz0=

For every keystroke in the terminal of the page, atleast an upstream followed by a downstream can be seen


This request never finished till the tab is closed

Note the use of wss instead of http


Another similar constantly connected URL is
wss://lazyweeeditor--five-nine.repl.co/

This one seems to handle the GUI part(for Java Swing), as it connection goes offline if GUI isn't visible
This one sned data when I hover the mouse in the GUI's canvas 


.har file is stored for further references 

repl.it.har

`bash -c xset q && DISPLAY=MAGIC run-project` command runs when the GUI projection starts



https://repl.it/@KShivendu/crosis-example - Might be useful to understand it's REST API better
