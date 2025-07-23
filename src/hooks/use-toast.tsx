// "use client"

// import React from "react"

// type Toast = {
//   id: number
//   title: string
//   description?: string
//   open: boolean
// }

// const TOAST_REMOVE_DELAY = 3000 // 3 seconds

// let toastCount = 0

// export function useToast() {
//   const [toasts, setToasts] = React.useState<Toast[]>([])

//   function toast({ title, description }: { title: string; description?: string }) {
//     const id = ++toastCount
//     const newToast: Toast = { id, title, description, open: true }
//     setToasts((prev) => [newToast, ...prev])

//     setTimeout(() => {
//       setToasts((prev) =>
//         prev.map((t) => (t.id === id ? { ...t, open: false } : t))
//       )
//     }, TOAST_REMOVE_DELAY)

//     setTimeout(() => {
//       setToasts((prev) => prev.filter((t) => t.id !== id))
//     }, TOAST_REMOVE_DELAY + 300) // for animation

//     return id
//   }

//   function dismiss(id: number) {
//     setToasts((prev) =>
//       prev.map((t) => (t.id === id ? { ...t, open: false } : t))
//     )
//     setTimeout(() => {
//       setToasts((prev) => prev.filter((t) => t.id !== id))
//     }, 300)
//   }

//   function ToastContainer() {
//     return (
//       <div
//         style={{
//           position: "fixed",
//           top: 20,
//           right: 20,
//           display: "flex",
//           flexDirection: "column",
//           gap: 10,
//           zIndex: 9999,
//         }}
//       >
//         {toasts.map((toast) =>
//           toast.open ? (
//             <div
//               key={toast.id}
//               style={{
//                 backgroundColor: "black",
//                 color: "white",
//                 padding: "10px 20px",
//                 borderRadius: 6,
//                 boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
//                 cursor: "pointer",
//                 minWidth: 200,
//                 transition: "opacity 0.3s ease",
//               }}
//               onClick={() => dismiss(toast.id)}
//             >
//               <strong>{toast.title}</strong>
//               {toast.description && (
//                 <div style={{ fontSize: 12 }}>{toast.description}</div>
//               )}
//             </div>
//           ) : null
//         )}
//       </div>
//     )
//   }

//   return { toast, dismiss, ToastContainer }
// }
