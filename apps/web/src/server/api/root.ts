import { createTRPCRouter } from "./trpc";
import { itemRouter } from "./routers/item";
import { learnRouter } from "./routers/learn";

export const appRouter = createTRPCRouter({
  item: itemRouter,
  learn: learnRouter,
  // [REGISTER_ROUTER] -- Add new routers above this line
});

export type AppRouter = typeof appRouter;
