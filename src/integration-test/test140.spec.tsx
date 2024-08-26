
import { test, expect } from "@playwright/experimental-ct-react";
import App140 from "../example/App140.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App140 />);
  await expect(component).toContainText("Learn React");
});
