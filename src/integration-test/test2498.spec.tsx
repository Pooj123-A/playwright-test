
import { test, expect } from "@playwright/experimental-ct-react";
import App2498 from "../example/App2498.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2498 />);
  await expect(component).toContainText("Learn React");
});
