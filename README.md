## Weird React mozilla addon behavior in Firefox 

### The problem
I'm creating mozilla addon extension which injects into some webpages to help users
shop online. But I noticed that on some pages React code stops to work in
Firefox. Chrome is fine.

This repo is the minimal amount of code to reproduce the problem.

Steps to reproduce
1. Clone the repository
2. Open Firefox and type about:debugging in url
3. click "Load Temporary Add-on"
4. Open manifest.json in the src folder
5. Navigate to the website https://www.ezibuy.com/shop/au/
6. Open devtools, console
7. Click with intervals on the CLICK ME window in the top left corner
8. Notice that after some time "Click from React" stops logging, but 
"Click from addEventListener" continues.

There is also the file direct-injection.js which holds almost the same code as
in the extension, but that code can be injected directly in the page.
This code works as expected.
