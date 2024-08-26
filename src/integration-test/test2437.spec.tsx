
import { test, expect } from "@playwright/experimental-ct-react";
import App2437 from "../example/App2437.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2437 />);
  await expect(component).toContainText("Learn React");
});
