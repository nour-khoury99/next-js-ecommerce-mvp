"use server"

import db from "@/db/db"

export async function userOrderExists(email: string, productId: string) {
  return (
    (await db.order.findFirst({
      where: { user: { email }, productId },
      select: { id: true },
    })) != null
  )
}

//find the order of the field for the email and purchase this product