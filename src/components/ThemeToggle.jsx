export default function ThemeToggle({ theme, setTheme }) {
  return (
    <button
      className="theme-toggle"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle color theme"
    >
      {theme === 'dark' ? '☾ dark' : '☀ light'}
    </button>
  )
}
