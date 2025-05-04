import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'

const Banner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-500">
    <div className="container px-4 mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Enhance Your AI Experience?</h2>
      <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
        Start generating powerful prompts that unlock the full potential of AI models.
      </p>
      <Button asChild size="lg" variant="secondary" className="font-semibold">
            <Link href="/generator">
              Try the Generator Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
    </div>
  </section>
  )
}

export default Banner
