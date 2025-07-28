import { Toaster as Sonner } from "sonner"
import { useTheme } from "../ThemeContext"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { isDarkMode } = useTheme()

  return (
    <Sonner
      theme={isDarkMode ? "dark" : "light"}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-white dark:group-[.toaster]:bg-gray-800 group-[.toaster]:text-gray-900 dark:group-[.toaster]:text-white group-[.toaster]:border-gray-200 dark:group-[.toaster]:border-gray-700 group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-gray-600 dark:group-[.toast]:text-gray-300",
          actionButton:
            "group-[.toast]:bg-blue-600 group-[.toast]:text-white",
          cancelButton:
            "group-[.toast]:bg-gray-100 dark:group-[.toast]:bg-gray-700 group-[.toast]:text-gray-600 dark:group-[.toast]:text-gray-300",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }