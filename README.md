# Scheduler
The user can input their daily tasks into a time block. When they click the save button, the task is saved and it will stay there even if the user refreshes the page. Each time block is color coded as the day goes by, with the past times being gray, the current time block being red, and the future time blocks being green. The day of the week, month, numerical day, and year are displayed at the top of the page along with a digital clock that continuously updates.

## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```