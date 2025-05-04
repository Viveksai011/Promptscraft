"use client"

import type React from "react"
import { useState } from "react"
import { Coffee, Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { contactText } from "@/lib/contact" 

interface ContactModalProps {
  children: React.ReactNode
  className?: string
}

export const ContactModal: React.FC<ContactModalProps> = ({ children, className = "" }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast({
        title: contactText.validation.missingFields.title,
        description: contactText.validation.missingFields.description,
        variant: "destructive",
      })
      setIsSubmitting(false)
      return
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) {
      toast({
        title: contactText.validation.invalidEmail.title,
        description: contactText.validation.invalidEmail.description,
        variant: "destructive",
      })
      setIsSubmitting(false)
      return
    }

    setTimeout(() => {
      toast({
        title: contactText.success.title,
        description: contactText.success.description,
      })
      setName("")
      setEmail("")
      setMessage("")
      setIsSubmitting(false)
      setIsOpen(false)
    }, 1500)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className={`sm:max-w-[500px] ${className}`}>
        <DialogHeader>
          <DialogTitle>{contactText.dialogTitle}</DialogTitle>
          <DialogDescription>
            <div className="mt-2 space-y-4">
              <p>{contactText.dialogDescription}</p>
              <div className="flex items-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <Coffee className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-3 flex-shrink-0" />
                <p className="text-sm">
                  {contactText.support.message.split(contactText.support.linkText)[0]}
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 dark:text-purple-400 font-medium hover:underline"
                  >
                    {contactText.support.linkText}
                  </a>
                  {contactText.support.message.split(contactText.support.linkText)[1]}
                </p>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">{contactText.labels.name}</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={contactText.placeholders.name}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">{contactText.labels.email}</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={contactText.placeholders.email}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">{contactText.labels.message}</Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={contactText.placeholders.message}
              className="min-h-[120px]"
              required
            />
          </div>
          <DialogFooter>
            <Button disabled className="w-full sm:w-auto">
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {contactText.button.sending}
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  {contactText.button.send}
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
