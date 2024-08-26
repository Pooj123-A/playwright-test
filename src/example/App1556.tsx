
import { test, expect } from "@playwright/experimental-ct-react";
import App1556 from "./App1556.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1556 />);
  await expect(component).toContainText("Learn React");
});
