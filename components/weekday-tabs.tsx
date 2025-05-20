"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface WeekdayTabsProps {
  activeDay?: number
  onDayChange?: (day: number) => void
}

export default function WeekdayTabs({ activeDay = 2, onDayChange }: WeekdayTabsProps) {
  const [selectedDay, setSelectedDay] = useState(activeDay)

  const days = [
    { short: "Mon", num: 20 },
    { short: "Tues", num: 21 },
    { short: "Wed", num: 22 },
    { short: "Thu", num: 23 },
    { short: "Fri", num: 24 },
    { short: "Sat", num: 25 },
  ]

  const handleDayClick = (index: number) => {
    setSelectedDay(index)
    if (onDayChange) {
      onDayChange(index)
    }
  }

  return (
    <div className="weekday-tabs">
      {days.map((day, index) => (
        <button
          key={index}
          className={cn("weekday-tab", selectedDay === index && "active")}
          onClick={() => handleDayClick(index)}
        >
          <span className="text-sm">{day.short}</span>
          <span className="text-xl">{day.num}</span>
        </button>
      ))}
    </div>
  )
}
