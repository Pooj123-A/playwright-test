
import { test, expect } from "@playwright/experimental-ct-react";
import App246 from "../example/App246.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App246 />);
  await expect(component).toContainText("Learn React");
});
