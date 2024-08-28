
import { test, expect } from "@playwright/experimental-ct-react";
import App1641 from "./App1641.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1641 />);
  await expect(component).toContainText("Learn React");
});
