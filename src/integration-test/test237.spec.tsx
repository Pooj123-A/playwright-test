
import { test, expect } from "@playwright/experimental-ct-react";
import App237 from "../example/App237.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App237 />);
  await expect(component).toContainText("Learn React");
});
