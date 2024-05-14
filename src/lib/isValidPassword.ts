export async function isValidPassword(password: string, hashedPassword: string){
   
    return await hashPassword(password) === hashedPassword
}

//cypt password
async function hashPassword(password: string){
    const arrayBuffer = await crypto.subtle.digest("SHA-512", new TextEncoder().
    encode(password))

    return Buffer.from(arrayBuffer).toString("base64")
}