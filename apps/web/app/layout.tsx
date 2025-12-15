import React from 'react';
import './globals.css';

export const metadata = {
  title: 'SelfState',
  description: 'SelfState — Identität, Flow, Wirkung',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <main className="min-h-screen bg-white text-slate-900">{children}</main>
      </body>
    </html>
  );
}
