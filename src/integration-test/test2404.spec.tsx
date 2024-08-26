
import { test, expect } from "@playwright/experimental-ct-react";
import App2404 from "../example/App2404.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2404 />);
  await expect(component).toContainText("Learn React");
});
