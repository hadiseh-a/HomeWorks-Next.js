import Header from "@/components/Header";
import { CssBaseline } from "@mui/material";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CssBaseline />
        <Header />
        {children}
      </body>
    </html>
  );
}
