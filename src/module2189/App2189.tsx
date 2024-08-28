
import { test, expect } from "@playwright/experimental-ct-react";
import App2189 from "./App2189.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2189 />);
  await expect(component).toContainText("Learn React");
});
