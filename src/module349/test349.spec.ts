
import { test, expect } from "@playwright/experimental-ct-react";
import App349 from "./App349.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App349 />);
  await expect(component).toContainText("Learn React");
});
