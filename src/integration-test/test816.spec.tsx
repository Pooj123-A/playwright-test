
import { test, expect } from "@playwright/experimental-ct-react";
import App816 from "../example/App816.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App816 />);
  await expect(component).toContainText("Learn React");
});
