
import { test, expect } from "@playwright/experimental-ct-react";
import App423 from "../example/App423.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App423 />);
  await expect(component).toContainText("Learn React");
});
