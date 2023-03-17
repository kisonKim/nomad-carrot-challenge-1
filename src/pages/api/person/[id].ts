import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  ok: boolean;
  person: Person;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;

  const person = await (
    await fetch(`https://billions-api.nomadcoders.workers.dev/person/${id}`)
  ).json();

  res.status(200).json({ ok: true, person });
}
