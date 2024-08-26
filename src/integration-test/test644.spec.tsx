
import { test, expect } from "@playwright/experimental-ct-react";
import App644 from "../example/App644.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App644 />);
  await expect(component).toContainText("Learn React");
});
