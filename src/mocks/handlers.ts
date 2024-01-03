import { HttpResponse, graphql } from "msw";

let currentNumber = 1;

export const handlers = [
  graphql.query("GetNumber", async () => {
    // Wait 2s
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return HttpResponse.json({
      data: {
        value: currentNumber++,
      },
    });
  }),
];
