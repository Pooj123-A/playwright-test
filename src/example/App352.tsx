
import { test, expect } from "@playwright/experimental-ct-react";
import App352 from "./App352.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App352 />);
  await expect(component).toContainText("Learn React");
});
