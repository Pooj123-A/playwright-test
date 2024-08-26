
import { test, expect } from "@playwright/experimental-ct-react";
import App2848 from "../example/App2848.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2848 />);
  await expect(component).toContainText("Learn React");
});
