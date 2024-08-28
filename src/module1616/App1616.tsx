
import { test, expect } from "@playwright/experimental-ct-react";
import App1616 from "./App1616.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1616 />);
  await expect(component).toContainText("Learn React");
});
