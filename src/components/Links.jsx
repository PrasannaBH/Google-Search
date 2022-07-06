import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
    { url: '/search', text: '🔎 All' },
    { url: '/news', text: '📰 News' },
    { url: '/image', text: '📸 Images' },
    { url: '/video', text: '📺 Videos' },
];

export const Links = () => {
  return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
        {links.map(({ url, text }) => (
        // <NavLink to={url} className="m-2 mb-2" activeClassName="text-blue-700 border-b-10 dark:text-blue-300 border-blue-700 pb-2">{text}</NavLink>
        <NavLink to={url} className={({ isActive }) => "m-2 mb-2" + (isActive ? "text-blue-700 border-b-10 underline underline-offset-8 decoration-sky-600 dark:text-blue-300 border-blue-700 pb-2" : "")}>{text}</NavLink>
        ))}
    </div>
  )
}
