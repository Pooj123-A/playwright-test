
import { test, expect } from "@playwright/experimental-ct-react";
import App2298 from "../example/App2298.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2298 />);
  await expect(component).toContainText("Learn React");
});
