
import { test, expect } from "@playwright/experimental-ct-react";
import App2383 from "../example/App2383.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2383 />);
  await expect(component).toContainText("Learn React");
});
