import type { NextApiRequest, NextApiResponse } from "next";
import { signUp } from "@/lib/firebase/service";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    await signUp(req.body, (status: boolean) => {
      if (status) {
        res.status(200).json({ status: true, statuscode: 200, message: "Register Success" });
      } else {
        res.status(400).json({ status: false, statuscode: 400, message: "Register Failed" });
      }
    });
  } else {
    res.status(405).json({ status: false, statuscode: 405, message: "Method not allowed" });
  }
}
