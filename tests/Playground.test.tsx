import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import { describe, it } from "vitest";
import { App } from "../src/App.tsx";

function renderApp() {
  const link = new HttpLink({
    uri: "http://localhost:5173/graphql",
  });

  const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });

  render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
}

describe("Playground", () => {
  it("should reproduce successfully", async () => {
    renderApp();
  });
});
