
import { test, expect } from "@playwright/experimental-ct-react";
import App1898 from "./App1898.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1898 />);
  await expect(component).toContainText("Learn React");
});
