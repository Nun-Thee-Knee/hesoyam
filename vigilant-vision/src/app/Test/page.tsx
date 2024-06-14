'use client'
import React from 'react'
import { api } from '~/trpc/react'

const page = () => {
    const user = api.user.getbyId.useQuery({
        id: "clx5pxv330000cwq6mjaibb2o"
    })
  return (
    <div>{JSON.stringify(user.data)}</div>
  )
}

export default page