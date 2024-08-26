
import { test, expect } from "@playwright/experimental-ct-react";
import App494 from "../example/App494.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App494 />);
  await expect(component).toContainText("Learn React");
});
