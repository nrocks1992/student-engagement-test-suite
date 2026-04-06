# Test Plan

(Write your concise plan here.)

### Scope
**In Scope:**  
Testing core functionality of the Student Engagement Portal, including login/logout, adding activities, filtering, sorting, toggling status, and deleting activities.

**Out of Scope:**  
Performance, security penetration testing, database persistence, and mobile responsiveness.

### Test Strategy
**Testing Types:**  
- **Functional Testing:** Validate user flows against acceptance criteria.  
- **UI/UX Testing:** Ensure elements (buttons, dropdowns, error messages) behave as expected.  
- **Regression Testing:** Verify core features remain stable after updates.  
- **Negative Testing:** Confirm proper handling of invalid input.

**Assumptions:**  
- Valid credentials exist in the test environment.  
- Browser compatibility testing is limited to latest Chrome version.  
- All actions update only the local session (no backend persistence).

**Risks:**  
- Data may not persist after refresh.  
- Client-side validation errors may not trigger consistently across browsers.

### Coverage Areas
- **Authentication:** Login, logout, and access control.  
- **Activities:** Add, delete, update (toggle).  
- **Sorting/Filtering:** Verify accurate display order and filtering logic.  
- **State Updates:** Ensure UI reflects real-time changes after actions.

### Defect Severity Level Definitions
- **Critical**: means the site or a major component of the site is unavailable.
- **Urgent**: means basic functionality is unable to produce required results.
- **Very High**: means the product is acting strangely but there are easy workarounds available (e.g., a minor link to the "About Us" page is broken but the rest of the "About Us" links still work).
- **High**: means the product is acting strangely but it usually self-heals if the user reloads the page or tries again.
- **Medium**: is a cosmetic error like a typo or a minor alignment issue.
- **Low**: is for defects we want to track but are so minor or rare that they aren't worth fixing in the current release.

# Test Cases

(Add 5–7 test cases here.)

| ID | Feature | Preconditions | Steps | Expected Result | Actual |
|----|----------|---------------|--------|-----------------|---------|
| **TC01** | Login / Logout | On login page | 1. Enter valid email & password (≥6 chars) → *Login* 2. Click *Logout* | Redirects to dashboard; then back to login page | TBD |
| **TC02** | Login Validation | On login page | 1. Enter password <6 chars → | Error shown; stay on login page | TBD |
| **TC03** | Add Activity | Logged in, on dashboard | 1. Name “Volunteering” 2. Points “10” 3. Status “Planned” 4. *Add* | Activity appears in list | TBD |
| **TC04** | Add Validation | On dashboard | 1. Leave name blank 2. Points “5” 3. Status “Completed” 4. *Add* | Error shown "Please enter a valid name and non-negative points"; activity not added | TBD |
| **TC05** | Filter Activities | Has “Planned” & “Completed” items | Select “Completed” from filter dropdown | Only completed items visible | TBD |
| **TC06** | Sort Activities | ≥2 activities with different points | Select “Points” sort | Sorted ascending by points | TBD |
| **TC07** | Toggle / Delete | ≥1 activity present | 1. Click *Toggle Status* 2. Click *Delete* | Status toggles; activity removed | TBD |

