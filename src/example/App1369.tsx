
import { test, expect } from "@playwright/experimental-ct-react";
import App1369 from "./App1369.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1369 />);
  await expect(component).toContainText("Learn React");
});
