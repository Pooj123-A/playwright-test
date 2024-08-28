
import { test, expect } from "@playwright/experimental-ct-react";
import App1328 from "./App1328.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1328 />);
  await expect(component).toContainText("Learn React");
});
