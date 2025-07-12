"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ShoppingBag, ArrowLeft, Plus, Minus, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useCart } from "@/contexts/cart-context"
import { CartModal } from "@/components/cart-modal"

// Simulando dados do produto (em uma aplicação real, viria de uma API)
const produtos = [
  {
    id: 1,
    name: "Calça Flare",
    price: 99.9,
    category: "Calça flare",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Preto", "Marinho", "Marrom", "Vinho", "Ferrugem", "Rosa", "Verde", "Cinza", "Marçala", "Bege"],
    images: [
      "/flareRosa.jpg",
      "/flareFerrugem.jpg",
      "/flareMarroN.jpg",
      "/flareVINHO.jpg",
      "/flareMarinho.jpg",
      "/flarePreto.jpg",
    ],
    description:
      "Calça flare premium confeccionada em tecido de alta qualidade. Perfeita para ocasiões especiais e uso profissional. Modelagem que valoriza a silhueta feminina com elegância e sofisticação.",
    details: [
    "Tecido: 93% Poliéster, 7% Elastano",
    "Modelagem: Montaria",
    "Cintura: Alta com cós largo",
    "Bolsos: Faca funcionais",
    "Costura: Lateral com reforço",
    ],
  },
  {
    id: 2,
    name: "Calça Slim",
    price: 99.9,
    category: "Calça slim",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Preto", "Marinho", "Marrom", "Vinho", "Ferrugem", "Rosa", "Verde", "Cinza", "Marçala", "Bege"],
    images: [
      "/slimPreto.jpg",
      "/slimMarinho.jpg",
      "/slimMarcala.jpg",
      "/slimVinho.jpg",
      "/slimFerrugem.jpg",
      "/slimRosa.jpg",
      "/slimVerde.jpg",
      "/slimCinza.jpg",
    ],
    description:
      "Calça slim confeccionada em tecido de alta qualidade. Perfeita para ocasiões especiais e uso profissional. Modelagem que valoriza a silhueta feminina com elegância e sofisticação.",
    details: [
    "Tecido: 93% Poliéster, 7% Elastano",
    "Modelagem: Montaria",
    "Cintura: Alta com cós largo",
    "Bolsos: Faca funcionais",
    "Costura: Lateral com reforço",
    ],
  },
  {
    id: 4,
    name: "Short",
    price: 49.9,
    category: "Short",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Preto", "Marinho", "Marrom", "Vinho", "Ferrugem", "Rosa", "Verde", "Cinza", "Marçala", "Bege"],
    images: [
      "/shortBEGE.jpg",
      "/shortCINZA.jpg",
    ],
    description:
      "Short confeccionado em tecido de alta qualidade. Perfeita para ocasiões especiais e uso profissional. Modelagem que valoriza a silhueta feminina com elegância e sofisticação.",
    details: [
    "Tecido: 93% Poliéster, 7% Elastano",
    "Modelagem: Montaria",
    "Cintura: Alta com cós largo",
    "Bolsos: Faca funcionais",
    "Costura: Lateral com reforço",
    ],
  },
  {
    id: 5,
    name: "Bermuda",
    price: 49.9,
    category: "Bermuda",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Preto", "Marinho", "Marrom", "Vinho", "Ferrugem", "Rosa", "Verde", "Cinza", "Marçala", "Bege"],
    images: [
      "/bermudaVINHO.jpg",
      "/bermudaPRETO.jpg",
    ],
    description:
      "Bermuda confeccionada em tecido de alta qualidade. Perfeita para ocasiões especiais e uso profissional. Modelagem que valoriza a silhueta feminina com elegância e sofisticação.",
    details: [
    "Tecido: 93% Poliéster, 7% Elastano",
    "Modelagem: Montaria",
    "Cintura: Alta com cós largo",
    "Bolsos: Faca funcionais",
    "Costura: Lateral com reforço",
    ],
  },
  {
    id: 3,
    name: "Blaze",
    price: 99.9,
    category: "Blaze",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Preto", "Marinho", "Marrom", "Vinho", "Ferrugem", "Rosa", "Verde", "Cinza", "Marçala", "Bege"],
    images: [
      "/blazePRETO.jpg",
    ],
    description:
      "Blaze confeccionado em tecido de alta qualidade. Perfeita para ocasiões especiais e uso profissional. Modelagem que valoriza a silhueta feminina com elegância e sofisticação.",
    details: [
    "Tecido: 93% Poliéster, 7% Elastano",
    "Modelagem: Montaria", 
    ],
  },
  {
    id: 6,
    name: "Max Colete",
    price: 99.9,
    category: "Max Colete",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Preto", "Marinho", "Marrom", "Vinho", "Ferrugem", "Rosa", "Verde", "Cinza", "Marçala", "Bege"],
    images: [
      "/coleteMARINHO.jpg",
    ],
    description:
      "Colete confeccionado em tecido de alta qualidade. Perfeita para ocasiões especiais e uso profissional. Modelagem que valoriza a silhueta feminina com elegância e sofisticação.",
    details: [
    "Tecido: 93% Poliéster, 7% Elastano",
    "Modelagem: Montaria",
    ],
  },
]

export default function ProdutoDetalhePage() {
  const params = useParams()
  const productId = Number.parseInt(params.id as string)
  const produto = produtos.find((p) => p.id === productId) || produtos[0]

  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  const { addItem } = useCart()

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Por favor, selecione o tamanho e a cor")
      return
    }

    const cartItem = {
      id: produto.id,
      name: produto.name,
      price: produto.price,
      size: selectedSize,
      color: selectedColor,
      quantity: quantity,
      image: produto.images[0],
    }

    addItem(cartItem)
    alert("Produto adicionado ao carrinho!")
  }

  const handleBuyNow = () => {
    if (!selectedSize || !selectedColor) {
      alert("Por favor, selecione o tamanho e a cor")
      return
    }

    const message =
      `🛍️ *Olá! Gostaria de comprar:*\n\n` +
      `*${produto.name}*\n` +
      `📏 Tamanho: ${selectedSize}\n` +
      `🎨 Cor: ${selectedColor}\n` +
      `📦 Quantidade: ${quantity}\n` +
      `💰 Valor: R$ ${(produto.price * quantity).toFixed(2).replace(".", ",")}\n\n` +
      `Aguardo retorno para finalizar a compra! 😊`

    const whatsappUrl = `https://wa.me/5562985209196?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

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

      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-12">
          {/* Imagens do Produto */}
          <div className="space-y-3 sm:space-y-4">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-white shadow-md sm:shadow-lg">
              <Image
                src={produto.images[selectedImage] || "/placeholder.svg"}
                alt={produto.name}
                width={400}
                height={500}
                className="w-full h-auto object-cover sm:width-500 sm:height-600"
              />
            </div>
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {produto.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-14 h-14 sm:w-20 sm:h-20 rounded-md sm:rounded-lg overflow-hidden border-2 flex-shrink-0 bg-white shadow-sm ${
                    selectedImage === index ? "border-black" : "border-gray-200"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${produto.name} ${index + 1}`}
                    width={56}
                    height={56}
                    className="w-full h-full object-cover sm:w-80 sm:h-80"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Detalhes do Produto */}
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md sm:shadow-lg">
              <Badge className="bg-gray-100 text-gray-800 rounded-full mb-3 sm:mb-4 text-xs sm:text-sm">
                {produto.category}
              </Badge>
              <h1 className="text-xl sm:text-3xl font-bold text-black mb-3 sm:mb-4 leading-tight">{produto.name}</h1>
              <p className="text-2xl sm:text-4xl font-bold text-black mb-3 sm:mb-6">
                R$ {produto.price.toFixed(2).replace(".", ",")}
              </p>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md sm:shadow-lg space-y-3 sm:space-y-4">
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">Tamanho</label>
                <Select value={selectedSize} onValueChange={setSelectedSize}>
                  <SelectTrigger className="rounded-full h-10 sm:h-12 border-gray-200 text-sm sm:text-base">
                    <SelectValue placeholder="Selecione o tamanho" />
                  </SelectTrigger>
                  <SelectContent>
                    {produto.sizes.map((size) => (
                      <SelectItem key={size} value={size}>
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">Cor</label>
                <Select value={selectedColor} onValueChange={setSelectedColor}>
                  <SelectTrigger className="rounded-full h-10 sm:h-12 border-gray-200 text-sm sm:text-base">
                    <SelectValue placeholder="Selecione a cor" />
                  </SelectTrigger>
                  <SelectContent>
                    {produto.colors.map((color) => (
                      <SelectItem key={color} value={color}>
                        {color}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">Quantidade</label>
                <div className="flex items-center justify-center space-x-3 sm:space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="rounded-full w-9 h-9 sm:w-11 sm:h-11 p-0 border-gray-200"
                  >
                    <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>
                  <span className="text-base sm:text-xl font-semibold w-6 sm:w-8 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                    className="rounded-full w-9 h-9 sm:w-11 sm:h-11 p-0 border-gray-200"
                  >
                    <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-2 sm:space-y-4">
              <Button
                onClick={handleAddToCart}
                size="lg"
                className="w-full bg-black text-white hover:bg-gray-800 rounded-full py-2 sm:py-4 text-sm sm:text-lg h-11 sm:h-14 shadow-md sm:shadow-lg"
              >
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Adicionar ao Carrinho
              </Button>

              <Button
                onClick={handleBuyNow}
                size="lg"
                variant="outline"
                className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-full py-2 sm:py-4 text-sm sm:text-lg h-11 sm:h-14 shadow-md sm:shadow-lg"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Comprar Agora via WhatsApp
              </Button>
            </div>

            <Card className="rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg">
              <CardContent className="p-4 sm:p-6">
                <h3 className="font-semibold text-sm sm:text-lg mb-2 sm:mb-3">Descrição</h3>
                <p className="text-xs sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">{produto.description}</p>

                <h4 className="font-semibold mb-1 sm:mb-2 text-xs sm:text-base">Detalhes do Produto:</h4>
                <ul className="space-y-1 text-xs sm:text-sm text-gray-600">
                  {produto.details.map((detail, index) => (
                    <li key={index}>• {detail}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}