
import { test, expect } from "@playwright/experimental-ct-react";
import App2623 from "../example/App2623.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2623 />);
  await expect(component).toContainText("Learn React");
});
