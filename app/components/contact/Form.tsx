'use client'

import React, { useState } from 'react'

const Form = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [feedback, setFeedback] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = (formData.get('name') as string || '').trim()
    const email = (formData.get('email') as string || '').trim()
    const subject = (formData.get('subject') as string || '').trim() || 'Contact request from Gudaidia website'
    const message = (formData.get('message') as string || '').trim()

    if (!name || !email) {
      setStatus('error')
      setFeedback('Please enter your name and email before submitting.')
      return
    }

    setStatus('sending')
    setFeedback('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message }),
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Unable to send your message. Please try again later.')
      }

      setStatus('success')
      setFeedback('Message sent successfully. We will respond shortly.')
      event.currentTarget.reset()
    } catch (error) {
      setStatus('error')
      setFeedback(error instanceof Error ? error.message : 'Something went wrong. Please try again later.')
    }
  }

  return (
    <div>
      <div className="px-4 md:px-20 lg:px-40 py-20 bg-[#0b4141] contactimage">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row justify-center items-center pb-5 gap-3">
            <input type="text" name="name" placeholder="Name *" className="outline-none p-2 w-full bg-[#FFFFF0]" />
            <input type="email" name="email" placeholder="Email *" className="outline-none p-2 w-full bg-[#FFFFF0]" />
          </div>
          <input type="text" name="subject" placeholder="Subject" className="outline-none p-2 mb-5 w-full bg-[#FFFFF0] text-sm" />
          <textarea name="message" placeholder="Message" rows={5} className="resize-none mb-5 w-full bg-[#FFFFF0] p-2 text-sm"></textarea>

          {status !== 'idle' && (
            <p className={`mb-4 text-sm ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
              {feedback}
            </p>
          )}

          <input type="submit" value={status === 'sending' ? 'Sending...' : 'Submit'} className="bg-[#8db48e] p-2 w-full cursor-pointer hover:bg-[#F7E7CE] hover:text-[#020035] font-semibold" disabled={status === 'sending'} />
        </form>
      </div>
    </div>
  )
}

export default Form