import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign up",
  description: "Sign up",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
