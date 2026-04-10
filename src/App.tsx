import { useState, useEffect } from 'react';
import { 
  Bolt, 
  Sun, 
  Zap, 
  Home, 
  Settings, 
  ShieldCheck, 
  Gauge, 
  Users, 
  Shield, 
  ArrowRight, 
  Menu, 
  X, 
  Smartphone, 
  Video, 
  Search, 
  CheckCircle2,
  MessageCircle,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStep, setFormStep] = useState(1);
  const [selectedService, setSelectedService] = useState('solar');

  return (
    <div className="min-h-screen flex flex-col">
      {/* TopAppBar */}
      <nav className="fixed top-0 w-full z-50 glass-nav">
        <div className="flex justify-between items-center px-6 py-4 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <Bolt className="text-primary fill-primary" size={24} />
            <span className="text-xl font-extrabold text-primary tracking-tighter">Integra Soluções</span>
          </div>
          
          <div className="hidden md:flex gap-8 items-center">
            <a href="#" className="text-on-surface-variant font-bold hover:text-primary transition-colors">Início</a>
            <a href="#servicos" className="text-on-surface-variant font-bold hover:text-primary transition-colors">Serviços</a>
            <a href="#projetos" className="text-on-surface-variant font-bold hover:text-primary transition-colors">Projetos</a>
            <a href="#" className="bg-secondary text-primary px-6 py-2 rounded-lg font-bold hover:opacity-90 transition-opacity uppercase text-xs tracking-widest">Contato</a>
          </div>

          <button className="md:hidden text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-surface border-b border-outline-variant/20 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                <a href="#" className="text-on-surface-variant font-bold" onClick={() => setIsMenuOpen(false)}>Início</a>
                <a href="#servicos" className="text-on-surface-variant font-bold" onClick={() => setIsMenuOpen(false)}>Serviços</a>
                <a href="#projetos" className="text-on-surface-variant font-bold" onClick={() => setIsMenuOpen(false)}>Projetos</a>
                <a href="#" className="bg-secondary text-primary px-6 py-3 rounded-lg font-bold text-center" onClick={() => setIsMenuOpen(false)}>CONTATO</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative px-6 py-12 md:py-20 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-secondary/10 to-transparent rounded-full blur-3xl -z-10 translate-x-1/4 -translate-y-1/4"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl -z-10 -translate-x-1/4 translate-y-1/4"></div>
          
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
            {/* Hero Text */}
            <div className="lg:col-span-5 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest mb-6 uppercase">
                  Curadoria Técnica
                </span>
                <h1 className="text-5xl md:text-6xl font-extrabold text-primary tracking-tighter leading-tight">
                  Conte-nos o que você precisa
                </h1>
                <p className="mt-6 text-lg text-on-surface-variant leading-relaxed">
                  Transformamos sua necessidade em soluções integradas de alta performance energética e infraestrutura inteligente.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="p-6 bg-surface rounded-xl border border-outline-variant/20 card-shadow"
              >
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <ShieldCheck className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary">Compromisso com a Qualidade</h3>
                    <p className="text-sm text-on-surface-variant mt-1 italic">
                      "Sua solicitação será avaliada por nossa curadoria para selecionar o melhor parceiro."
                    </p>
                  </div>
                </div>
              </motion.div>

              <div className="flex -space-x-3 items-center pt-4">
                {[1, 2, 3].map((i) => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/seed/user${i}/100/100`} 
                    alt={`Parceiro ${i}`}
                    className="w-12 h-12 rounded-full border-4 border-background object-cover"
                    referrerPolicy="no-referrer"
                  />
                ))}
                <div className="pl-6 text-sm font-semibold text-on-surface-variant">
                  +450 parceiros certificados
                </div>
              </div>
            </div>

            {/* Lead Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="bg-surface rounded-2xl shadow-2xl p-8 md:p-12 border border-outline-variant/15">
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  {/* Step indicators */}
                  <div className="flex gap-2 mb-10">
                    <div className={`h-1.5 flex-1 rounded-full transition-colors ${formStep >= 1 ? 'bg-secondary' : 'bg-outline-variant/30'}`}></div>
                    <div className={`h-1.5 flex-1 rounded-full transition-colors ${formStep >= 2 ? 'bg-secondary' : 'bg-outline-variant/30'}`}></div>
                    <div className={`h-1.5 flex-1 rounded-full transition-colors ${formStep >= 3 ? 'bg-secondary' : 'bg-outline-variant/30'}`}></div>
                  </div>

                  <div className="space-y-10">
                    <section>
                      <label className="block text-sm font-bold text-primary tracking-widest mb-4 uppercase">Serviço de Interesse</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { id: 'solar', label: 'Energia Solar', sub: 'Eficiência e sustentabilidade', icon: Sun },
                          { id: 'electric', label: 'Instalações Elétricas', sub: 'Projetos de alta tensão', icon: Zap },
                          { id: 'infra', label: 'Infraestrutura', sub: 'Gestão e manutenção', icon: Home },
                          { id: 'auto', label: 'Automação', sub: 'Smart Building solutions', icon: Settings },
                        ].map((service) => (
                          <label key={service.id} className="group relative cursor-pointer">
                            <input 
                              type="radio" 
                              name="servico" 
                              className="peer sr-only" 
                              checked={selectedService === service.id}
                              onChange={() => setSelectedService(service.id)}
                            />
                            <div className="p-6 rounded-xl border-2 border-outline-variant/20 peer-checked:border-secondary peer-checked:bg-secondary/5 transition-all group-hover:bg-background">
                              <service.icon className="text-primary mb-3 block" size={32} />
                              <div className="font-bold text-primary">{service.label}</div>
                              <div className="text-xs text-on-surface-variant">{service.sub}</div>
                            </div>
                          </label>
                        ))}
                      </div>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-bold text-primary tracking-widest uppercase">Nome</label>
                        <input 
                          type="text" 
                          placeholder="Como devemos te chamar?"
                          className="w-full bg-background border-none focus:ring-2 focus:ring-secondary rounded-lg p-4 text-on-surface placeholder:text-on-surface-variant/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-bold text-primary tracking-widest uppercase">WhatsApp</label>
                        <input 
                          type="tel" 
                          placeholder="(00) 00000-0000"
                          className="w-full bg-background border-none focus:ring-2 focus:ring-secondary rounded-lg p-4 text-on-surface placeholder:text-on-surface-variant/50"
                        />
                      </div>
                      <div className="md:col-span-2 space-y-2">
                        <label className="block text-sm font-bold text-primary tracking-widest uppercase">Tipo de Imóvel</label>
                        <div className="flex flex-wrap gap-3">
                          {['Residencial', 'Comercial', 'Industrial', 'Agronegócio'].map((type) => (
                            <label key={type} className="cursor-pointer">
                              <input type="radio" name="imovel" className="peer sr-only" defaultChecked={type === 'Residencial'} />
                              <div className="px-6 py-2 rounded-full bg-background peer-checked:bg-primary peer-checked:text-white transition-colors text-sm font-semibold">
                                {type}
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>
                    </section>

                    <button className="w-full py-5 bg-secondary text-primary font-extrabold text-lg rounded-xl flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-secondary/20 transition-all active:scale-[0.98]">
                      SOLICITAR ORÇAMENTO CURADO
                      <ArrowRight size={20} />
                    </button>
                    <p className="text-center text-xs text-on-surface-variant/70">
                      Seus dados estão protegidos sob nossa Política de Privacidade.
                    </p>
                  </div>
                </form>
              </div>

              {/* Trust Signals */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-4 bg-surface rounded-xl flex flex-col items-center text-center card-shadow">
                  <Gauge className="text-primary mb-2" size={32} />
                  <span className="text-xs font-bold text-primary">Resposta em 24h</span>
                </div>
                <div className="p-4 bg-surface rounded-xl flex flex-col items-center text-center card-shadow">
                  <Users className="text-primary mb-2" size={32} />
                  <span className="text-xs font-bold text-primary">Auditado por Nós</span>
                </div>
                <div className="p-4 bg-surface rounded-xl flex flex-col items-center text-center col-span-2 md:col-span-1 card-shadow">
                  <Shield className="text-primary mb-2" size={32} />
                  <span className="text-xs font-bold text-primary">Garantia Técnica</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Bento Grid */}
        <section id="servicos" className="py-24 px-6 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary">Excelência em cada detalhe</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">Selecionamos apenas o que há de mais moderno e eficiente para sua infraestrutura residencial ou corporativa.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Large Card */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="md:col-span-2 group relative h-[400px] rounded-3xl overflow-hidden shadow-sm"
              >
                <img 
                  src="https://picsum.photos/seed/solar-farm/1200/800" 
                  alt="Energia Solar" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent p-8 flex flex-col justify-end">
                  <span className="bg-secondary text-primary px-3 py-1 rounded-full text-xs font-bold w-fit mb-4 uppercase tracking-tighter">Mais procurado</span>
                  <h3 className="text-2xl font-bold text-white mb-2">Energia Solar Fotovoltaica</h3>
                  <p className="text-white/80 max-w-md">Redução de até 95% na sua conta de luz com equipamentos de alta durabilidade e garantia de performance.</p>
                </div>
              </motion.div>

              {/* Small Card 1 */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="group relative h-[400px] rounded-3xl overflow-hidden shadow-sm"
              >
                <img 
                  src="https://picsum.photos/seed/robot-cleaning/600/800" 
                  alt="Limpeza de Placas" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-2">Limpeza de Placas</h3>
                  <p className="text-white/80">Manutenção robotizada que recupera a eficiência original do seu sistema sem riscos de danos.</p>
                </div>
              </motion.div>

              {/* Small Card 2 */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="group relative h-[400px] rounded-3xl overflow-hidden shadow-sm"
              >
                <img 
                  src="https://picsum.photos/seed/underfloor-heating/600/800" 
                  alt="Piso Aquecido" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-2">Piso Aquecido</h3>
                  <p className="text-white/80">Conforto térmico inteligente com controle via app para os ambientes mais exigentes.</p>
                </div>
              </motion.div>

              {/* Medium Card */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="md:col-span-2 group relative h-[400px] rounded-3xl overflow-hidden shadow-sm"
              >
                <img 
                  src="https://picsum.photos/seed/ev-charger/1200/800" 
                  alt="Carregadores EV" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-2">Carregadores EV</h3>
                  <p className="text-white/80 max-w-md">Instalação de estações de carregamento ultrarrápido para veículos elétricos em residências e condomínios.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
              <div className="max-w-lg">
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">Como trabalhamos</h2>
                <p className="text-on-surface-variant">Um processo rigoroso para garantir que sua única preocupação seja desfrutar do resultado final.</p>
              </div>
              <div className="hidden md:block h-px flex-1 bg-outline-variant/30 mx-12 mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { step: '01', title: 'Curadoria', desc: 'Analisamos seu perfil e necessidade para encontrar as soluções técnicas mais adequadas ao seu imóvel e orçamento.', icon: Search },
                { step: '02', title: 'Homologação', desc: 'Selecionamos apenas parceiros com certificações em dia, histórico comprovado e excelência técnica garantida.', icon: ShieldCheck },
                { step: '03', title: 'Acompanhamento', desc: 'Gerenciamos toda a jornada, desde a contratação até a entrega técnica, garantindo o cumprimento de prazos e padrões.', icon: Gauge },
              ].map((item, idx) => (
                <div key={idx} className="relative group">
                  <div className="text-6xl font-black text-primary/5 absolute -top-8 -left-4 group-hover:text-secondary/20 transition-colors">{item.step}</div>
                  <div className="relative z-10 space-y-4">
                    <div className="h-14 w-14 rounded-2xl bg-primary flex items-center justify-center text-secondary">
                      <item.icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                    <p className="text-on-surface-variant leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20 px-6 bg-primary text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/10 skew-x-12 transform translate-x-1/2"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">Por que escolher a <span className="text-secondary">Integra Soluções</span>?</h2>
                <div className="space-y-6">
                  {[
                    { title: 'Empresas 100% homologadas', desc: 'Filtro rigoroso de fornecedores para sua segurança jurídica e técnica.' },
                    { title: 'Acompanhamento do início ao fim', desc: 'Sua única interface de comunicação para todos os serviços contratados.' },
                    { title: 'Redução de riscos', desc: 'Eliminamos as incertezas de contratar prestadores sem referências sólidas.' },
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="text-secondary" size={16} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{feature.title}</h4>
                        <p className="text-white/60">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/10">
                <div className="space-y-6 text-center">
                  <p className="text-2xl font-light italic">"A Integra Soluções nos poupou semanas de busca. Encontraram o parceiro ideal para energia solar e cuidaram de tudo. Transparência total."</p>
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-secondary">
                      <img 
                        src="https://picsum.photos/seed/ricardo/100/100" 
                        alt="Ricardo S. Almeida" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <p className="font-bold">Ricardo S. Almeida</p>
                      <p className="text-sm text-white/50">Proprietário Residencial</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary">Pronto para elevar o padrão do seu imóvel?</h2>
            <p className="text-on-surface-variant text-lg">Fale com um de nossos especialistas hoje mesmo e receba um orçamento personalizado sem compromisso.</p>
            <button className="bg-secondary text-primary px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl shadow-secondary/20 hover:scale-105 active:scale-95 transition-all">
              Solicitar Meu Orçamento Grátis
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white pt-20 pb-24 md:pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6 col-span-1 md:col-span-1">
              <div className="flex items-center gap-2">
                <Bolt className="text-secondary fill-secondary" size={24} />
                <span className="text-xl font-extrabold tracking-tighter">Integra Soluções</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                Sua plataforma de curadoria técnica especializada em engenharia, sustentabilidade e conforto doméstico premium.
              </p>
              <div className="flex gap-4">
                <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Serviços</h4>
              <ul className="space-y-4 text-sm text-white/50">
                <li><a href="#" className="hover:text-secondary transition-colors">Energia Solar</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Limpeza de Placas</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Piso Aquecido</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Carregadores EV</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Empresa</h4>
              <ul className="space-y-4 text-sm text-white/50">
                <li><a href="#" className="hover:text-secondary transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Seja um Parceiro</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Projetos</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Contatos</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Contato</h4>
              <ul className="space-y-4 text-sm text-white/50">
                <li className="flex items-center gap-2">
                  <Mail size={16} />
                  contato@integrasolucoes.com.br
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} />
                  (11) 4004-0000
                </li>
                <li className="flex items-center gap-2">
                  <MapPin size={16} />
                  São Paulo, SP - Brasil
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
            <p>© 2024 Integra Soluções. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#">Privacidade</a>
              <a href="#">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/551140040000" 
        target="_blank" 
        className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95 group"
      >
        <MessageCircle size={32} />
        <span className="absolute right-full mr-4 bg-primary text-white text-xs font-bold py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
          Fale conosco no WhatsApp
        </span>
      </a>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 bg-primary rounded-t-2xl z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <a href="#" className="flex flex-col items-center justify-center text-white/70 hover:text-white transition-colors">
          <Home size={20} />
          <span className="text-[10px] font-semibold mt-1">Início</span>
        </a>
        <a href="#servicos" className="flex flex-col items-center justify-center text-white/70 hover:text-white transition-colors">
          <Settings size={20} />
          <span className="text-[10px] font-semibold mt-1">Serviços</span>
        </a>
        <a href="#projetos" className="flex flex-col items-center justify-center text-white/70 hover:text-white transition-colors">
          <Sun size={20} />
          <span className="text-[10px] font-semibold mt-1">Projetos</span>
        </a>
        <a href="https://wa.me/551140040000" className="flex flex-col items-center justify-center text-secondary bg-white/10 rounded-xl px-4 py-2">
          <Smartphone size={20} />
          <span className="text-[10px] font-semibold mt-1">Suporte</span>
        </a>
      </nav>
    </div>
  );
}
