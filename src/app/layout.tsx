import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";  
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toogle";
import { siteConfig } from "@/config";
import { WEBSITE_HOST_URL } from "@/lib/constants";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  description:
    "A Glazing Design é uma empresa especializada na concepção e instalação de projetos inteligentes e modernos. Vidro temperado, laminado, box, espelhos. | (61) 9 8669-2775",
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
    other: {
      me: ["my-email", "my-link"]
    }
  },
  manifest: "/manifest.json",
  authors: [{ name: "Glazing Design" }],
  metadataBase: new URL(`${siteConfig.url}`),
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/cover.jpg`,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: "Glazing Design",
    images: [
      {
        url: `${siteConfig.url}/cover.jpg`
      }
    ]
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/cover.jpg`]
  },
  alternates: {
    canonical: WEBSITE_HOST_URL
  },
  keywords: [
    "Vidro temperdo",
    "Vidro laminado",
    "Box para banheiro",
    "Espelho",
    "Guarda corpo de vidro",
    "Pergolado",
    "Vidro para varanda",
    "Glazing design",
    "Pele de vidro"
  ]
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "cyan" },
    { media: "(prefers-color-scheme: dark)", color: "black" }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="Pt-BR" className="[color-scheme:dark]">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />
            <div className="flex flex-1 flex-col px-4 pt-4 lg:py-8 p-4 w-full h-screen">
              <div className="flex gap-3 items-center">
                <SidebarTrigger />
                <ModeToggle />
              </div>
              {children}
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
