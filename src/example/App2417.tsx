
import { test, expect } from "@playwright/experimental-ct-react";
import App2417 from "./App2417.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2417 />);
  await expect(component).toContainText("Learn React");
});
