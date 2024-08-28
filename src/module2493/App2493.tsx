
import { test, expect } from "@playwright/experimental-ct-react";
import App2493 from "./App2493.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2493 />);
  await expect(component).toContainText("Learn React");
});
