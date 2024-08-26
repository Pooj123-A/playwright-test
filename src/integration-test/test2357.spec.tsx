
import { test, expect } from "@playwright/experimental-ct-react";
import App2357 from "../example/App2357.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2357 />);
  await expect(component).toContainText("Learn React");
});
