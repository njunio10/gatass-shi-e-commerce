"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  product: {
    id?: number
    name: string
    price: string
    category: string
    image: string
    sizes?: string[]
    colors?: string[]
  }
  showQuickBuy?: boolean
}

export function ProductCard({ product, showQuickBuy = false }: ProductCardProps) {
  const defaultSizes = ["P", "M", "G", "GG"]
  const defaultColors = ["Preto", "Azul", "Bege"]

  const sizes = product.sizes || defaultSizes
  const colors = product.colors || defaultColors
  const priceNumber = Number.parseFloat(product.price.replace("R$ ", "").replace(",", "."))

  return (
    <Card className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
      <div className="relative overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={300}
          height={400}
          className="w-full h-60 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge className="rounded-full text-xs" style={{ backgroundColor: '#F4E6E6', color: '#8B5A5A', border: '1px solid #8B5A5A' }}>{product.category}</Badge>
        </div>
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button size="sm" variant="ghost" className="bg-white/90 hover:bg-white rounded-full w-8 h-8 p-0">
            <Heart className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <CardContent className="p-4 sm:p-6">
        <h4 className="font-semibold text-sm sm:text-base lg:text-lg text-black mb-2 line-clamp-2 leading-tight">
          {product.name}
        </h4>
        <div className="flex items-center justify-between mb-3">
          <span className="text-lg sm:text-xl lg:text-2xl font-bold text-black">{product.price}</span>
        </div>
        <div className="flex flex-wrap gap-1 mb-3">
          {sizes.map((size) => (
            <Badge key={size} variant="outline" className="text-xs" style={{ borderColor: '#8B5A5A', color: '#8B5A5A' }}>
              {size}
            </Badge>
          ))}
        </div>

        {showQuickBuy ? (
          <div className="space-y-2">
            <Link href={product.id ? `/produtos/${product.id}` : "#"}>
              <Button
                size="sm"
                className="w-full bg-black text-white hover:bg-gray-800 rounded-full text-xs sm:text-sm h-9 sm:h-10"
              >
                Ir para o Produto
              </Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-2">
            <Link href={product.id ? `/produtos/${product.id}` : "#"}>
              <Button
                size="sm"
                className="w-full bg-black text-white hover:bg-gray-800 rounded-full text-xs sm:text-sm h-9 sm:h-10"
              >
                Ver Detalhes
              </Button>
            </Link>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
