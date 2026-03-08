import { TestimonialSlider, type Testimonial } from "@/components/ui/testimonial-slider"

const testimonials: Testimonial[] = [
  {
    image: "/placeholder.svg?height=400&width=400",
    quote:
      "Заказываю шнуры уже второй год — качество стабильное, цвета яркие и не выгорают. Особенно люблю их пастельную палитру для плетения корзин. Доставка всегда быстрая!",
    name: "Анна Соколова",
    role: "Мастер макраме, Москва",
    rating: 5,
  },
  {
    image: "/placeholder.svg?height=400&width=400",
    quote:
      "Использую тонкий шнур 1 мм для браслетов — он идеально тянется, не рвётся и держит узлы. Покупатели постоянно спрашивают, где я беру такой красивый материал. Всем рекомендую!",
    name: "Марина Волкова",
    role: "Мастер украшений, Санкт-Петербург",
    rating: 5,
  },
  {
    image: "/placeholder.svg?height=400&width=400",
    quote:
      "Купила шнуры для детских игрушек — очень довольна! Материал мягкий, гипоаллергенный, цвета яркие. Дети в восторге от кукол, которых я плету. Буду заказывать ещё.",
    name: "Елена Петрова",
    role: "Мастер игрушек, Екатеринбург",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-32 px-4 bg-background overflow-visible">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">Что говорят мастера</h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Отзывы покупателей, которые уже создают изделия с нашими шнурами.
          </p>
        </div>
        <TestimonialSlider testimonials={testimonials} />
      </div>
    </section>
  )
}