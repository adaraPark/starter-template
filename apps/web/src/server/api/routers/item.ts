import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

// TODO: Wire up Prisma when database is connected
// For now, use in-memory mock data to demonstrate the pattern
const mockItems = [
  {
    id: "1",
    title: "First Item",
    description: "This is an example item",
    status: "published",
    userId: "user-1",
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-15"),
  },
  {
    id: "2",
    title: "Draft Item",
    description: "This item is still in draft",
    status: "draft",
    userId: "user-1",
    createdAt: new Date("2024-02-01"),
    updatedAt: new Date("2024-02-01"),
  },
  {
    id: "3",
    title: "Another Published Item",
    description: null,
    status: "published",
    userId: "user-1",
    createdAt: new Date("2024-03-10"),
    updatedAt: new Date("2024-03-10"),
  },
];

export const itemRouter = createTRPCRouter({
  getAll: publicProcedure.query(() => {
    // TODO: Replace with Prisma query
    // return ctx.db.item.findMany({ where: { userId: ctx.session.user.id } });
    return mockItems;
  }),

  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input }) => {
      // TODO: Replace with Prisma query
      // return ctx.db.item.findFirst({ where: { id: input.id, userId: ctx.session.user.id } });
      return mockItems.find((item) => item.id === input.id) ?? null;
    }),

  create: publicProcedure
    .input(
      z.object({
        title: z.string().min(1),
        description: z.string().optional(),
      }),
    )
    .mutation(({ input }) => {
      // TODO: Replace with Prisma mutation
      // return ctx.db.item.create({ data: { ...input, userId: ctx.session.user.id } });
      const newItem = {
        id: String(mockItems.length + 1),
        title: input.title,
        description: input.description ?? null,
        status: "draft",
        userId: "user-1",
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      mockItems.push(newItem);
      return newItem;
    }),

  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ input }) => {
      // TODO: Replace with Prisma mutation
      // return ctx.db.item.delete({ where: { id: input.id, userId: ctx.session.user.id } });
      const index = mockItems.findIndex((item) => item.id === input.id);
      if (index === -1) return { success: false };
      mockItems.splice(index, 1);
      return { success: true };
    }),
});
