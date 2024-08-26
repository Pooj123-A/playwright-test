
import { test, expect } from "@playwright/experimental-ct-react";
import App2135 from "../example/App2135.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2135 />);
  await expect(component).toContainText("Learn React");
});
