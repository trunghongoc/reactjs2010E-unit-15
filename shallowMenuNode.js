const shallowMenuNode = [
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
];

// const toggleMenu = span => {
//   const li = span.parentNode
//   const ul = li.querySelector('ul')

//   if (ul) {
//     const isDisplay = ul.style.display === 'block'
//     if (isDisplay) {
//       ul.style.display = 'none'
//     } else {
//       ul.style.display = 'block'
//     }
//   }
// }

const renderShallowMenuByNode = array => {
  const menu = document.getElementById('shallow-menu-node')

  const ulParent = document.createElement('ul')
  array.forEach(item => {
    const li = document.createElement('li')

    const a = document.createElement('a')
    a.setAttribute('href', item.link)
    a.innerText = item.title

    const span = document.createElement('span')
    span.setAttribute('class', 'arrow')
    span.addEventListener('click', () => {
      toggleMenu(span)
    })

    li.appendChild(a)
    li.appendChild(span)

    if (Array.isArray(item.children)) {
      const ulChild = document.createElement('ul')
      item.children.forEach(child => {
        const liChild = document.createElement('li')

        const aChild = document.createElement('a')
        aChild.setAttribute('href', child.link)
        aChild.innerText = child.title

        liChild.appendChild(aChild)
        ulChild.appendChild(liChild)
      })

      li.appendChild(ulChild)
    }

    ulParent.appendChild(li)
  })

  menu.appendChild(ulParent)
}

// renderShallowMenuByNode(shallowMenuNode)
