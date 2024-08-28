
import { test, expect } from "@playwright/experimental-ct-react";
import App2286 from "./App2286.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2286 />);
  await expect(component).toContainText("Learn React");
});
