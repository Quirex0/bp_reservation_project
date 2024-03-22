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
  const formattedDate = new Date(date).toLocaleDateString('cs-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' });


  return (


    <Html>
      <Head />
      <Preview>Úspěšná rezervace</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Rezervace byla úspěšná!</Heading>
          <Text style={{ ...text, marginBottom: "14px" }}>
            Děkujeme za Vaši rezervaci.
          </Text>

          <Text style={{ ...text, margin: "14px" }}>
            Souhrn: <br />
            {firstName} {lastName} <br />
            {email} <br />
            {place && getPlaceName(place)} <br />
            {formattedDate}
          </Text>

          <Text style={footer}>
            S pozdravem, <br />
            Jitka Moučková
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

export default ReservationEmail;

const main = {
  backgroundColor: "#ffffff",
};

const container = {
  paddingLeft: "12px",
  paddingRight: "12px",
  margin: "0 auto",
};

const h1 = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
};


const text = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  margin: "24px 0",
};

const footer = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  lineHeight: "22px",
  marginTop: "12px",
  marginBottom: "24px",
};

