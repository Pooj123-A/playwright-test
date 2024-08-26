
import { test, expect } from "@playwright/experimental-ct-react";
import App2459 from "../example/App2459.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2459 />);
  await expect(component).toContainText("Learn React");
});
