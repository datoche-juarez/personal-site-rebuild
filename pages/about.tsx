import Link from "next/link";
import { Button } from "@chakra-ui/react";

const About = () => {
  return (
    <div>
      <h1>About Page</h1>

      <Link href="/">
        <Button variant="secondaryOutline">Go back</Button>
      </Link>
    </div>
  );
};

export default About;
