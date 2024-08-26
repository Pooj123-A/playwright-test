
import { test, expect } from "@playwright/experimental-ct-react";
import App2932 from "../example/App2932.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2932 />);
  await expect(component).toContainText("Learn React");
});
