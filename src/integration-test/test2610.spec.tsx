
import { test, expect } from "@playwright/experimental-ct-react";
import App2610 from "../example/App2610.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2610 />);
  await expect(component).toContainText("Learn React");
});
