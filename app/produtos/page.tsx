"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Filter, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { CartModal } from "@/components/cart-modal"

const produtos = [
  {
    id: 1,
    name: "Calça Flare",
    price: 99.9,
    category: "Calças",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Preto", "Marinho", "Marrom, Vinho, Ferrugem, Rosa, Verde, Cinza, Marçala, Bege"],
    image: "flareROSA.jpg",
  },
  {
    id: 2,
    name: "Calça Slim",
    price: 99.9,
    category: "Calças",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Preto", "Marinho", "Marrom, Vinho, Ferrugem, Rosa, Verde, Cinza, Marçala, Bege"],
    image: "slimPreto.jpg",
  },
  {
    id: 4,
    name: "Short",
    price: 49.9,
    category: "Shorts",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Preto", "Marinho", "Marrom, Vinho, Ferrugem, Rosa, Verde, Cinza, Marçala, Bege"],
    image: "shortBEGE.jpg",
  },
  {
    id: 5,
    name: "Bermuda",
    price: 49.9,
    category: "Bermudas",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Preto", "Marinho", "Marrom, Vinho, Ferrugem, Rosa, Verde, Cinza, Marçala, Bege"],
    image: "bermudaVINHO.jpg",
  },
  {
    id: 3,
    name: "Blazer",
    price: 99.9,
    category: "Blazers",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Preto", "Marinho", "Marrom, Vinho, Ferrugem, Rosa, Verde, Cinza, Marçala, Bege"],
    image: "blazePRETO.jpg",
  },
  {
    id: 6,
    name: "Max Colete",
    price: 99.9,
    category: "Coletes",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Preto", "Marinho", "Marrom, Vinho, Ferrugem, Rosa, Verde, Cinza, Marçala, Bege"],
    image: "coleteMARINHO.jpg",
  },
]

export default function ProdutosPage() {
  const [filteredProducts, setFilteredProducts] = useState(produtos)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedSize, setSelectedSize] = useState("all")
  const [selectedColor, setSelectedColor] = useState("all")
  const [priceRange, setPriceRange] = useState([0, 300])

  const categories = ["Calça flare", "Calça slim", "Shorts", "Bermuda", "Blazers", "Colete"]
  const sizes = ["P", "M", "G", "GG"]
  const colors = ["Preto", "Azul", "Bege", "Branco", "Cinza", "Marrom"]

  const applyFilters = () => {
    let filtered = produtos

    if (selectedCategory !== "all") {
      filtered = filtered.filter((product) => product.category === selectedCategory)
    }

    if (selectedSize !== "all") {
      filtered = filtered.filter((product) => product.sizes.includes(selectedSize))
    }

    if (selectedColor !== "all") {
      filtered = filtered.filter((product) => product.colors.includes(selectedColor))
    }

    filtered = filtered.filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1])

    setFilteredProducts(filtered)
  }

  useEffect(() => {
    applyFilters()
  }, [selectedCategory, selectedSize, selectedColor, priceRange])

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F4E6E6' }}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-black rounded-full flex items-center justify-center border border-black">
                  <Image
                    src="/logogataedit.png"
                    alt="Logo"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-black">Gatas-Shi</h1>
              </Link>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <CartModal />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Filtros */}
          <div className="lg:w-1/4">
            <Card className="p-4 sm:p-6 rounded-2xl border-0 shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
              <div className="flex items-center mb-4 sm:mb-6">
                <Filter className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <h3 className="text-base sm:text-lg font-semibold">Filtros</h3>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Categoria</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="rounded-full h-10 sm:h-11 border-gray-200" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                      <SelectValue placeholder="Todas as categorias" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas as categorias</SelectItem>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Tamanho</label>
                  <Select value={selectedSize} onValueChange={setSelectedSize}>
                    <SelectTrigger className="rounded-full h-10 sm:h-11 border-gray-200" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                      <SelectValue placeholder="Todos os tamanhos" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos os tamanhos</SelectItem>
                      {sizes.map((size) => (
                        <SelectItem key={size} value={size}>
                          {size}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Cor</label>
                  <Select value={selectedColor} onValueChange={setSelectedColor}>
                    <SelectTrigger className="rounded-full h-10 sm:h-11 border-gray-200" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                      <SelectValue placeholder="Todas as cores" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas as cores</SelectItem>
                      {colors.map((color) => (
                        <SelectItem key={color} value={color}>
                          {color}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Preço: R$ {priceRange[0]} - R$ {priceRange[1]}
                  </label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={300}
                    min={0}
                    step={10}
                    className="mt-2"
                  />
                </div>

                <Button
                  onClick={applyFilters}
                  className="w-full bg-black text-white hover:bg-gray-800 rounded-full h-10 sm:h-11 text-sm sm:text-base"
                >
                  Aplicar Filtros
                </Button>
              </div>
            </Card>
          </div>

          {/* Produtos */}
          <div className="lg:w-3/4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-black">Nossos Produtos</h2>
              <p className="text-sm sm:text-base text-gray-600">{filteredProducts.length} produtos encontrados</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
                >
                  <Link href={`/produtos/${product.id}`}>
                    <div className="relative overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={300}
                        height={400}
                        className="w-full h-74 sm:h-64 lg:h-80 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                        <Badge className="rounded-full text-xs" style={{ backgroundColor: '#F4E6E6', color: '#8B5A5A', border: '1px solid #8B5A5A' }}>{product.category}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-4 sm:p-6">
                      <h4 className="font-semibold text-sm sm:text-base lg:text-lg text-black mb-2 line-clamp-2">
                        {product.name}
                      </h4>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-lg sm:text-xl lg:text-2xl font-bold text-black">
                          R$ {product.price.toFixed(2).replace(".", ",")}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {product.sizes.map((size) => (
                          <Badge key={size} variant="outline" className="text-xs" style={{ borderColor: '#8B5A5A', color: '#8B5A5A' }}>
                            {size}
                          </Badge>
                        ))}
                      </div>
                      <Button
                        size="sm"
                        className="w-full bg-black text-white hover:bg-gray-800 rounded-full text-xs sm:text-sm h-9 sm:h-10"
                      >
                        Ver Detalhes
                      </Button>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}