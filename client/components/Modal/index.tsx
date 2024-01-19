import cn from "../../util/cn"

type Props = React.PropsWithChildren<{
  onClose: () => void
} & React.HTMLAttributes<HTMLDivElement>>

function Modal({ children, className, onClose, ...props }: Props) {
  return (
    <aside className={cn("fixed top-0 left-0 z-[100] w-screen h-screen bg-white", className)} {...props}>
      <button
        aria-label="Close modal"
        className="absolute z-[90] top-5 left-5 w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 shadow-xl"
        onClick={onClose}
      >
        <img className="w-5 h-5 object-contain" src="/close-dialog.svg" alt="Close" />
      </button>
      {children}
    </aside>
  )
}

export default Modal