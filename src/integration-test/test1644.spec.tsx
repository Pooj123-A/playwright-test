
import { test, expect } from "@playwright/experimental-ct-react";
import App1644 from "../example/App1644.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1644 />);
  await expect(component).toContainText("Learn React");
});
