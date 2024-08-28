
import { test, expect } from "@playwright/experimental-ct-react";
import App2535 from "./App2535.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2535 />);
  await expect(component).toContainText("Learn React");
});
