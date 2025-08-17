// import { strict } from "assert"
// import { type } from './../provider/Provider';
// import { CartItem } from '@/components/shared/product/cartSlice';
// import { createContext, useContext, useEffect, useMemo, useReducer, useRef } from "react";

// type cartItem = {
//     id:string
//     title:string
//     price:string
//     image?: string
//     qty:number
// }

// type cartState = {
//     items:cartItem[]

// }

// type Action = 
// {type:"ADD"; payload:Omit<cartItem, "Qty"> & {qty?: number}}
// {type:"INCREMENT"; payload: {id:string}}
// {type:"DECREMENT"; payload: {id:string}}
// {type:"REMOVE"; payload: {id:string}}
// {type:"CLEAR"}


// const initialState = CartState = {items: []}
// const STORAGE_KEY = "cart_v1" 
//   function cartReducer(state:cartState, action:Action) : CartState {
//     switch(action.type){
//         case "ADD" : {
//          const {id, qty = 1 , ...rest} = action.payload
//          const existing = state.items.find((it)=> it.id === id)
//          if(existing){
//            return {
//             items: state.items.map((it)=> 
//             it.id === id? {...it , qty: it.qty + qty} : it 
//         )
//            }
//          }

//          return {items: [...state.items, {id,qty,  ...rest}]}
//         }
//         case "INCREMENT" : 
//         return {
//             items: state.items.map((it)=>
//             it.id === action.payload.id? {...it,qty: it.qty + 1} : it
//         )
//             }
//         case "DECREMENT" : 
//         return {
//             items: state.items.map((it)=>
//             it.id === action.payload.id? {...it,qty:Math.max(1, it.qty - 1) } : it
            
//         )
//         .filter((it)=> it.qty > 0)
//             }

//                case "REMOVE":
//       return { items: state.items.filter((it) => it.id !== action.payload.id) }
//     case "CLEAR":
//       return { items: [] }
//     default:
//       return state
//         }
//     }

//     type CartContextType = {
//   items: cartItem[]
//   totalQty: number
//   totalPrice: number
//   addToCart: (item: Omit<CartItem, "qty">, qty?: number) => void
//   increment: (id: string) => void
//   decrement: (id: string) => void
//   remove: (id: string) => void
//   clear: () => void
// }

// const CartContext = createContext<CartContextType | null>(null)

// export function CartProvider({ children }: { children: React.ReactNode }) {
//   const hydrated = useRef(false)

//   const [state, dispatch] = useReducer(cartReducer, initialState, (init) => {
//     if (typeof window === "undefined") return init
//     try {
//       const raw = localStorage.getItem(STORAGE_KEY)
//       return raw ? (JSON.parse(raw) as cartState) : init
//     } catch {
//       return init
//     }
//   })

//   // localStorage persist
//   useEffect(() => {
//     if (!hydrated.current) {
//       hydrated.current = true
//       return
//     }
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
//   }, [state])

//   const value = useMemo(() => {
//     const totalQty = state.items.reduce((sum, it) => sum + it.qty, 0)
//     const totalPrice = state.items.reduce((sum, it) => sum + it.price * it.qty, 0)

//     return {
//       items: state.items,
//       totalQty,
//       totalPrice,
//       addToCart: (item: Omit<CartItem, "qty">, qty = 1) =>
//         dispatch({ type: "ADD", payload: { ...item, qty } }),
//       increment: (id: string) => dispatch({ type: "INCREMENT", payload: { id } }),
//       decrement: (id: string) => dispatch({ type: "DECREMENT", payload: { id } }),
//       remove: (id: string) => dispatch({ type: "REMOVE", payload: { id } }),
//       clear: () => dispatch({ type: "CLEAR" }),
//     }
//   }, [state])

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>
// }

// // 👉 useCart Hook
// export function useCart() {
//   const ctx = useContext(CartContext)
//   if (!ctx) throw new Error("useCart must be used inside <CartProvider>")
//   return ctx
// }
  