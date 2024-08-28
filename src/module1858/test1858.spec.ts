
import { test, expect } from "@playwright/experimental-ct-react";
import App1858 from "./App1858.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1858 />);
  await expect(component).toContainText("Learn React");
});
