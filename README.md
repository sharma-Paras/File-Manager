# A Simple File Explorer

This file explorer is a partial representation of an online file management system built using Angular framework as the primary frontend. Some key functionalities include: 

  - Modern material design
  - File Uploads and Ordering
  

## Tech

The explorer uses a number of open source projects to work properly:

* [Angular] - Primary frontend
* [HTML/CSS] - Themeing and presentation
* [Firebase Realtime DB] - To store file addresses
* [Flex] - For Structuring and Design


## Development Notes
- We created the new project using the angular-cli with our file explorer component in a separate feature-module.
- We used the angular material library. This library provides a set of UI-components that follow google's material design paradigm
- The next thing we did is to define a model for our files and folders using FileElement class
- We then implemented the angular dialog boxes to display file name and upload buttons, using angular material dialog system.
- We then designed the File Explorer main components and template and created trigger menues for interface
- We then imeplemented a small file service map, with basic operations CRUD
- We then used the file service to feed the file explorer and display the items.

