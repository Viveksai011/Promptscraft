import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'
import { ContactModal } from '@/components/comman/custommodal'

const Banner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-500">
    <div className="container px-4 mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Enhance Your AI Experience?</h2>
      <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
        Start generating powerful prompts that unlock the full potential of AI models.
      </p>
      <div className='flex flex-wrap items-center justify-center gap-3'>

      <Button asChild size="lg" variant="secondary" className="font-semibold">
            <Link href="/generator">
              Try the Generator Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
      <ContactModal>
        <span role="button" aria-label="Contact us" className='font-semibold px-2.5 py-2 rounded-md ml-3  cursor-pointer border border-purple-600 dark:text-black text-white bg-purple-900/50 dark:bg-white '>Contact Us</span>
      </ContactModal>
      </div>
    </div>
  </section>
  )
}

export default Banner
