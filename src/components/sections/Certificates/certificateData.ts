export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  image: string;
};

import barqCertificate from "../../../assets/images/certificates/page-1.png";
import frontendCertificate from "../../../assets/images/certificates/page-2.png";
import flutterCertificate from "../../../assets/images/certificates/page-3.png";

export const certificates: Certificate[] = [
  {
    title: "Data & AI Internship Program",
    issuer: "BARQ Academy",
    date: "August 2025",
    image: barqCertificate,
  },
  {
    title: "Frontend Development Diploma",
    issuer: "Route IT Training Center",
    date: "14 February 2025",
    image: frontendCertificate,
  },
  {
    title: "Flutter Development Diploma",
    issuer: "Route",
    date: "13 March 2026",
    image: flutterCertificate,
  },
];