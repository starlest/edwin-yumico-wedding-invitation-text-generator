"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useState } from "react"
import { Button } from "@/components/ui/button"

import { convert } from "html-to-text";

export default function Home() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [language, setLanguage] = useState("");
  const engInvitationText =
    `
      Dear ${firstName} ${lastName},
      <br />
      <br />
      We&#39;re overjoyed to share some wonderful news with you! Love has filled our hearts, and we would be truly honored to have you join us in celebrating our union in matrimony.
      <br />
      <br />
      You&#39;re Cordially Invited to Our Wedding! Please visit our wedding website for all the details:
      <br />
      https://kondangankuy.com/EdwinYumicowedding/?to=${firstName}+${lastName}
      <br />
      <br />
      Your love and blessings mean the world to us, and we can&#39;t wait to see your radiant smile on our special day. We eagerly anticipate sharing this joyous occasion with you, surrounded by our beloved family and friends.
      <br />
      <br />
      With heartfelt love and boundless excitement,
      <br />
      Edwin & Yumico
  `
  const idInvitationText =
    `
      Kepada ${firstName} ${lastName},
      <br />
      <br />
      Kami sangat senang untuk berbagi kabar bahagia dengan Anda! Cinta telah memenuhi hati kami, dan kami akan sangat senang jika Anda bersedia berbagi kebahagiaan kami saat kami bersatu dalam pernikahan.
      <br />
      <br />
      Anda Diundang ke Pernikahan Kami! Silakan kunjungi situs web pernikahan kami untuk seluruh detail acara:
      <br />
      https://kondangankuy.com/EdwinYumicowedding/?to=${firstName}&#43;${lastName}
      <br />
      <br />
      Kami tak sabar untuk berbagi momen kebahagiaan ini bersama Anda, dikelilingi oleh keluarga dan sahabat.
      <br />
      <br />
      Dengan cinta dan kebahagiaan,
      <br />
      Edwin & Yumico
      `

  return (
    <main className="container h-screen w-screen bg-gray-300 flex flex-col gap-y-5 items-center justify-center text-center">
      <div className="header">
        <h1 className="font-bold text-2xl">Edwin & Yumico</h1>
        <h2 className="font-muted">Wedding Invitation Text Generator</h2>
      </div>

      <Input onChange={e => setFirstName(e.target.value)} placeholder="First Name" className="w-1/3" />
      <Input onChange={e => setLastName(e.target.value)} placeholder="Last Name" className="w-1/3" />
      <Select onValueChange={setLanguage}>
        <SelectTrigger className="w-1/8">
          <SelectValue placeholder="Language" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="eng">English</SelectItem>
          <SelectItem value="id">Bahasa Indonesia</SelectItem>
        </SelectContent>
      </Select>
      <AlertDialog>
        <AlertDialogTrigger disabled={firstName == '' || lastName == '' || language == ''} className={`bg-primary text-white rounded-sm p-2 ${firstName == '' || lastName == '' || language == '' ? "opacity-50" : "opacity-100"}`}>Generate</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Wedding Invitation Text</AlertDialogTitle>
            <AlertDialogDescription>
              <div dangerouslySetInnerHTML={language == "eng" ? { __html: engInvitationText } : { __html: idInvitationText }}></div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button onClick={e => {
              language == "eng" ? navigator.clipboard.writeText(convert(engInvitationText)) : navigator.clipboard.writeText(convert(idInvitationText))
            }}>Copy</Button>
            <AlertDialogAction>Done</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </main>
  )
}
