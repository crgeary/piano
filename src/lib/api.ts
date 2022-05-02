import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

export const wrapper = (cb: NextApiHandler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      return await cb(req, res);
    } catch (err) {
      return res.status(500).json({
        error: {
          message: err instanceof Error ? err.message : "Unknown Error",
        },
      });
    }
  };
};
