
import { test, expect } from "@playwright/experimental-ct-react";
import App1832 from "./App1832.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1832 />);
  await expect(component).toContainText("Learn React");
});
