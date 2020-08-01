// Copy and//document.addEventListener("DOMContentLoaded", function(){
//  
//});

//GLOBALS
var plannerContainer = document.getElementById('planner-container');
var planner = ['9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM'];


// plannerObj['4'] 
var plannerObj = {};

jQuery(document).ready(function($){
// Time element in header
const today = moment().format('dddd, MMMM Do, YYYY : hh:mm A');
var DisplayMoment = document.getElementById('currentDay');
  DisplayMoment.innerHTML = today;
plannerContainer.addEventListener('click', handleSave);
renderCalendar();
// color of middle column based on past, preset,future
var textColumn = $('#columns');
//if(today > )

});


function handleSave(event){
  var eventTarget = event.target;
  if (eventTarget.classList.contains('fa-save')) {
    //filtering out to only handle clicks on our btn divs
    let parentDiv = eventTarget.parentElement.parentElement;
    let time = parentDiv.querySelector('.hour').textContent;
    let note = parentDiv.querySelector('textarea').value;
  
    plannerObj[time] = note;
    let data = JSON.stringify(plannerObj);
    localStorage.setItem('calendar', data);
    
  }
}

function fetchCalendar() {
  let storedObj = localStorage.getItem('calendar');
  if (storedObj) {
    let data = JSON.parse(storedObj);
    plannerObj = data;
  } 
}


function renderCalendar() {
  fetchCalendar();
  plannerContainer.innerHTML = '';

  planner.forEach(function(timeSlot, i){
    var bgColor = 'past';
    var event = '';
    if (plannerObj.hasOwnProperty(timeSlot)) {
      event = plannerObj[timeSlot];
    }
    var hour = moment().format('hA');
    var index = planner.indexOf(hour);
    if (index !== -1){
      if (i === index) {
        bgColor = 'present';
      } 
      if (index < i) {
        bgColor = 'future';
      }
    }

    let div = document.createElement('div');
    //template literals
    var template = `
          <div class='row' id=${timeSlot}>
              <div class='col-md-2 hour'>${timeSlot}</div>
              <div class='col-md-8 ${bgColor}' id='columns'><textarea>${event}</textarea></div>
              <div class='col-md-2 saveBtn'>
                <i class="far fa-save" style="font-size:24px"></i>
              </div>
          </div>`
    plannerContainer.innerHTML += template;
  });
}