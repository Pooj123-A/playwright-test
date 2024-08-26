
import { test, expect } from "@playwright/experimental-ct-react";
import App65 from "../example/App65.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App65 />);
  await expect(component).toContainText("Learn React");
});
