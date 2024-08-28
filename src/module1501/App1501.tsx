
import { test, expect } from "@playwright/experimental-ct-react";
import App1501 from "./App1501.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1501 />);
  await expect(component).toContainText("Learn React");
});
