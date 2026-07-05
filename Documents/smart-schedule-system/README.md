Smart Academic Schedule and Notification System
Project Overview
The Smart Academic Schedule and Notification System is a mobile-first academic platform designed to improve communication between students, professors, and administrators. The system provides real-time access to schedules, announcements, and class updates using a mobile application connected to Firebase. The application is distributed through a downloadable APK file, which is accessible via a GitHub Pages website.
The system aims to reduce the need for students to constantly check school websites for updates by providing a centralized and automated scheduling and notification system.
________________________________________
Main Problem
Students often experience difficulty in monitoring academic updates such as:
•	class schedules 
•	room changes 
•	cancelled classes 
•	professor announcements 
•	sudden timetable updates 
This leads to confusion, missed classes, and inefficient communication between students and professors.
________________________________________
Proposed Solution
The system provides a centralized mobile-based scheduling and notification platform where:
•	professors can manage schedules and announcements 
•	students can view real-time updates based on their section 
•	administrators can manage users and academic sections 
The system ensures that updates are instantly reflected on the student’s mobile application.
________________________________________
System Architecture
1.	Firebase Backend
Firebase is used as the backend system to manage: 
•	user authentication 
•	Firestore database (schedules, announcements, sections) 
•	real-time data synchronization 
________________________________________
2.	Mobile Application (APK)
The application is built using Capacitor and runs on Android devices. It provides: 
•	login system 
•	student dashboard 
•	professor dashboard 
•	schedule viewing 
•	announcement system 
•	real-time updates from Firebase 
________________________________________
3.	Web Distribution (GitHub Pages)
A simple website hosted on GitHub Pages is used as: 
•	a landing page 
•	APK download portal 
•	installation instruction page 
The APK file is downloaded by users from this website.
________________________________________
Main Objectives
General Objective
To develop a mobile-based academic scheduling and notification system that improves communication and accessibility of class information.
Specific Objectives
•	To allow professors to manage class schedules 
•	To allow students to view schedules easily through a calendar interface 
•	To provide announcement and cancellation notifications 
•	To reduce confusion caused by schedule changes 
•	To centralize academic information in one system 
________________________________________
Target Users
•	Students 
•	Professors 
•	Administrators 
________________________________________
User Roles
Student
Can:
•	log in 
•	view schedules 
•	view announcements 
•	receive updates
Cannot: 
•	create or edit schedules 
Professor
Can:
•	create and edit schedules 
•	post announcements 
•	cancel classes 
•	mark absences 
Administrator
Can:
•	manage users 
•	manage sections 
•	create professor accounts 
•	monitor schedules 
________________________________________
Core Features
Authentication System
•	Firebase login system 
•	role-based access (student, professor, admin) 
Schedule Management
•	create, edit, delete schedules 
•	calendar-based interface 
•	section-based scheduling 
Announcement System
•	post updates and reminders 
•	section-specific or general announcements 
Absence Notification System
•	professors can mark absences 
•	students receive instant cancellation updates 
Student Dashboard
•	personal schedule view 
•	calendar interface 
•	announcements feed 
Professor Dashboard
•	schedule management 
•	announcement posting 
•	class control tools 
________________________________________
System Flow
Professor Flow
Professor logs in → creates or updates schedule → data stored in Firebase → students receive updates automatically
Student Flow
Student logs in → system loads section → schedules and announcements are displayed in real time
________________________________________
Connection Method
The system uses section-based connections. Each schedule is assigned to a specific section, and all students in that section automatically receive updates.
Example:
A schedule posted for BSIT-2A will automatically appear for all students in BSIT-2A.
________________________________________
Technology Stack
Frontend
•	HTML 
•	CSS 
•	JavaScript 
•	Capacitor (for mobile app conversion) 
Backend
•	Firebase Authentication 
•	Firebase Firestore 
•	Firebase Storage (optional) 
Hosting / Distribution
•	GitHub Pages (website) 
•	GitHub Releases (APK download) 
________________________________________
Database Structure
Users
•	userId 
•	name 
•	role 
•	section 
Sections
•	sectionName 
•	course 
•	yearLevel 
Schedules
•	subject 
•	professor 
•	section 
•	date 
•	time 
•	room 
•	status 
Announcements
•	title 
•	message 
•	targetSection 
•	timestamp 
________________________________________
Minimum Viable Product (MVP)
The first working version includes:
•	login system 
•	student dashboard 
•	professor dashboard 
•	schedule creation and viewing 
•	announcement system 
•	APK build and deployment 
•	Firebase integration 
________________________________________
Future Features
•	push notifications 
•	QR attendance system 
•	AI assistant for schedules 
•	email/SMS notifications 
•	analytics dashboard 
•	full mobile optimization 
________________________________________
Expected Benefits
•	improved communication 
•	reduced schedule confusion 
•	centralized academic information 
•	real-time updates 
•	easier access for students and professors 
________________________________________
Scope Limitation
This system focuses only on:
•	scheduling 
•	announcements 
•	notifications 
It does not include:
•	grading system 
•	financial system 
•	full LMS features 
________________________________________
Project Goal
To develop a mobile-first academic scheduling and notification system powered by Firebase that improves communication between students and professors, with distribution handled through a GitHub-hosted download system and installation via APK.

