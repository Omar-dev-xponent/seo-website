import React from "react";
import { parseISO, format } from "date-fns";

interface DateProps {
  dateString: string;
}

export default function Date({ dateString }: DateProps) {
  const date = parseISO(dateString);
  return (
    <time
      className="text-xs font-display text-typography-50"
      dateTime={dateString}
    >
      {format(date, "LLLL	d, yyyy")}
    </time>
  );
}
