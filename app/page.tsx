import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Truck, Shield, RefreshCw, Instagram, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { CartModal } from "@/components/cart-modal"
import { ProductCard } from "@/components/product-card"

export default function GataShiLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center border border-black">
                <Image
                  src="/logogataedit.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h1 className="text-2xl font-bold text-black">Gatas-Shi</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/produtos" className="text-gray-700 hover:text-black transition-colors">
                Produtos
              </Link>
              <Link href="#sobre" className="text-gray-700 hover:text-black transition-colors">
                Sobre
              </Link>
              <Link href="#contato" className="text-gray-700 hover:text-black transition-colors">
                Contato
              </Link>
            </nav>
            <div className="flex items-center space-x-2">
              <CartModal />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4" style={{ backgroundColor: "#F4E6E6" }}>
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-black text-white rounded-full px-4 py-1">Nova Coleção 2025</Badge>
                <h2 className="text-5xl lg:text-6xl font-bold text-black leading-tight">
                  Elegância que
                  <span className="block">Define Você</span>
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Descubra peças únicas que realçam sua feminilidade com sofisticação e estilo moderno.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  size="lg"
                  className="bg-black text-white hover:bg-gray-800 rounded-full px-6 sm:px-8 py-3 text-base sm:text-lg w-full sm:w-auto"
                  asChild
                >
                  <Link href="/produtos">Ver Produtos</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-black text-black hover:bg-black hover:text-white rounded-full px-6 sm:px-8 py-3 text-base sm:text-lg w-full sm:w-auto"
                  asChild
                >
                  <Link
                    href="https://www.instagram.com/gatasshi/"
                    target="_blank"
                    className="flex items-center justify-center"
                  >
                    <Instagram className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    <span className="hidden sm:inline">Acesse nosso Instagram</span>
                    <span className="sm:hidden">Instagram</span>
                  </Link>
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-black">500+</div>
                  <div className="text-sm text-gray-600">Clientes Satisfeitas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-black">4.9</div>
                  <div className="flex items-center justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/calça.jpg"
                  alt="Modelo usando roupas Gatas-Shi"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-black">🔥 Promoção Exclusiva</div>
                    <div className="text-sm text-gray-600">Para seguidores do Instagram!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos em Destaque */}
      <section id="produtos" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-black mb-4">Produtos em Destaque</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Peças cuidadosamente selecionadas para compor looks únicos e sofisticados
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                id: 1,
                name: "Calça Flare",
                price: "R$ 99,90",
                category: "Calças",
                image: "/flarePRETO.JPG",
                sizes: ["P", "M", "G", "GG"],
                colors: ["Preto", "Marinho", "Marrom, Vinho, Ferrugem, Rosa, Verde, Cinza, Marçala, Bege"],
              },
              {
                id: 2,
                name: "Colete",
                price: "R$ 99,90",
                category: "Coletes",
                image: "coleteMARINHO.jpg",
                sizes: ["P", "M", "G", "GG"],
                colors: ["Preto", "Marinho", "Marrom, Vinho, Ferrugem, Rosa, Verde, Cinza, Marçala, Bege"],
              },
              {
                id: 3,
                name: "Bermuda",
                price: "R$ 129,90",
                category: "Bermudas",
                image: "/bermudaVINHO.jpg",
                sizes: ["P", "M", "G", "GG"],
                colors: ["Preto", "Marinho", "Marrom, Vinho, Ferrugem, Rosa, Verde, Cinza, Marçala, Bege"],
              },
            ].map((product, index) => (
              <ProductCard key={index} product={product} showQuickBuy={true} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white rounded-full px-8 py-3 text-lg"
              asChild
            >
              <Link href="/produtos">Ver Todos os Produtos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sobre a Marca */}
      <section id="sobre" className="py-20 px-4" style={{ backgroundColor: "#F4E6E6" }}>
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-4xl font-bold text-black">Sobre a Gatas-Shi</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Nascemos da paixão por criar peças que celebram a feminilidade moderna. Cada produto é pensado para
                  mulheres que valorizam qualidade, elegância e conforto.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Nossa missão é oferecer roupas que não apenas vestem, mas que fazem você se sentir confiante e
                  poderosa em qualquer ocasião.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div className="font-semibold text-black">Qualidade</div>
                  <div className="text-sm text-gray-600">Premium</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-3">
                    <Truck className="w-8 h-8 text-white" />
                  </div>
                  <div className="font-semibold text-black">Entrega</div>
                  <div className="text-sm text-gray-600">Rápida</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-3">
                    <RefreshCw className="w-8 h-8 text-white" />
                  </div>
                  <div className="font-semibold text-black">Troca</div>
                  <div className="text-sm text-gray-600">Fácil</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/logogataedit.png"
                alt="Sobre Gatas-Shi"
                width={400}
                height={500}
                className="w-full h-auto object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4" style={{ backgroundColor: "#F4E6E6" }}>
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="space-y-4">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <Instagram className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-black">Siga a gente no Instagram!</h3>
              <p className="text-xl text-gray-700">Não perca novidades, looks inspiradores e promoções exclusivas</p>
            </div>
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-3 text-lg" asChild>
              <Link href="https://www.instagram.com/gatasshi/" target="_blank" className="flex items-center">
                <Instagram className="w-6 h-6 mr-2" />
                @gatasshi
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-black text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h4 className="text-2xl font-bold">Gatas-Shi</h4>
              <p className="text-gray-400">Elegância e sofisticação para a mulher moderna.</p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-white hover:text-gray-300" asChild>
                  <Link href="https://www.instagram.com/gatasshi/" target="_blank">
                    <Instagram className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:text-gray-300" asChild>
                  <Link href="https://wa.me/5562996798457" target="_blank">
                    {/* SVG WhatsApp */}
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.71.306 1.263.489 1.695.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 6.318h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.987c-.003 5.45-4.437 9.884-9.88 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.304-1.678a11.86 11.86 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.892a11.82 11.82 0 00-3.48-8.485z"/>
                    </svg>
                  </Link>
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h5 className="font-semibold text-lg">Produtos</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/produtos" className="hover:text-white transition-colors">
                    Calças
                  </Link>
                </li>
                <li>
                  <Link href="/produtos" className="hover:text-white transition-colors">
                    Blazers
                  </Link>
                </li>
                <li>
                  <Link href="/produtos" className="hover:text-white transition-colors">
                    Shorts
                  </Link>
                </li>
                <li>
                  <Link href="/produtos" className="hover:text-white transition-colors">
                    Bermudas
                  </Link>
                </li>
                <li>
                  <Link href="/produtos" className="hover:text-white transition-colors">
                    Coletes
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h5 className="font-semibold text-lg">Atendimento</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="https://wa.me/5562996798457" className="hover:text-white transition-colors">
                    Central de Ajuda
                  </Link>
                </li>
                <li>
                  <Link href="https://wa.me/5562996798457" className="hover:text-white transition-colors">
                    Trocas e Devoluções
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h5 className="font-semibold text-lg">Contato</h5>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5" />
                  <span>gatashi@hotmail.com.br</span>
                </div>
                <div className="flex items-center space-x-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.71.306 1.263.489 1.695.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 6.318h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.987c-.003 5.45-4.437 9.884-9.88 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.304-1.678a11.86 11.86 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.892a11.82 11.82 0 00-3.48-8.485z"/>
                    </svg>
                  <Link
                    href="https://wa.me/5562996798457"
                    target="_blank"
                    className="hover:text-white transition-colors flex items-center"
                  >
                   Contato pelo WhatsApp
                  </Link>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5" />
                  <span>Goiânia, GO</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Gatas-Shi. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
