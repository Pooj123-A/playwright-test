
import { test, expect } from "@playwright/experimental-ct-react";
import App550 from "../example/App550.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App550 />);
  await expect(component).toContainText("Learn React");
});
