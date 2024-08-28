
import { test, expect } from "@playwright/experimental-ct-react";
import App1743 from "./App1743.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1743 />);
  await expect(component).toContainText("Learn React");
});
