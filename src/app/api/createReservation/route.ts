import prisma from '../../../utils/prisma'
import { Place } from '@prisma/client'
import { NextRequest } from 'next/server'


export async function POST(req: NextRequest) {

    try {
        
        const body = await req.json()
        console.log(body.date)
        const datum = new Date(body.date)
        datum.setHours(datum.getHours() + 1);
        const isoString = datum.toISOString();
        
        const reservation = await prisma.reservation.create({
            data: {
                firstName: body.firstName,
                lastName: body.lastName,
                email: body.email,
                place: body.place as Place,
                date: isoString,
            }
        })

        
        if (reservation !== null) {

            return Response.json(reservation)
        }
    } catch (err) {
        
        return new Response("error", { status: 500 })
    }

};
