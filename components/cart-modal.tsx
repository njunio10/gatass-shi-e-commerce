"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ShoppingBag, Plus, Minus, Trash2, X } from "lucide-react"
import Image from "next/image"
import { useCart } from "@/contexts/cart-context"

export function CartModal() {
  const { items, updateQuantity, removeItem, getTotalPrice, getTotalItems, clearCart } = useCart()
  const [isOpen, setIsOpen] = useState(false)

  const handleFinalizePurchase = () => {
    if (items.length === 0) {
      alert("Seu carrinho está vazio!")
      return
    }

    // Criar mensagem para WhatsApp sem emojis, formato limpo e informando origem do site
    let message = "Olá! Gostaria de finalizar minha compra:\n\n"

    items.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*\n`
      message += `   Tamanho: ${item.size}\n`
      message += `   Cor: ${item.color}\n`
      message += `   Quantidade: ${item.quantity}\n`
      message += `   Valor: R$ ${(item.price * item.quantity).toFixed(2).replace(".", ",")}\n\n`
    })

    message += `*TOTAL: R$ ${getTotalPrice().toFixed(2).replace(".", ",")}*\n\n`
    message += "Mensagem enviada a partir do site Gatas-Shi."

    const whatsappUrl = `https://wa.me/5562996798457?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")

    // Limpar carrinho após enviar
    clearCart()
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="sm" className="bg-black text-white hover:bg-gray-800 rounded-full relative">
          <ShoppingBag className="w-4 h-4 mr-2" />
          Carrinho
          {getTotalItems() > 0 && (
            <Badge className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 p-0 flex items-center justify-center text-xs">
              {getTotalItems()}
            </Badge>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto mx-2 sm:mx-4 w-[calc(100vw-1rem)] sm:w-full">
        <DialogHeader>
          <DialogTitle className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-lg sm:text-xl">
            <span>Meu Carrinho ({getTotalItems()} itens)</span>
            {items.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearCart}
                className="text-red-500 hover:text-red-700 self-start sm:self-auto"
              >
                <Trash2 className="w-4 h-4 mr-1" />
                <span className="text-sm">Limpar</span>
              </Button>
            )}
          </DialogTitle>
        </DialogHeader>

        {items.length === 0 ? (
          <div className="text-center py-8">
            <ShoppingBag className="w-16 h-16 mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500 text-lg">Seu carrinho está vazio</p>
            <p className="text-gray-400 text-sm">Adicione produtos para começar suas compras</p>
          </div>
        ) : (
          <div className="space-y-4">
            {items.map((item, index) => (
              <Card key={`${item.id}-${item.size}-${item.color}`} className="rounded-xl">
                <CardContent className="p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                    <div className="flex items-center space-x-3 flex-1">
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-black text-sm sm:text-base line-clamp-2">{item.name}</h4>
                        <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {item.size}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {item.color}
                          </Badge>
                        </div>
                        <p className="font-bold text-black mt-2 text-sm sm:text-base">
                          R$ {(item.price * item.quantity).toFixed(2).replace(".", ",")}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end space-x-4">
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity - 1)}
                          className="rounded-full w-8 h-8 p-0"
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="w-8 text-center font-semibold text-sm">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
                          className="rounded-full w-8 h-8 p-0"
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.id, item.size, item.color)}
                        className="text-red-500 hover:text-red-700 rounded-full w-8 h-8 p-0"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="border-t pt-4">
              <div className="flex items-center justify-between text-xl font-bold mb-4">
                <span>Total:</span>
                <span>R$ {getTotalPrice().toFixed(2).replace(".", ",")}</span>
              </div>

              <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-xl mb-4">
                <p className="text-sm text-center text-gray-700">
                  🔥 <strong>Promoção exclusiva para seguidores do Instagram!</strong>
                </p>
                <p className="text-xs text-center text-gray-600 mt-1">
                  Fique de olho nos stories para descontos especiais!
                </p>
              </div>

              <Button
                onClick={handleFinalizePurchase}
                size="lg"
                className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full py-3 text-base sm:text-lg"
              >
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span className="hidden sm:inline">Finalizar Compra via WhatsApp</span>
                <span className="sm:hidden">Finalizar via WhatsApp</span>
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
