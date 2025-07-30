//Developed by Mr N~G~K
import React, { useState, Children, cloneElement } from "react"

export function Tabs({ defaultValue, children, className = "" }) {
  const [activeTab, setActiveTab] = useState(defaultValue)

  return (
    <div className={className}>
      {Children.map(children, (child) =>
        React.isValidElement(child)
          ? cloneElement(child, { activeTab, setActiveTab })
          : child
      )}
    </div>
  )
}

export function TabsList({ children, className = "" }) {
  return (
    <div className={`flex border-b border-gray-300 ${className}`}>
      {children}
    </div>
  )
}

export function TabsTrigger({ value, activeTab, setActiveTab, className = "", children }) {
  const isActive = activeTab === value

  return (
    <button
      type="button"
      onClick={() => setActiveTab(value)}
      className={`
        py-2 px-4 text-sm border-b-2 font-medium focus:outline-none transition
        ${isActive
          ? "border-green-600 text-green-700 bg-gray-100"
          : "border-transparent text-gray-500 hover:text-green-700"}
        ${className}
      `}
    >
      {children}
    </button>
  )
}

export function TabsContent({ value, activeTab, children, className = "" }) {
  return activeTab === value ? (
    <div className={`py-4 ${className}`}>{children}</div>
  ) : null
}
