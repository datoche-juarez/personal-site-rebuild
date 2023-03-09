import Link from "next/link";
import { Button } from "@chakra-ui/react";

const Projects = () => {
  return (
    <div>
      <h1>Projects Page</h1>

      <Link href="/">
        <Button variant="secondaryOutline">Go back</Button>
      </Link>
    </div>
  );
};

export default Projects;
