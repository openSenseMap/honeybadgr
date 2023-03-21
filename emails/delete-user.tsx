import { Html } from "@react-email/html";
import { Body } from "@react-email/body";
import { Container } from "@react-email/container";
import { Head } from "@react-email/head";
import { Heading } from "@react-email/heading";
import { Link } from "@react-email/link";
import { Preview } from "@react-email/preview";
import { Text } from "@react-email/text";
import * as React from "react";

import i18next from "i18next";

i18next.init({
  debug: false,
  resources: {
    en: {
      translation: {
        preview: "Your openSenseMap account has been deleted",
        heading: "openSenseMap account has been deleted",
        hello: "Dear",
        description:
          "Your account and all registered senseBoxes are being deleted. Sad to see you go!",
        hint: "This action is irreversible. If you want to participate again, register yourself a new account at",
        hint_suffix: ".",
        support:
          "If you have any questions, feel free to write us an email to:",
        salutation: "Best wishes, your openSenseMap Team",
      },
    },
    de: {
      translation: {
        preview: "Dein openSenseMap Account wurde gelöscht",
        heading: "openSenseMap Account wurde gelöschen",
        hello: "Hallo",
        description:
          "Dein Account und alle deine senseBoxen wurden gerade gelöscht. Schade, dass du dich gelöscht hast!",
        hint: "Dieser Vorgang ist endgültig. Wenn du gerne wieder teilnehmen möchtest, kannst du dich einfach auf",
        hint_suffix: "neu registrieren.",
        support: "Wenn Du Fragen hast schreib uns eine Mail an:",
        salutation: "Tschüss, dein openSenseMap Team",
      },
    },
  },
});

interface User {
  name: string;
}

interface DeleteUserEmailProps {
  user: User;
  language: "de" | "en";
}

const baseUrl = process.env.OSEM_URL
  ? `https://${process.env.OSEM_URL}`
  : "https://opensensemap.org";

export const DeleteUserEmail = ({
  user = { name: "Max Mustermann" },
  language = "en",
}: DeleteUserEmailProps) => (
  <Html lang={language} dir="ltr">
    <Head />
    <Preview>{i18next.t("preview", { lng: language })}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>{i18next.t("heading", { lng: language })}</Heading>
        <Text>
          {i18next.t("hello", { lng: language })} {user.name},
        </Text>
        <Text>{i18next.t("description", { lng: language })}</Text>
        <Text>
          {i18next.t("hint", { lng: language })}{" "}
          <Link href={baseUrl} target="_blank">
            opensensemap.org
          </Link>{" "}
          {i18next.t("hint_suffix", { lng: language })}
        </Text>
        <Text>
          {i18next.t("support", { lng: language })} {}
          <Link href="mailto:support@sensebox.de">support@sensebox.de</Link>
        </Text>
        <Text>{i18next.t("salutation", { lng: language })}</Text>
      </Container>
    </Body>
  </Html>
);

export default DeleteUserEmail;

export const subject = {
  de: "Dein Account wurde gelöscht",
  en: "Your openSenseMap account has been deleted",
};

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

const link = {
  color: "#2754C5",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  textDecoration: "underline",
};

const text = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  margin: "24px 0",
};

const code = {
  display: "inline-block",
  padding: "16px 4.5%",
  width: "90.5%",
  backgroundColor: "#f4f4f4",
  borderRadius: "5px",
  border: "1px solid #eee",
  color: "#333",
};
