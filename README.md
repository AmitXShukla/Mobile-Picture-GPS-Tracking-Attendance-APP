## Please give a Star * to this repository if you like this project.
<h2>Mobile Picture, GPS Tracking Attendance App</h2>
<h4>A Mobile GPS, Picture Attendance App for storing Employee, Asset Picture Attendance with GPS Locations.</h4>
<h2>Objective</h2>
Store all Employee and/or Assets attendance records electronically.<br/>
1. Paperless Records for Attendance Regiter<br/>
2. Save Pictures and Live GPS Locations<br/>
3. Online and/or <b>Offline (delayed capture)</b> App<br/>
4. One App for multiple platforms (iOS, Android, Desktop, Cloud etc.)<br/>
5. Unlimited Storage (only limited to server/database hosting).<br/>
6. Store and Access millions of records instantly.<br/>
7. Paperless and Mobile on-premise App.<br/>
8. Instant access to ALL historical records at anytime.<br/>
9. No Thumb expressions, Picture identification or card punching or GPS devices to carry except smart phone.<br/>
10. Auto Face Recognition (Pro version only).<br/>

<i>send an email to info@elishconsulting.com for Pro version enquiries.</i>
<h2><a href="https://www.youtube.com/playlist?list=PLp0TENYyY8lHiTISr7IhQi0iu7f1op9ME">Video Tutorials Link!</a></h2>
<h2>Tools: </h2>
<b>front-end:</b> Angular 7<br/>
<b>back-end:</b> Google Firebase<br/>
Pro Version: AI, Machine Learning Algorthim with Face Recognition<br/>
<h2>Let's get started :-</h2>
<br/><br/>
Before we start, Please make sure you have latest version of node js installed.<br/>
Let's head out to https://nodejs.org/en/ and grab latest nodejs.<br/>
Once you have nodejs installed, open command prompt/terminal window.<br/>
$ node -v // make sure, this command comes back with a node version<br/>
$ npm -v // make sure, this command comes back with a npm version<br/><br/>

<h2>How to Install NodeJS on ChromeOS</h2>
# First run<br/>
$ sudo apt-get update<br/>
# and then if needed<br/>
$ sudo apt-get install curl gnupg -y<br/>
# or nodejs version 11<br/>
$ curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash -<br/>
$ sudo apt-get install -y nodejs<br/><br/>
<h2>Install Angular CLI</h2>
$ npm install -g @angular/cli<br/>
$ mkdir app<br/>
$ cd app<br/>
$ mkdir client<br/
$ cd client<br/>
$ ng new GPS-Pic-Attendance<br/>
$ cd GPS-Pic-Attendance<br/>
$ ng serve<br/>
<br/><br/>

$ ng g c shared/aboutus --spec=false --flat=true<br/>
$ ng g c shared/header --spec=false --flat=true<br/>
$ ng g c shared/footer --spec=false --flat=true<br/>
$ ng g c shared/login --spec=false --flat=true<br/>
$ ng g c shared/signup --spec=false --flat=true<br/>
$ ng g c product/attendance --spec=false --flat=true<br/><br/>

<h2> Firebase Database Rules</h2>
service cloud.firestore {<br/>
  match /databases/{database}/documents {<br/><br/>
  
   match /attendance/{document} {<br/>
   allow write: if isSignedIn();<br/>
   allow read, update: if isDocOwner() || isAdmin();<br/>
   }<br/><br/>
    
  match /attendanceusers/{document} {<br/>
   allow read: if isSignedIn();<br/>
   }<br/>
  }<br/><br/>
// helper functions<br/>
    function isDocOwner(){<br/>
    // assuming document has a field author which is uid<br/>
    // Only the authenticated user who authored the document can read or write<br/>
    	return request.auth.uid == resource.data.author;<br/>
      // This above read query will fail<br/>
    // The query fails even if the current user actually is the author of every story document.<br/>
    //  The reason for this behavior is that when Cloud Firestore applies your security rules, <br/>
    //  it evaluates the query against its potential result set,<br/>
    //   not against the actual properties of documents in your database. <br/>
    //   If a query could potentially include documents that violate your security rules, <br/>
    //   the query will fail.<br/>
    //   on your client app, make sure to include following<br/>
    //   .where("author", "==", this.afAuth.auth.currentUser.uid)<br/>
    }<br/>
    function isSignedIn() {<br/>
    // check if user is signed in<br/>
          return request.auth.uid != null;<br/>
    }<br/>
    function isAdmin() {<br/>
    return get(/databases/$(database)/documents/attendanceusers/<br/>
    $(request.auth.uid)).data.isAdmin == true;<br/>
    }<br/>
    
videos !!<br/>
Setup Angular environment<br/>
Setup Angular Materials<br/>
Setup Firebase<br/>
Setup Angular Routes and AuthGuard<br/>
AngularFire and Firebase<br/>
Social Auth<br/>
Angular with Google Maps<br/>
GPS Location<br/>
Angular Firebase fileupload FireStorage<br/>
Angualar Materal Data table tutorials <br/>
Firebase persistence<br/>
Using Google Maps with Angular 7<br/>
Firebase query<br/>
Firebase database rules<br/>
