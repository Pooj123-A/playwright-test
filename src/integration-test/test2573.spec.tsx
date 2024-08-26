
import { test, expect } from "@playwright/experimental-ct-react";
import App2573 from "../example/App2573.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2573 />);
  await expect(component).toContainText("Learn React");
});
