
import { test, expect } from "@playwright/experimental-ct-react";
import App1160 from "./App1160.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1160 />);
  await expect(component).toContainText("Learn React");
});
