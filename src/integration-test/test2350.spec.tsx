
import { test, expect } from "@playwright/experimental-ct-react";
import App2350 from "../example/App2350.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2350 />);
  await expect(component).toContainText("Learn React");
});
