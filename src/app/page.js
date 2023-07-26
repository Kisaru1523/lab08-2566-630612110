import { Header } from "../../compement/Header";
import { Taskinput } from "../../compement/Taskinput";
import { Task } from "../../compement/Task";
import { Footer } from "../../compement/Footer";

export default function Home() {
  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header></Header>
      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <Taskinput></Taskinput>
        {/* task */}
        <Task title="Read a book"></Task>
        {/* task */}
        <Task title="Take a shower"></Task>
        {/* task */}
        <Task title="Sleep"></Task>
      </div>

      {/* //footer section */}
      <Footer
        year="2023"
        fullname="Wisarut Sada"
        studentId="630612110"
      ></Footer>
    </div>
  );
}
