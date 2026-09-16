interface CircuitDividerProps {
  className?: string
}

export default function CircuitDivider({ className = '' }: CircuitDividerProps) {
  return <div className={`circuit-divider ${className}`} aria-hidden="true" />
}
