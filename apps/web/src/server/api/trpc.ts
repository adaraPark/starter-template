import { initTRPC } from "@trpc/server";
import superjson from "superjson";

export const createTRPCContext = async () => {
  // When you add auth, inject the session here
  // const session = await auth();
  return {
    // db: prisma, // uncomment when you add Prisma
    // session,
  };
};

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
});

export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;

// [ADD_PROCEDURE] -- Add new procedure types above this line
// Example protected procedure (uncomment when auth is added):
// const enforceUserIsAuthed = t.middleware(({ ctx, next }) => {
//   if (!ctx.session?.user) throw new TRPCError({ code: "UNAUTHORIZED" });
//   return next({ ctx: { ...ctx, session: ctx.session } });
// });
// export const protectedProcedure = t.procedure.use(enforceUserIsAuthed);
