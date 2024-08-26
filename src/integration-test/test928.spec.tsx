
import { test, expect } from "@playwright/experimental-ct-react";
import App928 from "../example/App928.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App928 />);
  await expect(component).toContainText("Learn React");
});
