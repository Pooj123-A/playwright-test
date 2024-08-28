
import { test, expect } from "@playwright/experimental-ct-react";
import App1760 from "./App1760.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1760 />);
  await expect(component).toContainText("Learn React");
});
