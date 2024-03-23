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

interface WelcomeEmailProps {
  firstName: string,
  content: string,
  email: string
}


export const WelcomeEmail = ({ firstName, content, email }: WelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>Zpětná vazba z webu</Preview>
    <Body >
      <Container >
        <Heading > {firstName} má dotaz!</Heading>

        <Text>
          {content}
        </Text>

        <Text >
          S pozdravem, <br />
          {firstName}

          E-mail: {email}
        </Text>
      </Container>
    </Body>
  </Html>
);

export default WelcomeEmail;
