const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskCount: { active: 1, completed: 1, failed: 1 },
    tasks: [
      {
        active: true,
        new_task: true,
        completed: false,
        failed: false,
        title: "Update dashboard UI",
        description: "Improve the dashboard layout and styling.",
        date: "2025-07-07",
        category: "UI/UX"
      },
      {
        active: false,
        new_task: false,
        completed: true,
        failed: false,
        title: "Fix login bug",
        description: "Resolve issue with incorrect login redirect.",
        date: "2025-07-05",
        category: "Bug Fix"
      },
      {
        active: false,
        new_task: false,
        completed: false,
        failed: true,
        title: "Write API tests",
        description: "Create automated tests for user authentication APIs.",
        date: "2025-07-06",
        category: "Testing"
      }
    ]
  },
  {
    id: 2,
    firstName: "Ananya",
    email: "employee2@example.com",
    password: "123",
    taskCount: { active: 1, completed: 1, failed: 1 },
    tasks: [
      {
        active: true,
        new_task: true,
        completed: false,
        failed: false,
        title: "Create landing page",
        description: "Design and build the marketing landing page.",
        date: "2025-07-07",
        category: "Frontend"
      },
      {
        active: false,
        new_task: false,
        completed: true,
        failed: false,
        title: "Fix navbar issue",
        description: "Fix overlapping navbar links on mobile view.",
        date: "2025-07-04",
        category: "Bug Fix"
      },
      {
        active: false,
        new_task: false,
        completed: false,
        failed: true,
        title: "Deploy test server",
        description: "Setup a temporary server for testing builds.",
        date: "2025-07-03",
        category: "DevOps"
      }
    ]
  },
  {
    id: 3,
    firstName: "Rohan",
    email: "employee3@example.com",
    password: "123",
    taskCount: { active: 1, completed: 1, failed: 0 },
    tasks: [
      {
        active: true,
        new_task: true,
        completed: false,
        failed: false,
        title: "Write documentation",
        description: "Document the backend API endpoints.",
        date: "2025-07-07",
        category: "Documentation"
      },
      {
        active: false,
        new_task: false,
        completed: true,
        failed: false,
        title: "Setup CI/CD",
        description: "Implement GitHub Actions for auto-deploy.",
        date: "2025-07-01",
        category: "DevOps"
      }
    ]
  },
  {
    id: 4,
    firstName: "Ishita",
    email: "employee4@example.com",
    password: "123",
    taskCount: { active: 1, completed: 1, failed: 1 },
    tasks: [
      {
        active: true,
        new_task: true,
        completed: false,
        failed: false,
        title: "Add search functionality",
        description: "Implement search on the user list page.",
        date: "2025-07-07",
        category: "Frontend"
      },
      {
        active: false,
        new_task: false,
        completed: false,
        failed: true,
        title: "Fix pagination bug",
        description: "Page numbers not updating correctly.",
        date: "2025-07-02",
        category: "Bug Fix"
      },
      {
        active: false,
        new_task: false,
        completed: true,
        failed: false,
        title: "Optimize image loading",
        description: "Use lazy loading for gallery images.",
        date: "2025-07-03",
        category: "Performance"
      }
    ]
  },
  {
    id: 5,
    firstName: "Vivaan",
    email: "employee5@example.com",
    password: "123",
    taskCount: { active: 1, completed: 1, failed: 0 },
    tasks: [
      {
        active: true,
        new_task: true,
        completed: false,
        failed: false,
        title: "Improve SEO",
        description: "Add meta tags and alt attributes.",
        date: "2025-07-07",
        category: "Marketing"
      },
      {
        active: false,
        new_task: false,
        completed: true,
        failed: false,
        title: "Fix footer links",
        description: "Broken links in site footer.",
        date: "2025-07-02",
        category: "Bug Fix"
      }
    ]
  },
  {
    id: 6,
    firstName: "Meera",
    email: "employee6@example.com",
    password: "123",
    taskCount: { active: 1, completed: 1, failed: 0 },
    tasks: [
      {
        active: true,
        new_task: true,
        completed: false,
        failed: false,
        title: "Add dark mode",
        description: "Add dark mode toggle for the site.",
        date: "2025-07-07",
        category: "UI/UX"
      },
      {
        active: false,
        new_task: false,
        completed: true,
        failed: false,
        title: "Refactor CSS",
        description: "Simplify and clean up stylesheets.",
        date: "2025-07-06",
        category: "Code Cleanup"
      }
    ]
  },
  {
    id: 7,
    firstName: "Aditya",
    email: "employee7@example.com",
    password: "123",
    taskCount: { active: 1, completed: 1, failed: 1 },
    tasks: [
      {
        active: true,
        new_task: true,
        completed: false,
        failed: false,
        title: "Setup Firebase",
        description: "Integrate Firebase auth and Firestore.",
        date: "2025-07-07",
        category: "Backend"
      },
      {
        active: false,
        new_task: false,
        completed: false,
        failed: true,
        title: "Migrate database",
        description: "Move data from MySQL to PostgreSQL.",
        date: "2025-07-01",
        category: "Database"
      },
      {
        active: false,
        new_task: false,
        completed: true,
        failed: false,
        title: "Configure CORS",
        description: "Allow requests from frontend domain.",
        date: "2025-07-03",
        category: "Security"
      }
    ]
  }
];


const admin = [{
    "id": 100,
    "email": "admin@example.com",
    "password": "123"
  }]

export const setLocalStorage = ()=>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}  

export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));

    return {employees, admin}
}
 export default getLocalStorage