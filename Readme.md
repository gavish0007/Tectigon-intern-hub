# Tectigon Intern Hub

A modern, responsive Intern Management Dashboard built with HTML, CSS, and JavaScript. It gives interns a centralized place to manage tasks, daily standups, attendance, team info, learning resources, and their profile — all through a clean, dark-themed dashboard interface.

## Overview

Tectigon Intern Hub is a front-end dashboard designed to streamline the day-to-day intern workflow at Tectigon IT Solutions. It brings together task tracking, standup updates, attendance monitoring, a team directory, curated learning resources, and profile management into a single, consistent multi-page app.

## Features

**Dashboard**
- Welcome banner
- Quick navigation cards
- Recent tasks overview
- Responsive layout

**Task Management**
- View assigned tasks
- Add new tasks
- Search tasks
- Filter by status (All / Pending / Completed)

**Daily Standups**
- Submit daily updates
- Yesterday's work section
- Today's plan section
- Blockers section
- Previous standup summary

**Attendance Tracking**
- Attendance statistics
- Attendance progress indicator
- Attendance calendar
- Recent attendance records

**Team Directory**
- Modern team member cards
- Role information
- Skill tags
- Responsive card layout

**Learning Resources**
- Curated learning resources
- HTML, CSS, JavaScript, GitHub, React, and SQL materials
- Direct access to external learning platforms

**Profile Management**
- Personal profile card
- Internship information
- Skills section
- Internship progress tracker
- Recent activity timeline
- Editable profile details

## Tech Stack

- **HTML5** — page structure (7 pages: dashboard, tasks, standups, attendance, team, resources, profile)
- **CSS3** — single shared stylesheet (`css/style.css`) driving the dark navy theme across all pages
- **Vanilla JavaScript** — one shared script (`js/script.js`) handling task filtering/search, active-nav-button state, and task creation
- **Font Awesome** (via CDN) — icons

## Project Structure

```
Tectigon-intern-hub-main/
├── index.html          # Dashboard
├── tasks.html           # Task management
├── standups.html         # Daily standups
├── attendance.html        # Attendance tracking
├── team.html               # Team directory
├── resources.html           # Learning resources
├── profile.html               # Profile management
├── css/
│   └── style.css               # Shared stylesheet for all pages
├── js/
│   └── script.js                # Shared logic (nav state, task filters/search, add task)
└── images/
    ├── logo.png                  # Sidebar/brand logo
    ├── image.png                  # Logo used in sidebar header
    ├── profile.png                 # Profile page image
    ├── mee.png                      # Profile page image
    └── user.png                      # User/avatar image
```

## Getting Started

No build tools or dependencies are required.

1. Download or clone this project.
2. Open `index.html` directly in a web browser.

That's it — the dashboard runs entirely in the browser.

> **Tip:** To avoid any browser restrictions on local file access, you can serve the folder with a simple local server, e.g.:
> ```bash
> npx serve .
> ```
> or, with Python:
> ```bash
> python3 -m http.server
> ```
> then visit `http://localhost:PORT` in your browser.

## UI Highlights

- Professional dark-themed dashboard
- Improved, fully clickable sidebar navigation
- Hover animations on buttons and cards
- Redesigned profile page with internship progress tracker and activity timeline
- Modern team member cards and enhanced resource cards
- Consistent styling across all pages

## Future Enhancements

- User authentication system
- Login / logout tracking
- Real-time attendance monitoring
- Backend integration
- Database connectivity
- Task assignment system
- Notification module
- Profile image upload
- Admin dashboard

## Notes

This is a front-end prototype — there is no backend, authentication, or database. It's intended as a demo/learning project simulating an internship management workflow.

## Developed By
Gavish Nagar
Frontend Developer Intern, Tectigon IT Solutions
