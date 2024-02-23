import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../utils/prisma'
import { NextResponse } from 'next/server';
import { json } from 'stream/consumers';


export async function GET(){
    
    try {
        const orders = await prisma.day.findMany()
        console.log(orders)
        if(orders!==null) {
 
            return Response.json(orders)
        }
        else {
            return new Response("error more",{status:500})
        }
    } catch (err) {
        return new Response("error more 4",{status:400})
    }
  
};
