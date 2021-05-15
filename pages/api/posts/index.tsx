// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'

const API_URL = process.env.API_URL;

export default async (req: NextApiRequest, res: NextApiResponse) => {

  const response = await fetch(`${API_URL}/posts`);
  const result = await response.json();

  if (response?.ok) {
    return res.status(200).json({ posts: [...result] })
  }

  return res.status(200).json({ posts: [] })
  
}
