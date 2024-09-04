
import { test, expect } from "@playwright/experimental-ct-react";
import App1562 from "./App1562.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1562 />);
  await expect(component).toContainText("Learn React");
});
