
import { test, expect } from "@playwright/experimental-ct-react";
import App2862 from "../example/App2862.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2862 />);
  await expect(component).toContainText("Learn React");
});
