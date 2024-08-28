
import { test, expect } from "@playwright/experimental-ct-react";
import App2686 from "./App2686.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2686 />);
  await expect(component).toContainText("Learn React");
});
