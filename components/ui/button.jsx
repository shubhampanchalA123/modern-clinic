export function Button({ children, className = '', variant = 'default', ...props }) {
  const base = 'px-4 py-2 rounded-md font-medium'
  const styles = variant === 'ghost' ? 'bg-transparent border' : 'bg-emerald-600 text-white'
  return <button className={`${base} ${styles} ${className}`} {...props}>{children}</button>
}
