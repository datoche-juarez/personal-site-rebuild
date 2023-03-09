import Link from "next/link";
import { Button } from "@chakra-ui/react";

const Contact = () => {
  return (
    <div>
      <h1>Contact Page</h1>

      <Link href="/">
        <Button variant="secondaryOutline">Go back</Button>
      </Link>
    </div>
  );
};

export default Contact;
