import { nanoid } from "nanoid";
import URL from "../models/url";

const handleGenerateNewUrl = async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ msg: "Please provide a URL" });
  }

  const shortID = nanoid(8);

  try {
    await URL.create({
      shortId: shortID,
      redirectURL: url,
      visitHistory: [],
    });

    return res.status(201).json({ id: shortID });
  } catch (error) {
    console.error("Error creating URL:", error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

export default handleGenerateNewUrl;
