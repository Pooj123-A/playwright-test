
import { test, expect } from "@playwright/experimental-ct-react";
import App2279 from "../example/App2279.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2279 />);
  await expect(component).toContainText("Learn React");
});
