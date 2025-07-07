import { Header, Hero, About, Projects, Footer } from "./components";

function App(): JSX.Element {
  return (
    <>
      {/* <Dots /> */}
      <div className="dots"></div>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
