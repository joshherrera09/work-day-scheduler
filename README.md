# work-day-scheduler
Weekly Planner

# Description
* The work day scheduler was intended to provide a planner for the work day hours (9AM-5PM). 
* When content is added to a specific hour and the save button is clicked, that event should be saved to local storage.
* As the hours of the day go by, the hour rows should be color coded based on past, present and future, to easier identify the tasks left in the day.
* The events saved to local storage should appear on the page when refreshed.

# Installation
* I used two golal variables
  * plannerContainer which was set to access the 'planner-container' div
  * planner which was used to access the different hours in the planner, seperated by AM/PM

* Functions
  * moment.js was used to create the time element
  * handleSave() was used to save to local storage
  * fetchCalendar() was used to fetch the data from local storage and display on the calendar (key:value pair was calendar:data)
  * renderCalendar used a forEach() loop to set the color content of the rows, depending on past present and future

* Template Literal
  * I used a template literal to dynamically create all the rows, with the corresponding hours, text area, and save buttons.
