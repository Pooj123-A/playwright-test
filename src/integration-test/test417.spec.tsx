
import { test, expect } from "@playwright/experimental-ct-react";
import App417 from "../example/App417.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App417 />);
  await expect(component).toContainText("Learn React");
});
