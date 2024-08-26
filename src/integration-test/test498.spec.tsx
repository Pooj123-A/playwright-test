
import { test, expect } from "@playwright/experimental-ct-react";
import App498 from "../example/App498.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App498 />);
  await expect(component).toContainText("Learn React");
});
