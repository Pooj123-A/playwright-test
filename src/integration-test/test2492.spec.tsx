
import { test, expect } from "@playwright/experimental-ct-react";
import App2492 from "../example/App2492.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2492 />);
  await expect(component).toContainText("Learn React");
});
