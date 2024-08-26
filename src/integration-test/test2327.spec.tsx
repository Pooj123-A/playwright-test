
import { test, expect } from "@playwright/experimental-ct-react";
import App2327 from "../example/App2327.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2327 />);
  await expect(component).toContainText("Learn React");
});
