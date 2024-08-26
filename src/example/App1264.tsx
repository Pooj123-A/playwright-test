
import { test, expect } from "@playwright/experimental-ct-react";
import App1264 from "./App1264.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1264 />);
  await expect(component).toContainText("Learn React");
});
