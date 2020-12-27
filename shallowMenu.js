const shallowMenu = [
  {
    title: "Dashboard",
    link: "/dashboard",
    children: [
      {
        title: "Tool",
        link: "/dashboard/tool",
      },
      {
        title: "Reports",
        link: "/dashboard/reports",
      },
      {
        title: "Analytics",
        link: "/dashboard/analytics",
      },
      {
        title: "Code Blocks",
        link: "/dashboard/code-blocks",
      },
    ],
  },
  {
    title: "Sales",
    link: "/sales",
    children: [
      {
        title: "New Sales",
        link: "/sales/new-sales",
      },
      {
        title: "Expired Sales",
        link: "/sales/expired-sales",
      },
      {
        title: "Sales Reports",
        link: "/sales/sales-reports",
      },
      {
        title: "Deliveries",
        link: "/sales/deliveries",
      },
    ],
  },
  {
    title: "Messages",
    link: "/messages",
    children: [
      {
        title: "Inbox",
        link: "/messages/inbox",
      },
      {
        title: "Outbox",
        link: "/messages/outbox",
      },
      {
        title: "Sent",
        link: "/messages/sent",
      },
      {
        title: "Archived",
        link: "/messages/archived",
      },
    ],
  },
  {
    title: "Users",
    link: "/users",
    children: [
      {
        title: "New User",
        link: "/users/new-user",
      },
      {
        title: "User Groups",
        link: "/users/user-groups",
      },
      {
        title: "Permissions",
        link: "/users/permissions",
      },
      {
        title: "passwords",
        link: "/users/passwords",
      },
    ],
  },
  {
    title: "Settings",
    link: "/settings",
    children: [
      {
        title: "Databases",
        link: "/settings/databases",
      },
      {
        title: "Design",
        link: "/settings/design",
      },
      {
        title: "Change User",
        link: "/settings/change-user",
      },
      {
        title: "Log Out",
        link: "/settings/log-out",
      },
    ],
  },
]

const renderShallowMenuByString = (array) => {
  const menu = document.getElementById('shallow-menu')

  let html = '<ul>'

  array.forEach(item => {
    html += `
      <li>
        <span class="icon"></span>
        <a href="${item.link}">${item.title}</a>
        <span class="arrow" onclick="toggleMenu(this)"></span>
    `

    if (Array.isArray(item.children)) {
      html += `<ul>`
      item.children.forEach(child => {
        html += `
          <li>
            <a href="${child.link}">${child.title}</a>
          </li>
        `
      })
      html += `</ul>`
    }

    html += '</li>'
  })

  html += '</ul>'

  menu.innerHTML = html
}

// renderShallowMenuByString(shallowMenu)

const toggleMenu = span => {
  const li = span.parentNode
  const ul = li.querySelector('ul')

  if (ul) {
    const isDisplay = ul.style.display === 'block'
    if (isDisplay) {
      ul.style.display = 'none'
    } else {
      ul.style.display = 'block'
    }
  }
}
