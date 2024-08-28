
import { test, expect } from "@playwright/experimental-ct-react";
import App1318 from "./App1318.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1318 />);
  await expect(component).toContainText("Learn React");
});
