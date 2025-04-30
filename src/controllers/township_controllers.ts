import { Request, Response } from 'express';
import { PrismaClient } from '../../generated/prisma/client';

const prisma = new PrismaClient();

export const getTownships = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const townships = await prisma.township.findMany();
    res.json(townships);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving townships' });
  }
};
