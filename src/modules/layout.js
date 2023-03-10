import React from "react";
import Header from "./header";
import Nav from "./nav";
import Content from "./content";
import Footer from "./footer";
export default function Layout() {
  return (
    <main>
      <Header />
      <Nav />
      <Content />
      <Footer />
    </main>
  );
}
