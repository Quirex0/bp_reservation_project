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
  const formattedDate = new Date(date);

  const day = formattedDate.getDate().toString().padStart(2, '0'); // Get day and pad with leading zero if necessary
  const month = (formattedDate.getMonth() + 1).toString().padStart(2, '0'); // Get month (+1 because months are zero-indexed) and pad with leading zero if necessary
  const year = formattedDate.getFullYear(); // Get full year
  const hours = formattedDate.getHours().toString().padStart(2, '0'); // Get hours and pad with leading zero if necessary
  const minutes = formattedDate.getMinutes().toString().padStart(2, '0'); // Get minutes and pad with leading zero if necessary

  const formattedDateString = `${day}, ${month}, ${year} ${hours}:${minutes}`;

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
            {formattedDateString}
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

