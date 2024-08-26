
import { test, expect } from "@playwright/experimental-ct-react";
import App2124 from "../example/App2124.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2124 />);
  await expect(component).toContainText("Learn React");
});
