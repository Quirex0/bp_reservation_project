import prisma from '../../../utils/prisma'
import { NextRequest } from 'next/server'


export async function GET(req: NextRequest) {

    const searchParams = req.nextUrl.searchParams
    const date = searchParams.get("date")
    const place = searchParams.get("place") as string
    const isodate = new Date(date as string)
    const formattedDate = isodate.toISOString().split('T')[0];
    
    try {
        console.log(isodate)
        console.log(formattedDate)
        const reservation = await prisma.$queryRaw `SELECT * FROM Reservation WHERE date LIKE ${formattedDate + '%'}`
        

        console.log(reservation)
        if (reservation !== null) {

            return Response.json(reservation)
        }
    }
    catch (err) {
        console.log(err)
        return new Response("error", { status: 500 })
    }
}
