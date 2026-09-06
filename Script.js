/* =========================================================
   LAMOILE RAIDERS ATHLETICS
   Main Application Script
   ========================================================= */

"use strict";

/* =========================================================
   CONFIGURATION
   ========================================================= */

const LAMOILE = {
    schoolName: "Lamoile High School",
    athleticsName: "Lamoile Raiders Athletics",
    academicYear: "2026–27",
    athleticsEmail: "athletics@lamoilehs.edu",
    phone: "(000) 555-0147",

    storage: {
        teams: "lamoile_teams",
        events: "lamoile_events",
        staff: "lamoile_staff",
        facilities: "lamoile_facilities",
        applications: "lamoile_applications",
        discipline: "lamoile_discipline",
        news: "lamoile_news",
        announcements: "lamoile_announcements",
        notifications: "lamoile_notifications",
        audit: "lamoile_audit",
        tickets: "lamoile_tickets",
        auth: "lamoile_auth",
        settings: "lamoile_settings"
    }
};


/* =========================================================
   DEMO STAFF ACCOUNTS
   Client-side demo only.
   ========================================================= */

const STAFF_ACCOUNTS = [
    {
        username: "schooladmin",
        password: "LamoileAdmin2026!",
        role: "School Administration",
        displayName: "School Administrator",
        permissions: "all"
    },
    {
        username: "athleticsadmin",
        password: "RaidersAthletics2026!",
        role: "Athletics Administration",
        displayName: "Athletics Administrator",
        permissions: "athletics"
    },
    {
        username: "headcoach",
        password: "RaidersCoach2026!",
        role: "Head Coach",
        displayName: "Head Coach",
        permissions: "coach"
    }
];


/* =========================================================
   DEFAULT DATA
   ========================================================= */

const DEFAULT_TEAMS = [
    {
        id: "football",
        name: "Football",
        shortName: "FB",
        gender: "Boys",
        levels: ["Varsity", "JV", "Freshman"],
        headCoach: "Position Open",
        assistantCoaches: [],
        facility: "Lamoile Football Stadium",
        season: "Fall",
        record: "0–0",
        status: "Active",
        description:
            "The Lamoile Raiders football program competes with an emphasis on discipline, teamwork, preparation, and competitive excellence."
    },
    {
        id: "basketball",
        name: "Basketball",
        shortName: "BB",
        gender: "Boys",
        levels: ["Varsity", "JV", "Freshman"],
        headCoach: "Position Open",
        assistantCoaches: [],
        facility: "Lamoile High Gym",
        season: "Winter",
        record: "0–0",
        status: "Active",
        description:
            "The Raiders basketball program develops student-athletes through competition, accountability, and team-first basketball."
    },
    {
        id: "soccer",
        name: "Soccer",
        shortName: "SOC",
        gender: "Boys",
        levels: ["Varsity", "JV"],
        headCoach: "Position Open",
        assistantCoaches: [],
        facility: "Raiders Athletic Field",
        season: "Spring",
        record: "0–0",
        status: "Active",
        description:
            "Lamoile Soccer combines technical development, tactical awareness, sportsmanship, and competitive play."
    },
    {
        id: "cheerleading",
        name: "Cheerleading",
        shortName: "CHEER",
        gender: "Coed",
        levels: ["Varsity", "JV"],
        headCoach: "Position Open",
        assistantCoaches: [],
        facility: "Lamoile High Gym",
        season: "Year Round",
        record: "N/A",
        status: "Active",
        description:
            "The Raiders Cheerleading program supports school spirit while developing athleticism, leadership, performance, and teamwork."
    },
    {
        id: "wrestling",
        name: "Wrestling",
        shortName: "WREST",
        gender: "Coed",
        levels: ["Varsity", "JV"],
        headCoach: "Position Open",
        assistantCoaches: [],
        facility: "Lamoile Boxing Arena",
        season: "Winter",
        record: "0–0",
        status: "Active",
        description:
            "The wrestling program emphasizes discipline, conditioning, technique, resilience, and individual development."
    }
];


const DEFAULT_EVENTS = [
    {
        id: "evt-001",
        sport: "Football",
        eventType: "Game",
        opponent: "Riverview High School",
        date: "2026-09-11",
        time: "7:00 PM",
        location: "Lamoile Football Stadium",
        status: "Scheduled",
        homeAway: "Home",
        ticketed: true
    },
    {
        id: "evt-002",
        sport: "Soccer",
        eventType: "Game",
        opponent: "North Valley High School",
        date: "2026-09-15",
        time: "5:30 PM",
        location: "Raiders Athletic Field",
        status: "Scheduled",
        homeAway: "Home",
        ticketed: true
    },
    {
        id: "evt-003",
        sport: "Football",
        eventType: "Game",
        opponent: "Central High School",
        date: "2026-09-18",
        time: "7:00 PM",
        location: "Central High School Stadium",
        status: "Scheduled",
        homeAway: "Away",
        ticketed: false
    },
    {
        id: "evt-004",
        sport: "Basketball",
        eventType: "Game",
        opponent: "East Ridge High School",
        date: "2026-12-04",
        time: "7:30 PM",
        location: "Lamoile High Gym",
        status: "Scheduled",
        homeAway: "Home",
        ticketed: true
    }
];


const DEFAULT_STAFF = [
    {
        id: "staff-001",
        name: "Position Open",
        position: "Athletics Director",
        department: "Athletics Administration",
        sport: "All Athletics",
        status: "Position Open",
        email: "",
        responsibilities: "Oversees the entire Lamoile High School athletics program."
    },
    {
        id: "staff-002",
        name: "Position Open",
        position: "Associate Athletics Director",
        department: "Athletics Administration",
        sport: "All Athletics",
        status: "Position Open",
        email: "",
        responsibilities: "Supports the Athletics Director and manages department operations."
    },
    {
        id: "staff-003",
        name: "Position Open",
        position: "Assistant Athletics Director",
        department: "Athletics Administration",
        sport: "All Athletics",
        status: "Position Open",
        email: "",
        responsibilities: "Assists with scheduling, compliance, facilities, and athletic operations."
    },
    {
        id: "staff-004",
        name: "Position Open",
        position: "Head Football Coach",
        department: "Coaching Staff",
        sport: "Football",
        status: "Position Open",
        email: "",
        responsibilities: "Leads the Lamoile Raiders football program."
    },
    {
        id: "staff-005",
        name: "Position Open",
        position: "Head Basketball Coach",
        department: "Coaching Staff",
        sport: "Basketball",
        status: "Position Open",
        email: "",
        responsibilities: "Leads the Lamoile Raiders basketball program."
    },
    {
        id: "staff-006",
        name: "Position Open",
        position: "Head Soccer Coach",
        department: "Coaching Staff",
        sport: "Soccer",
        status: "Position Open",
        email: "",
        responsibilities: "Leads the Lamoile Raiders soccer program."
    },
    {
        id: "staff-007",
        name: "Position Open",
        position: "Head Cheerleading Coach",
        department: "Coaching Staff",
        sport: "Cheerleading",
        status: "Position Open",
        email: "",
        responsibilities: "Leads the Lamoile Raiders cheerleading program."
    },
    {
        id: "staff-008",
        name: "Position Open",
        position: "Head Wrestling Coach",
        department: "Coaching Staff",
        sport: "Wrestling",
        status: "Position Open",
        email: "",
        responsibilities: "Leads the Lamoile Raiders wrestling program."
    }
];


const DEFAULT_FACILITIES = [
    {
        id: "fac-001",
        name: "Lamoile Football Stadium",
        capacity: 5000,
        primaryUse: "Football",
        secondaryUse: "Ceremonies / Community Events",
        status: "Operational",
        condition: "Excellent",
        manager: "Athletics Administration",
        maintenance: "Routine maintenance",
        equipment: "Scoreboard, PA system, field lighting, locker rooms"
    },
    {
        id: "fac-002",
        name: "Lamoile High Gym",
        capacity: 1200,
        primaryUse: "Basketball",
        secondaryUse: "Cheer / School Events",
        status: "Operational",
        condition: "Excellent",
        manager: "Athletics Administration",
        maintenance: "Routine maintenance",
        equipment: "Scoreboard, bleachers, sound system"
    },
    {
        id: "fac-003",
        name: "Lamoile Boxing Arena",
        capacity: 600,
        primaryUse: "Wrestling",
        secondaryUse: "Training",
        status: "Operational",
        condition: "Good",
        manager: "Athletics Administration",
        maintenance: "Routine maintenance",
        equipment: "Wrestling mats, training equipment"
    },
    {
        id: "fac-004",
        name: "Athletic Training Facility",
        capacity: 100,
        primaryUse: "Athletic Training",
        secondaryUse: "Strength & Conditioning",
        status: "Operational",
        condition: "Excellent",
        manager: "Athletics Administration",
        maintenance: "Routine maintenance",
        equipment: "Weight room, treatment stations, training equipment"
    }
];


const DEFAULT_APPLICATIONS = [
    {
        id: "app-001",
        applicant: "Example Applicant",
        email: "applicant@example.com",
        position: "Head Football Coach",
        sport: "Football",
        submitted: "2026-09-01",
        status: "Pending",
        reviewer: "Unassigned",
        experience: "5 years coaching experience",
        qualifications: "Bachelor's degree and coaching certification",
        notes: ""
    }
];


const DEFAULT_DISCIPLINE = [
    {
        id: "case-001",
        student: "Confidential Student",
        team: "Football",
        date: "2026-09-02",
        reportedBy: "Athletics Staff",
        incident: "Confidential disciplinary matter",
        status: "Under Review",
        decision: "Pending",
        action: "Pending Decision",
        startDate: "",
        endDate: "",
        reviewer: "Athletics Administration",
        notes: ""
    }
];


const DEFAULT_NEWS = [
    {
        id: "news-001",
        title: "Welcome to Raiders Athletics",
        author: "Athletics Administration",
        category: "Announcements",
        description:
            "Welcome to the official Lamoile Raiders Athletics information center. Follow the latest schedules, results, announcements, and team news.",
        date: "2026-08-25",
        featured: true,
        status: "Published",
        image: ""
    },
    {
        id: "news-002",
        title: "2026–27 Athletics Season",
        author: "Athletics Administration",
        category: "Athletics Department",
        description:
            "The new athletics year is underway. Student-athletes and coaches are preparing for another competitive season.",
        date: "2026-08-28",
        featured: false,
        status: "Published",
        image: ""
    }
];


const DEFAULT_ANNOUNCEMENTS = [
    {
        id: "ann-001",
        title: "Athletics Registration Open",
        message: "Athletics registration is now available for eligible student-athletes.",
        audience: "All Athletics",
        status: "Published",
        date: "2026-08-30"
    }
];


const DEFAULT_NOTIFICATIONS = [
    {
        id: "notif-001",
        title: "New coaching application",
        message: "A new coaching application requires review.",
        type: "Application",
        read: false,
        date: "2026-09-01"
    },
    {
        id: "notif-002",
        title: "Facility status",
        message: "All athletics facilities are currently operational.",
        type: "Facility",
        read: false,
        date: "2026-09-02"
    }
];


const DEFAULT_AUDIT = [
    {
        id: "audit-001",
        user: "System",
        action: "System Initialized",
        object: "Athletics Portal",
        date: "2026-08-25",
        time: "08:00 AM",
        previous: "N/A",
        newValue: "Initialized"
    }
];


const DEFAULT_SETTINGS = {
    schoolName: "Lamoile High School",
    athleticsName: "Lamoile Raiders Athletics",
    academicYear: "2026–27",
    email: "athletics@lamoilehs.edu",
    phone: "(000) 555-0147"
};


/* =========================================================
   STORAGE
   ========================================================= */

function getStored(key, fallback) {
    try {
        const value = localStorage.getItem(key);

        if (!value) {
            return fallback;
        }

        return JSON.parse(value);
    } catch (error) {
        console.warn(`Unable to load storage key: ${key}`, error);
        return fallback;
    }
}


function setStored(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (error) {
        console.warn(`Unable to save storage key: ${key}`, error);
        return false;
    }
}


function initializeStorage() {
    const defaults = {
        teams: DEFAULT_TEAMS,
        events: DEFAULT_EVENTS,
        staff: DEFAULT_STAFF,
        facilities: DEFAULT_FACILITIES,
        applications: DEFAULT_APPLICATIONS,
        discipline: DEFAULT_DISCIPLINE,
        news: DEFAULT_NEWS,
        announcements: DEFAULT_ANNOUNCEMENTS,
        notifications: DEFAULT_NOTIFICATIONS,
        audit: DEFAULT_AUDIT,
        settings: DEFAULT_SETTINGS,
        tickets: []
    };

    Object.entries(defaults).forEach(([key, value]) => {
        if (localStorage.getItem(LAMOILE.storage[key]) === null) {
            setStored(LAMOILE.storage[key], value);
        }
    });
}


/* =========================================================
   DATA ACCESS
   ========================================================= */

function getTeams() {
    return getStored(LAMOILE.storage.teams, DEFAULT_TEAMS);
}

function saveTeams(data) {
    setStored(LAMOILE.storage.teams, data);
}

function getEvents() {
    return getStored(LAMOILE.storage.events, DEFAULT_EVENTS);
}

function saveEvents(data) {
    setStored(LAMOILE.storage.events, data);
}

function getStaff() {
    return getStored(LAMOILE.storage.staff, DEFAULT_STAFF);
}

function saveStaff(data) {
    setStored(LAMOILE.storage.staff, data);
}

function getFacilities() {
    return getStored(LAMOILE.storage.facilities, DEFAULT_FACILITIES);
}

function saveFacilities(data) {
    setStored(LAMOILE.storage.facilities, data);
}

function getApplications() {
    return getStored(LAMOILE.storage.applications, DEFAULT_APPLICATIONS);
}

function saveApplications(data) {
    setStored(LAMOILE.storage.applications, data);
}

function getDiscipline() {
    return getStored(LAMOILE.storage.discipline, DEFAULT_DISCIPLINE);
}

function saveDiscipline(data) {
    setStored(LAMOILE.storage.discipline, data);
}

function getNews() {
    return getStored(LAMOILE.storage.news, DEFAULT_NEWS);
}

function saveNews(data) {
    setStored(LAMOILE.storage.news, data);
}

function getAnnouncements() {
    return getStored(LAMOILE.storage.announcements, DEFAULT_ANNOUNCEMENTS);
}

function saveAnnouncements(data) {
    setStored(LAMOILE.storage.announcements, data);
}

function getNotifications() {
    return getStored(
        LAMOILE.storage.notifications,
        DEFAULT_NOTIFICATIONS
    );
}

function saveNotifications(data) {
    setStored(LAMOILE.storage.notifications, data);
}

function getAudit() {
    return getStored(LAMOILE.storage.audit, DEFAULT_AUDIT);
}

function saveAudit(data) {
    setStored(LAMOILE.storage.audit, data);
}


/* =========================================================
   HELPERS
   ========================================================= */

function $(selector, parent = document) {
    return parent.querySelector(selector);
}


function $$(selector, parent = document) {
    return [...parent.querySelectorAll(selector)];
}


function escapeHTML(value) {
    if (value === null || value === undefined) {
        return "";
    }

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}


function generateID(prefix = "item") {
    return `${prefix}-${Date.now()}-${Math.random()
        .toString(36)
        .substring(2, 8)}`;
}


function formatDate(dateString) {
    if (!dateString) {
        return "—";
    }

    const date = new Date(`${dateString}T12:00:00`);

    if (Number.isNaN(date.getTime())) {
        return dateString;
    }

    return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
    });
}


function formatLongDate(dateString) {
    if (!dateString) {
        return "—";
    }

    const date = new Date(`${dateString}T12:00:00`);

    if (Number.isNaN(date.getTime())) {
        return dateString;
    }

    return date.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
    });
}


function todayISO() {
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}


function currentTime() {
    return new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit"
    });
}


function getStatusClass(status) {
    return String(status || "")
        .toLowerCase()
        .replaceAll(" ", "-")
        .replaceAll("–", "-");
}


function statusBadge(status) {
    return `
        <span class="status-badge status-${escapeHTML(
            getStatusClass(status)
        )}">
            ${escapeHTML(status || "Unknown")}
        </span>
    `;
}


function debounce(callback, delay = 250) {
    let timer;

    return (...args) => {
        clearTimeout(timer);

        timer = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}


/* =========================================================
   AUDIT LOG
   ========================================================= */

function addAuditLog(action, object, previous = "N/A", newValue = "N/A") {
    const auth = getCurrentUser();

    const logs = getAudit();

    logs.unshift({
        id: generateID("audit"),
        user: auth?.displayName || auth?.username || "Guest",
        action,
        object,
        date: todayISO(),
        time: currentTime(),
        previous,
        newValue
    });

    saveAudit(logs.slice(0, 500));
}


/* =========================================================
   TOAST
   ========================================================= */

function showToast(message, type = "success") {
    let container = $(".toast-container");

    if (!container) {
        container = document.createElement("div");
        container.className = "toast-container";
        document.body.appendChild(container);
    }

    const toast = document.createElement("div");

    toast.className = `toast toast-${type}`;

    toast.innerHTML = `
        <div class="toast-icon">
            ${
                type === "success"
                    ? "✓"
                    : type === "error"
                    ? "!"
  
