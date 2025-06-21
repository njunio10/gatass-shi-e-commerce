"use client"

import { useEffect, useState } from "react"

interface CartItem {
  id: number
  name: string
  price: number
  size: string
  color: string
  quantity: number
  image: string
}

export function useCartStorage() {
  const [items, setItems] = useState<CartItem[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  // Carregar do localStorage apenas no cliente
  useEffect(() => {
    const savedCart = localStorage.getItem("gatashi-cart")
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart))
      } catch (error) {
        console.error("Erro ao carregar carrinho:", error)
      }
    }
    setIsLoaded(true)
  }, [])

  // Salvar no localStorage sempre que items mudar
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("gatashi-cart", JSON.stringify(items))
    }
  }, [items, isLoaded])

  return { items, setItems, isLoaded }
}
