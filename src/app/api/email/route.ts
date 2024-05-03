import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { WelcomeEmail } from '@/emails/Welcome';
import { ReservationEmail } from '@/emails/reservation';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
	const { firstName, email, content, lastName, place, date } = await request.json();
console.log(content)

	try {
		if (content === undefined) {
			await resend.emails.send({
				from: process.env.MAIL_FROM || '',
				to: [email, process.env.MY_MAIL],
				subject: 'Rezervace masáže',
				react: ReservationEmail({
					firstName,
					lastName,
					email,
					place,
					date
				})
			});
		}
		else {
			await resend.emails.send({
				from: process.env.MAIL_FROM || '',
				to: process.env.MY_MAIL || '',
				subject: 'Dotaz z webu',
				react: WelcomeEmail({
					firstName,
					email,
					content
				})
			});
		}
		return NextResponse.json({
			status: 'Ok'
		}, {
			status: 200
		})
	} catch (e: unknown) {
		if (e instanceof Error) {
			console.log(`Failed to send email: ${e.message}`);
		}
		return NextResponse.json({
			error: 'Internal server error.'
		}, {
			status: 500
		})
	}
}