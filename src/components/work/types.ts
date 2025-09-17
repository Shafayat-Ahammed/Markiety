import type { JSX } from "react";

interface WorkType {
  title: string;
  description: string;
  summaryContents: JSX.Element;
  agreementUrl: string;
  invoiceUrl: string;
}

export type { WorkType };
