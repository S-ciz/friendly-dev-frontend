import Header from "../components/Header";

import About from "../components/About";

const AboutPage = () => {
  return (
    <>
      <Header />
      <section>
        <About>
          <p className="py-3 text-gray-300">
            I am a Congolese painter currently based in Johannesburg, South
            Africa, where I pursue a pictorial exploration fueled by the city's
            energy and the diversity of my inspirations. My work explores the
            human and animal presence through portraits, silhouettes, and
            felines.
          </p>
          <p className="py-3 text-gray-300">
            The gaze, attitude, and vital energy of my subjects become my focal
            points, revealing a tension between power, fragility, and mystery.
             Although I begin with a figurative language, I deliberately
            distances myself from realism. I adopts an instinctive, expressive,
            and symbolic aesthetic—a style where forms intertwine, metamorphose,
            and reinvent themselves. 
          </p>
          <p className="text-gray-300">
            This approach is embodied in particular in
            <strong> MUKEKA </strong> a visual direction inspired by the textures and rhythms of
            African basketry, which I reinterprets in my own artistic language.
            On each canvas, I intentionally limits my palette to four colors,
            creating a precise harmony where nuance, contrast, and vibration
            take on a particular force. I begin with a clear intention, then
            embraces spontaneity, chance, and the freedom of gesture as
            essential elements of my creative process.
          </p>
        </About>
      </section>
    </>
  );
};

export default AboutPage;
