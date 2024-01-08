import Footer from "../components/home/Footer";

const Contact = () => {
  document.documentElement.style.background = "rgba(34,34,39,.94)";
  // document.body.style.background = "rgba(34,34,39,.94)";
  // (document.querySelector("#root") as HTMLDivElement).style.background =
  //   "rgba(34,34,39,.94)";
  return (
    <div>
      <p className="text-white text-2xl bg-transparent py-12">Contact</p>
      <Footer hideIdea={true} />
    </div>
  );
};

export default Contact;
