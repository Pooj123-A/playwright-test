
import { test, expect } from "@playwright/experimental-ct-react";
import App2415 from "../example/App2415.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2415 />);
  await expect(component).toContainText("Learn React");
});
