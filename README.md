# Sandbox-kiosk

This is a demo for the sandbox-kiosk, a web app I'm building as part of a larger project at the Sandbox Makerspace (University of Maryland). 
This app is seperate from our production build, and is currently using a 'local' database to fetch some of the content. For our actual build, the content is provided through querying the backend (implemented in Flask) to fetch information from our wiki, as well as internal sources to display information. 

Technologies Used:
* React.js 
* Context API
* React-router-dom
* GH Pages (Hosting)
* Other packages (See package.json)

Current Developments:
* The app features a phenomenal responsive UX in React.js that lets users interact with the space (virtually) and view the tools, equipment.
* The back-end (not public due to provacy reasons) is an API in Flask that aggregates data from 5+ web sources and gives access to it in uniform JSON (GET/POST).

In Progress:
* Integrate micro-credentialling for managers to view students’ training status, by querying Canvas modules’ completion.
* Build a scalable system, and provision for collecting app usage data in future, for space enhancement using analytics.

If you want to learn more about Sandbox, you can check out our wiki [here](https://wiki.umiacs.umd.edu/sandbox/index.php/Main_Page)

**NOTE:**
This project is not allowed to be copied and/or distributed in any matter/form. If you have any suggestions and/or would like to adapt this project for your own personal use/makerspace use, please reach out to me directly, and I'd be happy to talk!
