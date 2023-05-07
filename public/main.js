const select = document.getElementById("eventDropDown").addEventListener('change', handleSelect)
const events = document.getElementsByClassName('event')

// this code should work

function handleSelect(e) {
  const eventIndex = e.target.selectedIndex - 1
  console.log("events", events[eventIndex])

  for (let i = 0; i < events.length; i++) {
    // mistake here was using events[eventIndex], we should be using events[i]. without [i]
    // it doesn't hide all of the events, only the selected one
    if (events[i].classList.contains("hidden") !== true) {
      // if we return here then the loop ends immediately, and we don't need a return because classList.add 
      // just does what it needs to do, it doesn't return anything
      events[i].classList.add("hidden")
    }
  }
  events[eventIndex].classList.remove("hidden")
}
