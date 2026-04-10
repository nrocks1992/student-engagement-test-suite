# Student Engagement Portal QA Project

Welcome! This is a small student engagement portal meant for QA evaluation.
It contains a few functional quirks/bugs by design. 

## What’s In Scope

The **Student Engagement Portal** is a simple web app that simulates how students track co-curricular activities outside of the classroom. Its purpose is to let you practice designing test plans, identifying bugs, and writing automation.

Here are the primary expected behaviors, expressed as user stories with acceptance criteria:

### Login/Logout
**User Story:** As a student, I want to log in and log out so that I can securely access my activities.

- **Given** I am on the login page, **when** I enter a valid email and password with at least 6 characters, **then** I should be logged in and see the dashboard.  
- **Given** I am logged in, **when** I click the logout button, **then** I should be returned to the login page.

### Add Activity
**User Story:** As a student, I want to add an activity so that I can track my engagement.

- **Given** I am on the dashboard, **when** I enter a valid name, non-negative points, and choose a status, **then** the activity should appear in my activity list.  
- **Given** I leave the name blank or enter negative points, **when** I try to submit, **then** I should see an error and the activity should not be added.

### Filter Activities
**User Story:** As a student, I want to filter activities so I can see only those that match a specific status.

- **Given** I have multiple activities, **when** I select “Completed” from the filter dropdown, **then** only completed activities should be shown.  
- **Given** I select “Planned”, **when** I view the list, **then** only planned activities should be shown.

### Sort Activities
**User Story:** As a student, I want to sort activities so that I can view them in an order that helps me understand my progress.

- **Given** I select “Name” from the sort dropdown, **when** I view the list, **then** activities should be sorted alphabetically by name.  
- **Given** I select “Points”, **when** I view the list, **then** activities should be sorted numerically by points.

### Toggle Status & Delete Activity
**User Story:** As a student, I want to update or remove activities so that my records remain accurate.

- **Given** an activity is in the list, **when** I click “Toggle Status”, **then** its status should switch between Completed and Planned.  
- **Given** an activity is in the list, **when** I click “Delete”, **then** it should be removed from the list.


> Hint: You may open Cypress with `npm run cypress:open` and use the UI
> to drive test authoring quickly.

## Setup

1. Download this repository via zip file or clone it on your local machine
1. Ensure Node 18+ is installed.
    - Recommended to use nvm (Node Version Manager). [Here is a link for Linux/Mac machines](https://github.com/nvm-sh/nvm), and a separate [link for Windows machines](https://github.com/coreybutler/nvm-windows)
2. Install deps: `npm install`
3. Start the app: `npm start`
4. App runs at http://localhost:5173




