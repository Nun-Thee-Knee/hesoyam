import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
    getbyId: publicProcedure
    .input(z.object({id: z.string()}))
    .query(async({ctx, input})=>{
        return ctx.db.user.findFirst({
            where: {
                id: input.id
            }
        })
    }),

});
