
import { test, expect } from "@playwright/experimental-ct-react";
import App1462 from "./App1462.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1462 />);
  await expect(component).toContainText("Learn React");
});
