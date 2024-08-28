
import { test, expect } from "@playwright/experimental-ct-react";
import App1060 from "./App1060.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1060 />);
  await expect(component).toContainText("Learn React");
});
