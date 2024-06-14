import React from 'react'
import HomePage from './_components/HomePage'
import { getServerAuthSession } from '~/server/auth'
import { redirect } from 'next/navigation'

const page = async() => {
  const session = await getServerAuthSession();
  return (<>
  {!session?(<HomePage/>):(redirect("/video"))}
  </>)
}

export default page