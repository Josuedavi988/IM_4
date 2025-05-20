export default function StatusBar() {
  return (
    <div className="flex justify-between items-center p-1">
      <div className="text-sm">9:41</div>
      <div className="flex items-center gap-1">
        <div className="h-3 w-3">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3 16.5L12 7.5L21 16.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="h-3 w-3">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.5 12.5A3.5 3.5 0 0 1 12 9a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5 3.5 3.5 0 0 1-3.5-3.5z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path d="M16.5 7.5a7 7 0 0 1 0 10M7.5 7.5a7 7 0 0 0 0 10" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        <div className="h-3 w-6 relative">
          <div className="absolute inset-0 border border-current rounded-sm"></div>
          <div className="absolute inset-y-0.5 left-0.5 right-1 bg-current rounded-sm"></div>
        </div>
      </div>
    </div>
  )
}
