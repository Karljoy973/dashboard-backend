import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { injectSpeedInsights } from "@vercel/speed-insights";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Documentation page Generated with Swagger",
};

export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	injectSpeedInsights();
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<div>{children}</div>
			</body>
		</html>
	);
}

//FIXME - Update Envs 
//NOTE - J'ai tenté mais je n'avais pas d'internet 