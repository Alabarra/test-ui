import React from 'react'
import { Button } from './button'
import { DotsHorizontalIcon } from "@radix-ui/react-icons"

export default function MenuDot() {
  return (
    <Button variant="secondary">
      <span className="sr-only">Acciones</span>
      <DotsHorizontalIcon className="h-4 w-4" />
    </Button>
  )
}
