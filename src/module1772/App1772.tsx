
import { test, expect } from "@playwright/experimental-ct-react";
import App1772 from "./App1772.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1772 />);
  await expect(component).toContainText("Learn React");
});
