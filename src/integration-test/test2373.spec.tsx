
import { test, expect } from "@playwright/experimental-ct-react";
import App2373 from "../example/App2373.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2373 />);
  await expect(component).toContainText("Learn React");
});
