
import { test, expect } from "@playwright/experimental-ct-react";
import App2453 from "../example/App2453.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2453 />);
  await expect(component).toContainText("Learn React");
});
