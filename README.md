Continue the Fun E-Commerce site:
This repo contains both a React front-end (in the client folder) and Ruby back-end. Upon cloning you'll want to run "bundle install" and "npm install --prefix client".
The app is automatically configured to run the Rails and React local hosts on separate ports. Running "Npm start --prefix client" and "rails s" in seperate terminals from the root folder will launch the React site and start the rails server for local hosting. 

You will need to update the e-mail and password and possibly domain for sending E-mails to users. This can be done by editing the config/environments/production.rb file. 

At the moment this app does not contain seed data. You will either need to build out your own or use the site to populate the site.

Notes about the usage of this app; Sweet Alert deals with the alerts, it can occasionally run into issues reading error objects from Ruby. 
Semantic UI is used for most of the styling, however I found it to be rather limiting. You'll see there is extensive work in the CSS file to tweak most of the components. 
I also implemented CSS grid for the first time in the app. If you tinker with it you'll find it to be accomplished in a "rough" manner. It works but I certainly don't envy you attempting to refactor it. 

