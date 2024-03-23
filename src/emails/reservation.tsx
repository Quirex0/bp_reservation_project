import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ReservationEmailProps {
  firstName: string,
  lastName: string,
  email: string,
  place: string,
  date: string,
}

function getPlaceName(code: string): string {
  switch (code) {
      case 'Praha_8_Bohnice':
          return 'Praha 8 - Bohnice';
      case 'Praha_8_Karlin':
          return 'Praha 8 - Karlín';
      case 'Plzen':
          return 'Plzeň';
      default:
          return code;
  }
}

export const ReservationEmail = ({ firstName, lastName, email, place, date }: ReservationEmailProps) => {
  const formattedDate = new Date(date).toLocaleDateString('cs', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' });


  return (


    <Html>
      <Head />
      <Preview>Úspěšná rezervace</Preview>
      <Body >
        <Container >
          <Heading >Rezervace byla úspěšná!</Heading>
          <Text >
            Děkujeme za Vaši rezervaci.
          </Text>

          <Text >
            Souhrn: <br />
            {firstName} {lastName} <br />
            {email} <br />
            {place && getPlaceName(place)} <br />
            {formattedDate}
          </Text>

          <Text >
            S pozdravem, <br />
            Jitka Moučková
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

export default ReservationEmail;

