
import { test, expect } from "@playwright/experimental-ct-react";
import App1116 from "./App1116.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1116 />);
  await expect(component).toContainText("Learn React");
});
