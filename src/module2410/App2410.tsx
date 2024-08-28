
import { test, expect } from "@playwright/experimental-ct-react";
import App2410 from "./App2410.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2410 />);
  await expect(component).toContainText("Learn React");
});
