
import { test, expect } from "@playwright/experimental-ct-react";
import App630 from "../example/App630.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App630 />);
  await expect(component).toContainText("Learn React");
});
