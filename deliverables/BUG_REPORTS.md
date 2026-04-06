# Bug Reports

(Log 3–5 issues here.)

# For each: title, severity, repro steps, expected vs. actual, environment, evidence (GIF/screenshot or notes).

# Bug 1

Title: Six character password is not allowed

Severity: High

Replication Steps:
	1. Navigate to http://localhost:5173/
	2. Enter an email address
	3. Enter a password that is exactly six characters long (e.g., 123456)
	4. Click Sign In

Behavior:
    An error is generated "Password must be at least 6 characters"

Expected result:
    The user should be logged in since we should allow for at least six characters

Environment: Localhost

Evidence: See relevant video file contained in this folder

# Bug 2

Title: Filtering by Completed shows only Planned activities

Severity: Very High

Replication Steps:
	1. Complete login steps on localhost:5173/
	2. Add an activity that is in planned state
	3. Add an activity that is in completed state
	4. Select "Completed" in the filter dropdown

Behavior:
Only the planned activities are shown

Expected result:
The user should only see activities in completed state

Environment: Localhost

Evidence: See relevant video file contained in this folder


# Bug 3

Title: Sorting by Points sorts by first digit only

Severity: Medium

Replication Steps:
	1. Complete login steps on localhost:5173/
	2. Given the activity values that are present: 15, 20, 5. Add activities of the following point values: 7,9,468
	3. Select "Points" in the Sort dropdown

Behavior:
The activities are sorted according to the first digit as follows: 15,20,468,5,7,9

Expected result:
The user should see activities sorted numerically in order of the actual value, e.g. 5,7,9,15,20,468

Environment: Localhost

Evidence: See relevant video file contained in this folder

# Bug 4

Title: When deleting an activity the wrong activity is deleted; One activity cannot be deleted

Severity: Very High

Replication Steps:
	1. Complete login steps on localhost:5173/
	2. Given the activities present, try to delete the activity at the bottom of the list (Orientation)
	3. Repeat Step 2


Behavior:
    The activity above Orientation (Hack Night) is deleted; when there is one activity left the delete button is non-functional

Expected result:
    The activity on which the user clicked should be deleted; it should be possible to delete all activities

Environment: Localhost

Evidence: See relevant video file contained in this folder
