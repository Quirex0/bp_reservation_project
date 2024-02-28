import prisma from '../../../utils/prisma'
import { Place } from '@prisma/client'
import { NextRequest } from 'next/server'


export async function POST(req: NextRequest) {

    try {
        console.log(req.body)
        const body = await req.json()

        const reservation = await prisma.reservation.create({
            data: {
                firstName: body.firstName,
                lastName: body.lastName,
                email: body.email,
                place: body.place as Place,
                date: body.date,
            }
        })

        console.log(reservation)
        if (reservation !== null) {

            return Response.json(reservation)
        }
    } catch (err) {
        console.log(err)
        return new Response("error", { status: 500 })
    }

};
