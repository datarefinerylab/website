import './globals.css';

export const metadata = {
    title: 'Data Refinery Lab',
    description: 'A cross-departmental hub for design, research, and innovation',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    )
}
