
import { test, expect } from "@playwright/experimental-ct-react";
import App1468 from "./App1468.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1468 />);
  await expect(component).toContainText("Learn React");
});
