import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  ok: boolean;
  billions: Billion[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const billions = await (
    await fetch("https://billions-api.nomadcoders.workers.dev/")
  ).json();

  res.status(200).json({ ok: true, billions });
}
